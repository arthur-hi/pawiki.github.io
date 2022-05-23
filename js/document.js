let lastHash
let overrideWelcome = false
async function focusFragment() {
    if (window.location.hash !== lastHash) {
        lastHash = window.location.hash
        let fragments = window.location.hash.split('/')
        switch (fragments[0]) {

            case '#news':
                let news = document.getElementById('news-nav')
                news.click()
                if (fragments[1] != undefined) {
                    let newsDoc = document.getElementById(`${fragments[1].replace(/\s/g, '-').toLowerCase()}-news`)
                    if (newsDoc != null) {
                        let newsContent = document.getElementById('news-content')
                        let headerOffset = 50
                        if(window.innerWidth < 768) headerOffset = 100
                        newsContent.scrollTo(0, (newsDoc.getBoundingClientRect().top)-headerOffset)
                    }
                }
            break;
            case '#docs':
                let docs = document.getElementById('docs-nav')
                docs.click()
                if (fragments[1] != undefined) {
                    let docsCollapse = document.getElementById(`${fragments[1].toLowerCase()}-collapse`)
                    if (docsCollapse != undefined) {
                        docsCollapse.classList.add('show')
                        if (fragments[2] != undefined) {
                            overrideWelcome = true
                            let docLink = document.getElementById(`${fragments[2].toLowerCase()}-link`)
                            if (docLink != undefined) docLink.click()
                        }
                    }
                }
            break;
            case '#units':
                let units = document.getElementById('units-nav')
                units.click()
                if (fragments[1] != undefined) {
                    let collapse = document.getElementById(`${fragments[1].toLowerCase()}-collapse`)
                    if (collapse != undefined) {
                        collapse.classList.add('show')
                        if (fragments[2] != undefined) {
                            let collapse = document.getElementById(`${fragments[1].toLowerCase()}-${fragments[2].toLowerCase()}-collapse`)
                            if (collapse != undefined) {
                                collapse.classList.add('show')
                                if (fragments[3] != undefined) {
                                    let docLink = document.getElementById(`${fragments[3].toLowerCase()}-link`)
                                    if (docLink != undefined) docLink.click()
                                }
                            }
                        }
                    }
                }
            break;
        }
        if (!overrideWelcome) {
            let introductionCollapse = document.getElementById('introduction-collapse')
            introductionCollapse.classList.add('show')
            let welcomeLink = document.getElementById('welcome-link')
            welcomeLink.click()
        }
    }
}
setInterval(() => {
    focusFragment()
}, 250)

newsLoaded = false
async function fetchNews() {

    let fragments = window.location.hash.split('/')
    let hash = window.location.hash
    if (fragments[0] == '#news') {
        window.location.hash = 'loading'
    }
    
    $('.news-loading')[0].style.display = null
    let count = {
        current: 0,
        total: 0
    }

    async function updateProgress() {
        count.current++
        $('#news-progress')[0].setAttribute('aria-valuenow', count.current)
        $('#news-progress')[0].style.width = `${(count.current / count.total) * 100}%`
        let style = `font-family: var(--font-head); font-size: 14px`
        $('#news-progress')[0].innerHTML = `<span style="${style}">${count.total-count.current} to go</span>`
        if (count.total == count.current) {
            await new Promise(resolve => setTimeout(resolve, 500))
            $('.news-loading')[0].style.display = "none"
            window.location.hash = hash
            newsLoaded = true
        }
    }

    const response = await fetch('/root.json')
    const root = JSON.parse(await response.text())

    root.news.forEach(() => {
        count.total++
        $('#news-progress')[0].setAttribute('aria-valuemax', count.total)
    })
    root.news.forEach(async (entry, i) => {

        let wait = (-(i-count.total)*200)-200

        let news = $('#news-content')[0]
        const response = await fetch(`/dist/${entry}.md`)
        const data = await response.text()
        var converter = new showdown.Converter()
        let doc = document.createElement('div')
        doc.innerHTML = converter.makeHtml(data)
        await new Promise(resolve => setTimeout(resolve, wait))
        doc.id = `${(entry.replace(/\s/g, '-').toLowerCase()).split('/')[1]}-news`
        news.appendChild(doc)
        updateProgress()
        
        let copy = document.createElement('div')
        copy.style.position = 'absolute'
        copy.style.right = '0'
        copy.classList.add('noscroll')
        copy.innerHTML = 
        `<span class="material-symbols-outlined" id="url">
            link
        </span>`
        doc.appendChild(copy)

        setInterval(() => {
            copy.style.top = `${(doc.getBoundingClientRect().top + document.querySelector('#news-content').scrollTop - 110) + (window.innerWidth/25)}px`
        }, 250);
        
        let local = location.protocol+'//'+location.host
        copy.setAttribute('url', `${local}/#news/${(entry.replace(/\s/g, '-').toLowerCase()).split('/')[1]}`)

        copy.addEventListener('click', async function () {

            await new Promise(r => setTimeout(r, 250))
            copy.innerHTML = 
            `<span class="material-symbols-outlined" id="tick">
                check
            </span>`
            navigator.clipboard.writeText(copy.getAttribute('url'))
        })
        copy.addEventListener('mouseleave', async function () {
            await new Promise(r => setTimeout(r, 5000))
            copy.innerHTML = 
            `<span class="material-symbols-outlined" id="url">
                link
            </span>`
        })
    })
}

