var keyframesTem = function(x) {
    var style = document.querySelector('style')
    var t = `
        @keyframes scroll {
            0% {
              transform: translateZ(-388px)  rotateY(${x}deg);
            }
            100% {
              transform: translateZ(-388px) rotateY(${x - 360}deg);
            }
        }
    `
    style.innerHTML = t
}


document.addEventListener('DOMContentLoaded',function() {
    var saveStyle = 0
    var carousel = document.querySelector('#carousel');
    document.onmousedown = function(ev) {
        var oEvent = ev || event;
        var disX = oEvent.clientX;
        carousel.classList.remove('scrollAnimation')
        document.onmousemove = function(ev) {
            var oEvent = ev || event;
            x = oEvent.clientX - disX + saveStyle;
            console.log(x + '=' + oEvent.clientX + '-' + disX + '-' + saveStyle)
            // y = oEvent.clientY - disY;
            console.log('onmousemove', x)
            carousel.style.WebkitTransform = `translateZ(-388px) rotateY(${x}deg)`
        };
        document.onmouseup = function() {
            document.onmousemove = null;
            document.onmouseup = null;
            saveStyle = x
            keyframesTem(saveStyle)
            carousel.classList.add('scrollAnimation')
            console.log(saveStyle)
        };
        return false;
    };
},false);

setTimeout(function(){
    var carousel =  selector('#carousel')
    carousel.classList.remove('startAnimation')
    carousel.classList.add('scrollAnimation')
}, 2000)
