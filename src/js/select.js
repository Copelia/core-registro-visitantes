// //let sweetAlert = document.getElementById('trigger-alert');

// $(document).ready(function(){
//     $('select').formSelect();
//   });
// var instance = M.FormSelect.getInstance(elem);

document.addEventListener('DOMContentLoaded',function() {
    document.querySelector('select[name="hosts-list"]').onchange=changeEventHandler;
},false);

function changeEventHandler(event) {
    if(event.target.value) {
        
        swal({title:"Bienvenido/a!", text:"Se ha notificado al anfitrión/a. Por favor, espera en la sala.", showLoaderOnConfirm: true, reConfirm: function() {
            return new Promise(function(resolve) {
              setTimeout(function() {
                resolve()
              }, 2000)
            })
        }
    }).then(function (isConfirm) {location.href = '../../index.html'
        }); 
    
}    else  {
    alert('Por favor, selecciona a un anfitrión')  
}

}




// document.addEventListener('DOMContentLoaded', function() {
//     var elems = document.querySelectorAll('select');
//     var instances = M.FormSelect.init(elems, options);
//   });


    // $('select').formSelect('methodName');
    // $('select').formSelect('methodName', paramName);