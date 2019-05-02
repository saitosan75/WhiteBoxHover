$('.gallery').magnificPopup({
    delegate: '.popimg',
    type: 'image',
    gallery:{
        enabled:true
    }
});

var $gallery = $('.gallery').isotope({

});

$('.filtering').on('click', 'span', function(){

    var filterValue = $(this).attr('data-filter');

    $gallery.isotope({filter : filterValue});

});

$('filtering').on('click', 'span', function(){
    $(this).addClass('active').siblings().removeClass('active')
});