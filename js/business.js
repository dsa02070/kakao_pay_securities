$(function () {
    // 초기 애니메이션 실행
    $('#main_banner .m_bg').addClass('bannerAni');
    $('#main_banner h2').addClass('tMove');

    // scroll event
    $(window).scroll(function () {
        let scTop = $(this).scrollTop();
        let fisrtOffset = $('.first').offset().top;
        let secondOffset = $('.second').offset().top;
        let thirdOffset = $('.third').offset().top;

        if (fisrtOffset - 374 <= scTop) {
            $('.first h3, .first span, .first img').addClass('upMove');
        }
        if (secondOffset - 500 <= scTop) {
            $('.second h4, .second p').addClass('upMove');
            $('.second img').animate({ opacity: '1' }, 1200, 'swing')
        }

        if (thirdOffset - 500 <= scTop) {
            $('.third h4, .third p, .third img').addClass('upMove');
        }
    })
})