$(function () {
    $('.mgnb_btn').click(function () {
        $('.mgnb').slideToggle(300, 'linear');
        $('.mgnb_btn span:nth-child(1)').toggleClass('mgnb_on1');
        $('.mgnb_btn span:nth-child(2)').toggleClass('mgnb_on2');
    })
})