$(function () {
    // 초기 애니메이션 실행
    $('#main_banner .m_bg').addClass('bannerAni');
    setTimeout(function () {
        $('#main_banner h2').addClass('tMove');
    }, 500)
    $('.first h3, .first .f_text span, .first img').addClass('upMove');

    // scroll event
    const addTop = 450;
    $(window).scroll(function () {
        let thisScrollTop = $(this).scrollTop();
        $('.second, .third').each(function () {
            let thisOffset = $(this).offset();
            if (thisOffset.top < thisScrollTop + addTop) {
                $('div>*', this).addClass('upMove');
                $('.second img').animate({ opacity: '1' }, 1200, 'swing');
            }
        })
        let thirdHeight = $('.third').offset().top;
        if (thirdHeight < thisScrollTop + addTop) {
            $('img[alt="third img"]').addClass('upMove');
        }
    })
})