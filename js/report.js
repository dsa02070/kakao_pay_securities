$(function () {
    // 영업보고서, 감사보고서 tab_btn
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