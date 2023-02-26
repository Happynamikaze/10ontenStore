$('.autoplay').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    // autoplay: true,
    // autoplaySpeed: 2000,
    prevArrow: false,
    nextArrow: false,
    dots: true,
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 2000,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 2000,
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 2000,
            }
        }
    ]
});
$('.special-prod').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: false,
    nextArrow: false,
    dots: true,
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 2000,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 2000,
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 2000,
            }
        }
    ]
});
$('.company-logo-slider').slick({
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: false,
    nextArrow: false,
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 2000,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 2000,
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 2000,
            }
        }
    ]
});

var desc = document.getElementById('desc');
var revieW = document.getElementById('review');
function description() {
    document.getElementById('descBtn').classList.add('desc-revi-active');
    document.getElementById('reviBtn').classList.remove('desc-revi-active');
}
function review() {
    document.getElementById('reviBtn').classList.add('desc-revi-active');
    document.getElementById('descBtn').classList.remove('desc-revi-active');
}
var data = 1;
var qnty = document.getElementById('qty').value;

var minBtn = document.getElementById('minus-button');
document.getElementById('qty').value = data;
function minus() {
    data = data - 1;
    document.getElementById('qty').value = data;
    if (data <= 1) {
        minBtn.classList.add('disabled');
    }
}
function add() {
    data = data + 1;
    document.getElementById('qty').value = data;

    if (data > 1) {
        minBtn.classList.remove('disabled');
    }
}
function numbersonly(input) {
    var regex = /[^0-9.]/gi;
    input.value = input.value.replace(regex, '');
    input.value = data;
}