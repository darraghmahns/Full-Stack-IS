

const socket = document.getElementById('socket');
const painter = document.getElementById('painter');
const fomatic = document.getElementById('fomatic');
const camera = document.getElementById('camera');



socket.onclick = function(event) {
    
    if(painter.style.display = 'block') {
        painter.style.display = 'none';
    } else {
        painter.style.display = 'block';
    }
}

fomatic.onclick = function(event) {
    if(camera.style.display = 'block') {
        camera.style.display = 'none';
    } else {
        camera.style.display = 'block';
    }
}


