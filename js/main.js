function setTheme(themeName) {
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;
}

function toggleTheme() {
    if (localStorage.getItem('theme') === 'dark-theme') {
        setTheme('light-theme');
    } else {
        setTheme('dark-theme');
    }
}

setTheme('light-theme');

document.querySelector('.switch').addEventListener('click', (e) => {
    toggleTheme();
});

if ($(window).width() <= 768) {
    $('.box-header').click(function () {
        var current_li = $(this).parent();
        $('.box-content').each(function (i, el) {
            if ($(el).parent().is(current_li)) {
                $(el).prev().toggleClass('is-open');
                $(el).next().toggleClass('is-open');
                $(el).slideToggle();
            } else {
                $(el).prev().removeClass('is-open');
                $(el).next().removeClass('is-open');
                $(el).slideUp();
            }
        });
    });
}

$('#card-dropdown').click(function () {
    $(this).toggleClass('is-open');
});

$(document).on('mouseup', function (e) {
    let s = $('.card.is-open');
    if (!s.is(e.target) && s.has(e.target).length === 0) {
        s.removeClass('is-open');
    }
});