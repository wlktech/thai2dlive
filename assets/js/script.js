$(window).scroll(function(){
    var getscrolltt = $(this).scrollTop();
    // console.log(getscrolltt);

if(getscrolltt >= 195){
        $('#fixed-header').addClass('fixed-header');
$('#fixed-header').removeClass('d-none');
    }else{
$('#fixed-header').addClass('d-none');
        $('#fixed-header').removeClass('fixed-header');
    }
});

let items = document.querySelectorAll('.multi-img .carousel-item');

items.forEach((el) => {
    const minPerSlide = 3;
    let next = el.nextElementSibling;
    for (var i = 1; i < minPerSlide; i++) {
    if (!next) {
        // wrap carousel by using first child
        next = items[0];
    }
    let cloneChild = next.cloneNode(true);
    el.appendChild(cloneChild.children[0]);
    next = next.nextElementSibling;
    }
});