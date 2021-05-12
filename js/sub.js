$(function () {
    // mobile, tablet gnb click event
    $('.mgnb_btn').click(function () {
        $('.mgnb').slideToggle(300, 'linear');
        $('.mgnb_btn span:nth-child(1)').toggleClass('mgnb_on1');
        $('.mgnb_btn span:nth-child(2)').toggleClass('mgnb_on2');
    })
    //gnb 영역 mouseenter 시 부드럽게 등장하고 없어지는 코드
    $('#gnb>ul>li').mouseenter(function () {
        let subDisplay = $(this).find('.submenu');
        subDisplay.css({ display: 'block' })
        $(this).find('.submenu').css('opacity', '1')
    }).mouseleave(function () {
        setTimeout(function () {
            $(this).find('.submenu').css({ display: 'none' })
        }, 200)
        $(this).find('.submenu').css('opacity', '0')
    })

    // gnb 영역 mouseenter 시 뒷 배경 코드
    $('#gnb>ul>li:nth-of-type(1)').mouseenter(function () {
        $('.header_gnb_bg').css({ height: '133px' })
    })
    $('#gnb>ul>li:nth-of-type(2)').mouseenter(function () {
        $('.header_gnb_bg').css({ height: '173px' })
    })
    $('#gnb>ul>li:nth-of-type(3)').mouseenter(function () {
        $('.header_gnb_bg').css({ height: '173px' })
    })
    $('#gnb>ul>li:nth-of-type(4)').mouseenter(function () {
        $('.header_gnb_bg').css({ height: '493px' })
    })
    $('#gnb>ul>li').mouseleave(function () {
        $('.header_gnb_bg').css({ height: '73px' })
    })

    // sub.html area
    // sub.html tab_btn
    $('table:nth-of-type(2)').css('display', 'none')
    $('.tab_first').click(function () {
        $(this).addClass('tab_on');
        $('.tab_second').removeClass('tab_on')
        $('table:nth-of-type(1)').css('display', 'block')
        $('table:nth-of-type(2)').css('display', 'none')
    })
    $('.tab_second').click(function () {
        $(this).addClass('tab_on');
        $('.tab_first').removeClass('tab_on');
        $('table:nth-of-type(2)').css('display', 'block')
        $('table:nth-of-type(1)').css('display', 'none')
    })

    // input placeholder 대체 코드
    $('.input_search').val('검색어를 입력하세요').css('color', '#ccc').one('focus', function () {
        $(this).val('').css('color', '#222')
    }).blur(function () {
        if ($(this).val() == '') {
            $(this).val('검색어를 입력해주세요').css('color', '#ccc').one('focus', function () {
                $(this).val('').css('color', '#222')
            })
        }
    })
})