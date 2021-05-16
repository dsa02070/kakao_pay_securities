$(function () {
    // 탭버튼 색 변화
    $('.tab_btn ul').on('click', 'li', function () {
        $('.tab_btn ul li').removeClass('tab_on');
        $(this).addClass('tab_on');
    })

})