window.location.hash = '';

async function setNewspage() {

    const response = await fetch('/root.json');
    const root = JSON.parse(await response.text());

    root.news.forEach(async entry => {

        let news = $('#news-content')[0]
        const response = await fetch(`/dist/${entry}.md`);
        const data = await response.text();
        var converter = new showdown.Converter();
        let doc = document.createElement('div')

        // temp fix for a problem I don't wanna solve rn
        doc.innerHTML = converter.makeHtml(data) + "<br><br><br><br>";

        news.insertBefore(doc, news.firstChild)
    })


}
setNewspage()

setInterval(() => {
    $('#docs-sidebar')[0].style.top = $('header')[0].offsetHeight + 'px'
    $('#docs')[0].style.top = $('header')[0].offsetHeight + 'px'
    $('#units-sidebar')[0].style.top = $('header')[0].offsetHeight + 'px'
    $('#units')[0].style.top = $('header')[0].offsetHeight + 'px'
    $('#units')[0].style.top = $('header')[0].offsetHeight + 'px'
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
                    $('#docs-content')[0].style.left = `${sidebarOffset}px`


                    $('#units-sidebar')[0].classList.remove('hide')
                    $('#units-sidebar')[0].style.left = `0px`
                    $('#units-content')[0].style.left = `${sidebarOffset}px`
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

    });
}, 100);

let pos = { x: 0, y: 0 }
document.addEventListener('mousemove', event => {
    pos.x = event.pageX
    pos.y = event.pageY
    $('.toast')[0].style.left = pos.x + 24 + 'px'
    $('.toast')[0].style.top = pos.y - 24 + 'px'
    $('.toast')[0].classList = "toast hide"
})

document.addEventListener('DOMContentLoaded', () => {
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

    fetchUnits(async () => {

        $('.btn-unit').each(function () {
            $(this)[0].style = "color: var(--bs-gray-500)"
            $(this).click(function () {
                $('.btn-unit').each(function () {
                    $(this)[0].style = "color: var(--bs-gray-500)"
                })
                $(this)[0].style = "color: white"
            })
        })
    })

    $(document).ready(function () {
        $("body").tooltip({
            selector: '[data-toggle=tooltip]'
        });
    })
});