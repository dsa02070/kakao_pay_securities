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
})

// gnb의 전체 영역 배경
function scrollMenu() {
    let hw = document.querySelector('.header_wrap');
    let gnb = document.querySelector('#gnb');
    let wWidth = window.innerWidth;
    gnb.addEventListener('mouseover', function () {
        hw.style.height = '500px';
    })
    console.log(wWidth)
    if (wWidth <= 768) {
        gnb.addEventListener('mouseout', function () {
            hw.style.height = '50px';
        })
    } else {
        gnb.addEventListener('mouseout', function () {
            hw.style.height = '73px';
        })
    }
}
scrollMenu();

