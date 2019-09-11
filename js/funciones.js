var slider_content = document.getElementById('banners');

var image = ["angrybirds", "comosifueralaprimeravez", "habiaunavezenhollywood", "historiasmiedo", "it"];

var i = image.length;

function nextImage() {
    if (i < image.length) {
        i = i + 1;
        if (i == image.length) {
            i = 0;
        }
    } else {
        i = 0;
    }
    slider_content.innerHTML = "<img src=img/banners/" + image[i] + ".png>";
}

function beforeImage() {
    if (i < image.length + 1 && i > 1) {
        i = i - 1;
    } else {
        i = image.length;
    }
    slider_content.innerHTML = "<img src=img/banners/" + image[i - 1] + ".png>";
}