window.location.hash = ''

async function setNewspage() {

    const response = await fetch('/root.json')
    const root = JSON.parse(await response.text())

    let count = 0
    root.news.forEach(() => count++)
    root.news.forEach(async (entry, i) => {

        let wait = (-(i-count)*200)-200

        let news = $('#news-content')[0]
        const response = await fetch(`/dist/${entry}.md`)
        const data = await response.text()
        var converter = new showdown.Converter()
        let doc = document.createElement('div')
        doc.innerHTML = converter.makeHtml(data)
        await new Promise(resolve => setTimeout(resolve, wait))
        news.appendChild(doc)
    })

}
setNewspage()

setInterval(() => {
    $('#docs-sidebar')[0].style.top = $('header')[0].offsetHeight + 'px'
    $('#units-sidebar')[0].style.top = $('header')[0].offsetHeight + 'px'
    $('#docs')[0].style.top = $('header')[0].offsetHeight + 'px'
    $('#units')[0].style.paddingTop = $('header')[0].offsetHeight + 'px'
    $('#news')[0].style.top = $('header')[0].offsetHeight + 'px'
    $('.material-symbols-outlined').each(function (i, btn) {
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
        $('#news').children().each(function (i, news) {
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

        });

        await new Promise(r => setTimeout(r, 10));
        let introductionCollapse = document.getElementById('Introduction-collapse')
        introductionCollapse.classList.add('show')
        let welcomeLink = document.getElementById('Welcome-link')
        welcomeLink.click()

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

    $(document).ready(function () {
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
            let news = document.getElementById('news')
            let pawikilaunch = document.getElementById('pawikixyzofficiallaunch')
            if (news.classList.contains("visible") && pawikilaunch.parentNode.clientHeight-12 > pawikilaunch.parentNode.getBoundingClientRect().top && confetti) {
                
                await new Promise(resolve => setTimeout(resolve, 250))
                party.confetti(pawikilaunch)
                confetti = false
            }
        },250)
    })
});