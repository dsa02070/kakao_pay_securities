$(function () {
    // mobile, tablet gnb click event
    $('.mgnb_btn').click(function () {
        $('.mgnb').slideToggle(300, 'linear');
        $('span:nth-child(1)', this).toggleClass('mgnb_on1');
        $('span:nth-child(2)', this).toggleClass('mgnb_on2');
    })

    let gnbElem = $('#gnb > ul > li')
    // submenu hover event
    gnbElem.mouseenter(function () {
        $(this).find('.submenu').css({ display: 'block' });
        $(this).find('.submenu').stop().animate({ opacity: '1' }, 200)
    }).mouseleave(function () {
        $(this).find('.submenu').css({ display: 'none', opacity: '0' });
    })

    // submenu area background
    let header_bg = $('.header_gnb_bg')
    gnbElem.mouseenter(function () {
        let subHeight = $(this).find('.submenu').outerHeight()
        header_bg.css('height', subHeight + 10);
    }).mouseleave(function () {
        header_bg.css('height', '0')
    })
})