var elm = document.getElementById('all'); // all — элемент, в который был обернут весь сайт
var coeff = document.body.clientWidth / elm
    .offsetWidth; // считаем коэффициент масштабирования так, чтобы элемент all занял весь экран
if (coeff > 1) coeff =
    1; // нам нужно только уменьшение сайта, но не его увеличение, поэтому ограничиваем коэффициент сверху единицей
if (coeff < 0.6) coeff =
    0.6; // ограничение снизу добавлено для того, чтобы сайт совсем уж не превращался в нечитаемый
if (coeff != 1.0) {
    if (navigator.userAgent.indexOf('Firefox') != -1) elm.style.boxShadow =
        'none'; // масштабирование в Firefox порождало некорректное отображение boxshadow, и пришлось это свойство отключить
    elm.style.webkitTransform =
        elm.style.msTransform =
        elm.style.mozTransform =
        elm.style.transform = 'scale(' + coeff + ')'; // собственно масштабирование
}

// Втавка даних в Html з svg файла
jQuery('img.svg').each(function () {
    var $img = jQuery(this);
    var imgID = $img.attr('id');
    var imgClass = $img.attr('class');
    var imgURL = $img.attr('src');

    jQuery.get(imgURL, function (data) {
        // Get the SVG tag, ignore the rest
        var $svg = jQuery(data).find('svg');

        // Add replaced image's ID to the new SVG
        if (typeof imgID !== 'undefined') {
            $svg = $svg.attr('id', imgID);
        }
        // Add replaced image's classes to the new SVG
        if (typeof imgClass !== 'undefined') {
            $svg = $svg.attr('class', imgClass + ' replaced-svg');
        }

        // Remove any invalid XML tags as per http://validator.w3.org
        $svg = $svg.removeAttr('xmlns:a');

        // Replace image with new SVG
        $img.replaceWith($svg);
    }, 'xml');
});

$(document).ready(function () {
    $(".talks").hide();
    $(".talks-2").hide();
    $(".talks-3").hide();
    $(".talks-4").hide();
    $(".talks-5").hide();
    $(".raid-2").hide();
    $(".raid-3").hide();
    $(".raid-4").hide();
    $(".raid-5").hide();
    $(".raid").hide();
    $(".btn-reidsa").click(function () {
        $(".action").hide();
        $(".talks").hide();
        $(".talks-2").hide();
        $(".talks-3").hide();
        $(".talks-4").hide();
        $(".talks-5").hide();
        $(".raid-2").hide();
        $(".raid-3").hide();
        $(".raid-4").hide();
        $(".raid-5").hide();
        $(".raid").show();
    });

    $(".btn_orange.btn-small.btn").click(function () {
        $(".action").hide();
        $(".raid").hide();
        $(".talks-2").hide();
        $(".talks-3").hide();
        $(".talks-4").hide();
        $(".talks-5").hide();
        $(".raid-2").hide();
        $(".raid-3").hide();
        $(".raid-4").hide();
        $(".raid-5").hide();
        $(".talks").show();
    });

    $(".btn-raid").click(function () {
        $(".action").hide();
        $(".raid").hide();
        $(".talks-2").hide();
        $(".talks-3").hide();
        $(".talks-4").hide();
        $(".talks-5").hide();
        $(".talks").hide();
        $(".raid-3").hide();
        $(".raid-4").hide();
        $(".raid-5").hide();
        $(".raid-2").show();
    });

    $(".btn-attack").click(function () {
        $(".action").hide();
        $(".raid").hide();
        $(".talks-2").hide();
        $(".talks-3").hide();
        $(".talks-4").hide();
        $(".talks-5").hide();
        $(".talks").hide();
        $(".raid-2").hide();
        $(".raid-4").hide();
        $(".raid-5").hide();
        $(".raid-3").show();
    });
    $(".btn-ok").click(function () {
        $(".raid-3").hide();
        $(".raid").hide();
        $(".talks-2").hide();
        $(".talks-3").hide();
        $(".talks-4").hide();
        $(".talks-5").hide();
        $(".talks").hide();
        $(".raid-2").hide();
        $(".raid-4").hide();
        $(".raid-5").hide();
        $(".action").show();
    });




    $(".btn-talks").click(function () {
        $(".action").hide();
        $(".raids").hide();
        $(".talks-2").hide();
        $(".talks-3").hide();
        $(".talks-4").hide();
        $(".talks-5").hide();
        $(".raid-2").hide();
        $(".raid-3").hide();
        $(".raid-4").hide();
        $(".raid-5").hide();
        $(".talks").show();
    });

    $(".btn-request").click(function () {
        $(".action").hide();
        $(".raids").hide();
        $(".talks-2").hide();
        $(".talks-3").hide();
        $(".talks-4").hide();
        $(".talks-2").hide();
        $(".raid-2").hide();
        $(".raid-3").hide();
        $(".raid-4").hide();
        $(".raid-5").hide();
        $(".talks").hide();
        $(".talks-5").show();
    });
    $(".btn-agree").click(function () {
        $(".action").hide();
        $(".raids").hide();
        $(".talks-2").hide();
        $(".talks-3").hide();
        $(".talks-4").hide();
        $(".talks-5").hide();
        $(".raid-2").hide();
        $(".raid-3").hide();
        $(".raid-4").hide();
        $(".raid-5").hide();
        $(".talks").hide();
        $(".talks-2").hide();
        $(".talks-3").show();
    });
    $(".btn-refuse").click(function () {
        $(".action").hide();
        $(".raid").hide();
        $(".talks-2").hide();
        $(".talks-3").hide();
        $(".talks-5").hide();
        $(".raid-2").hide();
        $(".raid-3").hide();
        $(".raid-4").hide();
        $(".talks").hide();
        $(".talks-2").hide();
        $(".talks-4").show();
    });
});