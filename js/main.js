$(function () {
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