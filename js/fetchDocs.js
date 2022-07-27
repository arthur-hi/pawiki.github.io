let list = []
async function fetchDocs(callback) {

    // Find all the files in the docs directory

    const response = await fetch('./root.json');
    const root = JSON.parse(await response.text());

    root.documentDirectories.forEach(dir => {
        root[dir].forEach(file => {
            root.filesRemaining++;
        })
    })
    root.documentDirectories.forEach(async directory => {

        let format = directory.replaceAll(/\s/g, '-').toLowerCase()

        let li = document.createElement('li')
        li.classList.add('mb-1')
        li.innerHTML = `
                    <button class="btn btn-toggle align-items-center text-white rounded collapsed"
                        data-bs-toggle="collapse" data-bs-target="#${format}-collapse" aria-expanded="false"
                        style="text-align: start; width: 100%;">
                        ${directory.replaceAll('-', ' ')}
                    </button>
                    <div class="collapse" id="${format}-collapse">
                        <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                        </ul>
                    </div>
                `
        $('#docs-list').append(li)
        let _collapse = `#${format}-collapse`
        let collapse = $(_collapse)[0]

        root[directory].forEach(async file => {

            let format = file.replace(/\s/g, '-').toLowerCase();
            let link = document.createElement('li')
            link.innerHTML =
                `<a class="link-light rounded text-decoration-none" style="color: var(--bs-gray-500)">${file.replaceAll('-', ' ')}</a>`
            link.children[0].classList.add('collapse-link')
            link.children[0].id = `${format}-link`
            link.style.padding = "10px"
            collapse.children[0].appendChild(link)

            const response = await fetch(`./dist/${directory}/${file}.md`);
            const data = await response.text();

            let doc = {}
            doc.file = format
            doc.content = data
            doc.link = link
            doc.collapse = _collapse
            list.push(doc)

            link.style.position = 'relative'
            link.style.top = "10px"
            link.style.left = "10px"

            root.filesRemaining--;
            if (root.filesRemaining == 0) callback()
        })
        let br = document.createElement('br')
        collapse.children[0].appendChild(br)
    });
}