//let sweetAlert = document.getElementById('trigger-alert');

document.addEventListener('DOMContentLoaded',function() {
    document.querySelector('select[name="hosts-list"]').onchange=changeEventHandler;
},false);

function changeEventHandler(event) {
    if(!event.target.value) alert('Por favor, selecciona a un anfitrión');
    else alert('Bienvenidx, se ha notificado a ' + event.target.value + ' que estás aquí.'); 
}