setInterval(() => {
    $('#docs-sidebar')[0].style.top = $('header')[0].offsetHeight + 'px'
    $('#units-sidebar')[0].style.top = $('header')[0].offsetHeight + 'px'
    $('#docs-main')[0].style.top = $('header')[0].offsetHeight + 'px'
    $('#units-main')[0].style.paddingTop = $('header')[0].offsetHeight + 'px'
    $('#news-main')[0].style.top = $('header')[0].offsetHeight + 'px'
    $('#btn').each(function (i, btn) {
        let headerOffset = ($('header')[0].offsetHeight / 2) - 12
        let sidebarOffset = $('#docs-sidebar')[0].offsetWidth
        btn.style.top = headerOffset + 'px'
        if (btn.classList.contains('left')) {
            switch (headerOffset) {
                case 36:
                    btn.style.left = '24px';
                    btn.style.color = null;
                    break;
                default:
                    btn.style.left = '-24px';
                    btn.style.color = 'transparent';

                    $('#docs-sidebar')[0].classList.remove('hide')
                    $('#docs-sidebar')[0].style.left = `0px`
                    $('#docs-content')[0].style.left = `${sidebarOffset+25}px`

                    $('#units-sidebar')[0].classList.remove('hide')
                    $('#units-sidebar')[0].style.left = `0px`
                    $('#units-content')[0].style.left = `${sidebarOffset+25}px`
            }
        } else {
            switch (headerOffset) {
                case 36:
                    btn.style.right = '24px';
                    break;
                default:
                    btn.style.right = '12px'
            }
        }

        $('.doc').each(function (i, doc) {
            let sidebarOffset = 0
            if (!$('#docs-sidebar')[0].classList.contains('hide')) sidebarOffset = $('#docs-sidebar')[0].offsetWidth

            let calc = (window.innerWidth - 10) - sidebarOffset
            $(doc).css('width', `${calc}px`)
        })
        $('#news-main').children().each(function (i, news) {
            let calc = (window.innerWidth - 10)
            $(news).css('width', `${calc}px`)
        })
        $('#news-content').children().each(function (i, doc) {
            let calc = (window.innerWidth - 10)
            $(doc).css('width', `${calc}px`)
        })
    });
}, 100);

let sidebarOffset = $('#docs-sidebar')[0].offsetWidth
$('#docs-content')[0].style.left = `${sidebarOffset+25}px`
$('#units-content')[0].style.left = `${sidebarOffset+25}px`

let pos = {
    x: 0,
    y: 0
}
document.addEventListener('mousemove', event => {
    pos.x = event.pageX
    pos.y = event.pageY
    $('.toast')[0].style.left = pos.x + 24 + 'px'
    $('.toast')[0].style.top = pos.y - 24 + 'px'
    $('.toast')[0].classList = "toast hide"
})

