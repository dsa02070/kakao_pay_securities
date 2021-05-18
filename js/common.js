$(function () {
    // mobile, tablet gnb click event
    $('.mgnb_btn').click(function () {
        $('.mgnb').slideToggle(300, 'linear');
        $('span:nth-child(1)', this).toggleClass('mgnb_on1');
        $('span:nth-child(2)', this).toggleClass('mgnb_on2');
    })

    //gnb 영역 mouseenter 시 메뉴 등장
    $('#gnb>ul>li').mouseenter(function () {
        $(this).find('.submenu').css({ display: 'block' });
    }).mouseleave(function () {
        $(this).find('.submenu').css({ display: 'none' });
    })

    // gnb 영역 mouseenter 시 뒷 배경 코드
    $('#gnb>ul>li:nth-of-type(1)').mouseenter(function () {
        $('.header_gnb_bg').css({ height: '60px' })
    })
    $('#gnb>ul>li:nth-of-type(2)').mouseenter(function () {
        $('.header_gnb_bg').css({ height: '100px' })
    })
    $('#gnb>ul>li:nth-of-type(3)').mouseenter(function () {
        $('.header_gnb_bg').css({ height: '100px' })
    })
    $('#gnb>ul>li:nth-of-type(4)').mouseenter(function () {
        $('.header_gnb_bg').css({ height: '420px' })
    })
    $('#gnb>ul>li').mouseleave(function () {
        $('.header_gnb_bg').css({ height: '0px' })
    })
})