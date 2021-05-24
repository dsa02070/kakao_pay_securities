$(function () {
    // 탭버튼 색 변화
    $('.tab_btn ul').on('click', 'li', function () {
        $('.tab_btn ul li').removeClass('tab_on');
        $(this).addClass('tab_on');
    })

    // 버튼 클릭 시 컨텐츠 변화
    $('.list_wrap > div').css('display', 'none'); // 초기 상태
    $('.first_list').css('display', 'block');
    $('.r_list').click(function () {
        $('.list_wrap > div').css('display', 'none');
        $('.first_list').css('display', 'block');
    })
    $('.s_list').click(function () {
        $('.list_wrap > div').css('display', 'none');
        $('.second_list').css('display', 'block');
    })
    $('.t_list').click(function () {
        $('.list_wrap > div').css('display', 'none');
        $('.third_list').css('display', 'block');
    })
    $('.f_list').click(function () {
        $('.list_wrap > div').css('display', 'none');
        $('.fourth_list').css('display', 'block');
    })
    $('.i_list').click(function () {
        $('.list_wrap > div').css('display', 'none');
        $('.fifth_list').css('display', 'block');
    })

    // 소비자보호프로세스 조직도 이미지 속성 변경
    $(window).resize(function () {
        let wWidth = $(window).width()
        if (wWidth <= 882) {
            $('.customer img').attr('src', '../img/service/customer_mobile.jpg')
        } else {
            $('.customer img').attr('src', '../img/service/customer.jpg')
        }
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