document.addEventListener('DOMContentLoaded', async () => {
    fetchDocs(async () => {

        list.forEach(doc => {

            let element = document.createElement('div')
            element.id = `${doc.file}.md`
            element.classList.add('hidden')
            element.classList.add('doc')
            var converter = new showdown.Converter();
            converter.setOption('literalMidWordAsterisks', true)
            converter.setOption('literalMidWordUnderscores', true)
            html = converter.makeHtml(doc.content);
            element.innerHTML = html
            $('#docs-content')[0].appendChild(element)

            doc.link.addEventListener('click', async () => {

                $('.collapse-link').each(function () {
                    $(this)[0].style = "color: var(--bs-gray-500)"
                })
                doc.link.children[0].style = "color: #f1662f"

                $('.doc').addClass('hidden');
                element.classList.add('visible');
                element.classList.remove('hidden');
            })

            let copy = document.createElement('div')
            copy.style.position = 'absolute'
            copy.style.top = '32px'
            copy.style.right = '64px'
            copy.innerHTML = 
            `<span class="material-symbols-outlined" id="url">
                link
            </span>`
            element.appendChild(copy)
            
            let local = location.protocol+'//'+location.host
            let collapse = doc.collapse.replace('#','').split('-')
            collapse.pop()
            copy.setAttribute('url', `${local}/#docs/${collapse.toString().replace(',','-')}/${doc.file}`)

            copy.addEventListener('click', async function () {

                await new Promise(r => setTimeout(r, 250))
                copy.innerHTML = 
                `<span class="material-symbols-outlined" id="tick">
                    check
                </span>`
                navigator.clipboard.writeText(copy.getAttribute('url'))
            })
            copy.addEventListener('mouseleave', async function () {
                await new Promise(r => setTimeout(r, 5000))
                copy.innerHTML = 
                `<span class="material-symbols-outlined" id="url">
                    link
                </span>`
            })
        });

        await new Promise(r => setTimeout(r, 1000));
        $('pre').each(function (i, block) {
            $(block).click(async () => {
                navigator.clipboard.writeText($(this).text())
                $("#copied").toast("show");
            });
        });
        $('.value').each(function (i, block) {
            $(block).click(async () => {
                navigator.clipboard.writeText($(this).text())
                $("#copied").toast("show");
            });
        });

    })

    let unitsDoc = document.createElement('div')
    unitsDoc.id = "units-intro"
    unitsDoc.className = "doc unit-doc"
    
    const response = await fetch(`/resources/units/README.md`);
    const data = await response.text();

    var converter = new showdown.Converter();
    converter.setOption('literalMidWordAsterisks', true)
    converter.setOption('literalMidWordUnderscores', true)
    html = converter.makeHtml(data);
    unitsDoc.innerHTML = html

    $('#units-content')[0].appendChild(unitsDoc)

    $('#units-nav').one('click', function () {
        fetchUnits(async () => {

            $('.btn-unit').each(function () {
                $(this).click(function () {
                    $('.btn-unit').each(function () {
                        $(this)[0].style = "color: var(--bs-gray-500)"
                    })
                    $(this)[0].style = "color: white"
                })
            })
        })
        $('#units-nav').off('click');
        resetUnitsNav()
    });

    
    $('#news-nav').one('click', function () {
        fetchNews()
        $('#news-nav').off('click');
        resetNewsNav()
    });

    $(document).ready(async function () {
        $("body").tooltip({
            selector: '[data-toggle=tooltip]'
        });

        let update = document.createElement('div')
        document.getElementById('docs-sidebar').appendChild(update)

        update.className = "update"

        fetch('https://api.github.com/repos/asanull/pawiki.github.io/commits?per_page=1')
        .then(res => res.json())
        .then(res => {
            let date = new Date(res[0].commit.author.date)
            update.innerText = `latest commit:\n${date.toString()}`
        })

        let confetti = true
        setInterval(async () => {
            let news = document.getElementById('news-main')
            let pawikilaunch = document.getElementById('pawikixyzofficiallaunch')
            
            if (newsLoaded && news.classList.contains("visible") && pawikilaunch.parentNode.clientHeight-12 > pawikilaunch.parentNode.getBoundingClientRect().top && confetti) {
                await new Promise(r => setTimeout(r, 250))
                if (newsLoaded && news.classList.contains("visible") && pawikilaunch.parentNode.clientHeight-12 > pawikilaunch.parentNode.getBoundingClientRect().top && confetti) {
                    party.confetti(pawikilaunch)
                    confetti = false
                }
            }
        },250)
    })
});