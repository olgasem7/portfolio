'use strict'

//Menu//
$('.Header__icono').click(function(){
    $('.Header__nav').toggleClass('active')
})

//Gallery//

$('.gallery__span').click(function(){
    $('.gallery__image').addClass('active')
    $('.gallery__text').addClass('active')
    $('.gallery__column.first').addClass('active')
    // $('.gallery__column').addClass('active')
})

$('.grdgallery__img').click(function(){
    $('.grdgallery__lightbox').addClass('active')
})
$('.grdgallery__btn').click(function(){
    $('.grdgallery__lightbox').removeClass('active')
})