jQuery.fn.selectText = function () {
    this.find('input').each(function () {
        if ($(this).prev().length == 0 || !$(this).prev().hasClass('p_copy')) {
            $('<p class="p_copy" style="position: absolute; z-index: -1;"></p>').insertBefore($(
                this));
        }
        $(this).prev().html($(this).val());
    });
    var doc = document;
    var element = this[0];
    if (doc.body.createTextRange) {
        var range = document.body.createTextRange();
        range.moveToElementText(element);
        range.select();
    } else if (window.getSelection) {
        var selection = window.getSelection();
        var range = document.createRange();
        range.selectNodeContents(element);
        selection.removeAllRanges();
        selection.addRange(range);
    }
};

let units = $('#units')[0]
let docs = $('#docs')[0]
let news = $('#news')[0]

function resetUnitsNav() {
    $('#units-nav').click(async event => {
        event.preventDefault();
        $('#units-nav')[0].classList.add('link-light')
        $('#docs-nav')[0].classList.remove('link-light')
        $('#news-nav')[0].classList.remove('link-light')
        units.className = 'visible'
        docs.className = 'hidden'
        news.className = 'hidden'
    })
}
resetUnitsNav()
$('#docs-nav').click(async event => {
    event.preventDefault();
    $('#docs-nav')[0].classList.add('link-light')
    $('#units-nav')[0].classList.remove('link-light')
    $('#news-nav')[0].classList.remove('link-light')
    units.className = 'hidden'
    docs.className = 'visible'
    news.className = 'hidden'
})
$('#news-nav').click(async event => {
    event.preventDefault();
    $('#units-nav')[0].classList.remove('link-light')
    $('#docs-nav')[0].classList.remove('link-light')
    $('#news-nav')[0].classList.add('link-light')
    units.className = 'hidden'
    docs.className = 'hidden'
    news.className = 'visible'
})
$('.toggle').click(event => {
    document.body.classList.toggle('dark');
    document.body.classList.toggle('light');
});

function toggleSidebar() {
    let headerOffset = ($('header')[0].offsetHeight / 2) - 12
    let sidebarOffset = $('#docs-sidebar')[0].offsetWidth

    switch (headerOffset) {
        case 36:
            $('#docs-sidebar')[0].classList.toggle('hide')

            if ($('#docs-sidebar')[0].classList.contains('hide')) {
                $('#docs-sidebar')[0].style.left = `-${sidebarOffset}px`
                $('#docs-content')[0].style.left = `0px`

                $('#units-sidebar')[0].style.left = `-${sidebarOffset}px`
                $('#units-content')[0].style.left = `0px`
            } else {
                $('#docs-sidebar')[0].style.left = `0px`
                $('#docs-content')[0].style.left = `${sidebarOffset}px`

                $('#units-sidebar')[0].style.left = `0px`
                $('#units-content')[0].style.left = `${sidebarOffset}px`
            }
        break;
    }
}
function hideSidebar() {
    if (!$('#docs-sidebar')[0].classList.contains('hide'))
        toggleSidebar()
}
$('.left').click(function() {
    toggleSidebar()
});