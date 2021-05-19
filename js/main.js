$(function () {
    // section scroll event
    $(window).scroll(function () {
        const addTop = 500;
        let scTop = $(this).scrollTop();
        let firstOffset = $('#first').offset();
        let secondOffset = $('#second').offset();

        if (firstOffset.top <= scTop + addTop) {
            $('#first h3, #first p, #first a').addClass('first_on');
            $('#first').addClass('firstAni_on')
        }
        if (secondOffset.top <= scTop + addTop) {
            $('#second').addClass('second_bg_on');
            $('#second h3, #second a').addClass('second_on');
        }
    })
})