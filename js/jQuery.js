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

let home = $('#home')[0]
let docs = $('#docs')[0]
let news = $('#news')[0]
$('#home-nav').click(async event => {
    event.preventDefault();
    $('#home-nav')[0].classList.add('link-light')
    $('#docs-nav')[0].classList.remove('link-light')
    $('#news-nav')[0].classList.remove('link-light')
    home.className = 'visible'
    docs.className = 'hidden'
    news.className = 'hidden'
})
$('#docs-nav').click(async event => {
    event.preventDefault();
    $('#docs-nav')[0].classList.add('link-light')
    $('#home-nav')[0].classList.remove('link-light')
    $('#news-nav')[0].classList.remove('link-light')
    home.className = 'hidden'
    docs.className = 'visible'
    news.className = 'hidden'
})
$('#news-nav').click(async event => {
    event.preventDefault();
    $('#home-nav')[0].classList.remove('link-light')
    $('#docs-nav')[0].classList.remove('link-light')
    $('#news-nav')[0].classList.add('link-light')
    home.className = 'hidden'
    docs.className = 'hidden'
    news.className = 'visible'
})
$('.toggle').click(event => {
    document.body.classList.toggle('dark');
    document.body.classList.toggle('light');
});
$('.left').click(event => {
    let offset = $('#sidebar')[0].offsetWidth
    $('#sidebar')[0].classList.toggle('hide')

    if ($('#sidebar')[0].classList.contains('hide')) {
        $('#sidebar')[0].style.left = `-${offset}px`
        $('#docs-content')[0].style.left = `0px`
    }
    else {
        $('#sidebar')[0].style.left = `0px`
        $('#docs-content')[0].style.left = `${offset}px`
    }

});