function init() {
    window.addEventListener('scroll', function(e){
        var distanceY = window.pageYOffset || document.documentElement.scrollTop,
            shrinkOn = 100,
            header = document.querySelector("header");
        if (distanceY > shrinkOn) {
            classie.add(header,"smaller");
        } else {
            if (classie.has(header,"smaller")) {
                classie.remove(header,"smaller");
            }
        }
    });
}
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(loadmap);
    }
}
function loadmap(position){
    var currposition = position.coords.latitude - 0.001;
    var src = "https://www.google.com/maps/embed/v1/view?key=AIzaSyCJSZ4mboQy9jxlEfM3ucqlAtgqkdMHZgs&center="+currposition+","+position.coords.longitude+"&zoom=16&maptype=roadmap"
    document.getElementById("map").src = src; 
}
window.onload = init();