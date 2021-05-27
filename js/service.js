$(function () {
    // 탭버튼 색 변화
    $('.tab_btn ul').on('click', 'li', function () {
        $('.tab_btn ul li').removeClass('tab_on');
        $(this).addClass('tab_on');
    });

    // tab_btn, list_wrap event
    // 초기 : 첫번 째를 제외하고 제거.
    $('.list_wrap > div:gt(0)').css('display', 'none')
    // 버튼 클릭 시 해당 인덱스 번호에 맞는 컨텐츠 보여주기
    $('.tab_btn ul li').each(function () {
        let indexNum = $(this).index()
        console.log(indexNum)
        $('.tab_btn ul li:eq("' + indexNum + '")').click(function () {
            $('.list_wrap > div').css('display', 'none');
            $('.list_wrap > div:eq("' + indexNum + '")').css('display', 'block');
        });
    });

    // 소비자보호프로세스 조직도 이미지 속성 변경
    $(window).resize(function () {
        let wWidth = $(window).width()
        if (wWidth <= 882) {
            $('.customer img').attr('src', '../img/service/customer_mobile.jpg')
        } else {
            $('.customer img').attr('src', '../img/service/customer.jpg')
        };
    }).resize()

    // input placeholder 대체 코드
    $('.input_search').val('검색어를 입력하세요').css('color', '#ccc').one('focus', function () {
        $(this).val('').css('color', '#222')
    }).blur(function () {
        if ($(this).val() == '') {
            $(this).val('검색어를 입력해주세요').css('color', '#ccc').one('focus', function () {
                $(this).val('').css('color', '#222')
            });
        };
    });
});