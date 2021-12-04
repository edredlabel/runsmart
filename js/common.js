'use strict';

$('[data-modal=consultation]').on('click', function() {
    $('.modal, #consult').fadeIn('slow');
});
$('.modal-close').on('click', function() {
    $('.modal, #consult, #order, #thanks').fadeOut('slow');
});
// $('.catalog__btn-buy').on('click', function() {
//     $('.modal, #order').fadeIn('slow');
// });
$('.catalog__btn-buy').each(function(i){
    $(this).on('click', function(){
        $('#order .catalog__block-title').text($('.catalog__block-text').eq(i).text());
        $('.modal, #order').fadeIn('slow');
    })
})