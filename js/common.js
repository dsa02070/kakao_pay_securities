$(function () {
    // mobile, tablet gnb click event
    $('.mgnb_btn').click(function () {
        $('.mgnb').slideToggle(300, 'linear');
        $('.mgnb_btn span:nth-child(1)').toggleClass('mgnb_on1');
        $('.mgnb_btn span:nth-child(2)').toggleClass('mgnb_on2');
    })

    // section scroll event
    $(window).scroll(function () {
        let scTop = $(this).scrollTop();
        let firstOffset = $('#first').offset();
        let secondOffset = $('#second').offset();
        if (firstOffset.top - 500 <= scTop) {
            $('#first').addClass('first_on')
        }
        if (secondOffset.top - 500 <= scTop) {
            $('#second .inner').addClass('second_on');
            $('#second').addClass('second_bg_on');
        }

    })

    // sub.html tab_btn
    $('.tab_first').click(function () {
        $(this).addClass('tab_on')
        $('.tab_second').removeClass('tab_on')
    })
    $('.tab_second').click(function () {
        $(this).addClass('tab_on')
        $('.tab_first').removeClass('tab_on')
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

// gnb의 전체 영역 배경
function scrollMenu() {
    let hWrap = document.querySelector('.header_wrap');
    let gnb = document.querySelector('#gnb');
    let wWidth = window.innerWidth;
    gnb.addEventListener('mouseover', function () {
        hWrap.style.height = '500px';
    })
    console.log(wWidth)
    if (wWidth <= 768) {
        gnb.addEventListener('mouseout', function () {
            hWrap.style.height = '50px';
        })
    } else {
        gnb.addEventListener('mouseout', function () {
            hWrap.style.height = '73px';
        })
    }
}
scrollMenu();

