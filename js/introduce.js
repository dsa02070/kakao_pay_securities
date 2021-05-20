$(function () {
    // 초기 애니메이션 실행
    $('#main_banner .m_bg').addClass('bannerAni');
    $('#main_banner h2').addClass('tMove');

    // scroll event
    $(window).scroll(function () {
        let scTop = $(this).scrollTop();
        let firstOffset = $('.first').offset().top;
        let secondOffset = $('.second').offset().top;
        let thirdOffset = $('.third').offset().top;
        let fourthOffset = $('.fourth').offset().top;
        let infoOffset = $('.info').offset().top;

        if (firstOffset - 374 <= scTop) {
            $('.first span, .first h3, .first img').addClass('upMove');
        }
        if (secondOffset - 600 <= scTop) {
            $('.second h3, .second p').addClass('upMove')
        }
        if (thirdOffset - 525 <= scTop) {
            $('.third h3, .box').addClass('upMove');
        }
        if (fourthOffset - 500 <= scTop) {
            $('.fourth h3, .map_api').addClass('upMove');
        }
        if (infoOffset - 600 <= scTop) {
            $('.info h4, .info p').addClass('upMove');
        }
    })
})