window.location.hash = '';

async function setHomepage() {
    const response = await fetch('/README.md');
    const data = await response.text();
    var converter = new showdown.Converter(),
        html = converter.makeHtml(data);
    home.innerHTML = html
}
setHomepage()

setInterval(()=>{ 
    $('#sidebar')[0].style.top = $('header')[0].offsetHeight + 'px'
    $('#content')[0].style.top = $('header')[0].offsetHeight + 'px'
    $('#home')[0].style.top = $('header')[0].offsetHeight + 'px'
    $('.material-symbols-outlined').each(function(i,btn) { 
        let headerOffset = ($('header')[0].offsetHeight/2)-12
        let sidebarOffset = $('#sidebar')[0].offsetWidth
        btn.style.top = headerOffset + 'px'
        if (btn.classList.contains('left')) {
            switch (headerOffset) {
                case 36:
                    btn.style.left = '24px';btn.style.color = null;break;
                default:
                    btn.style.left = '-24px';
                    btn.style.color = 'transparent';
                    
                    $('#sidebar')[0].classList.remove('hide')
                    $('#sidebar')[0].style.left = `0px`
                    $('#content')[0].style.left = `${sidebarOffset}px`
            }
        }
        else {
            switch (headerOffset) {
                case 36:
                    btn.style.right = '24px';break;
                default:btn.style.right = '12px'
            }
        }
        
     });
}, 100);

document.addEventListener('DOMContentLoaded', fetchDocs(async () => {

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
        $('#content')[0].appendChild(element)

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

    $('pre').each(function (i, block) {
        $(block).click(function () {
            $(this).selectText();
            navigator.clipboard.writeText($(this).text())
        });
    });

    await new Promise(r => setTimeout(r, 10));
    let introductionCollapse = document.getElementById('Introduction-collapse')
    introductionCollapse.classList.add('show')
    let welcomeLink = document.getElementById('Welcome-link')
    welcomeLink.click()

}));

$(document).ready(function () {
    $("body").tooltip({
        selector: '[data-toggle=tooltip]'
    });
});