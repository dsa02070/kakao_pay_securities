$(function () {
    // mobile, tablet gnb click event
    $('.mgnb_btn').click(function () {
        $('.mgnb').slideToggle(300, 'linear');
        $('.mgnb_btn span:nth-child(1)').toggleClass('mgnb_on1');
        $('.mgnb_btn span:nth-child(2)').toggleClass('mgnb_on2');
    })

    //gnb 영역 mouseenter 시 부드럽게 등장하고 없어지는 코드
    $('#gnb>ul>li').mouseenter(function () {
        $(this).find('.submenu').css({ display: 'block' })
        $(this).find('.submenu').css('opacity', '1')
    }).mouseleave(function () {
        $(this).find('.submenu').css({ display: 'none' })
        $(this).find('.submenu').css('opacity', '0')
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