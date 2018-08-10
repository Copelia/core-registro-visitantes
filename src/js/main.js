
window.initFirebase();

let db = firebase.firestore();

//Registrando al visitante en la base de datos

let visitorName = document.getElementById("icon_prefix").value;
let issueVisitor = document.getElementById("icon_telephone").value;
let yearDateTime = firebase.firestore.FieldValue.serverTimestamp();

  document.getElementById('register-visitor').addEventListener('click', (event) => {
    //Hacer que este if funcione
    if (visitorName.value === ""  || issueVisitor.value === "") {
      alert('No puedes continuar sin haber ingresado tus datos')
    } else {

    db.collection('visitors').add({
      Visitante : visitorName,
      Asunto : issueVisitor,
      fechaYhora : yearDateTime
    }).then((docRef) => {
      console.log('Document written with ID: ', docRef.id);
    })
    .catch((error) => {
      console.error('Error adding document: ', error);
    });
  }
   
    location.href = 'src/select.html';
  });

//Tomando foto    

(function() {

  var streaming = false,
      video        = document.querySelector('#video'),
      canvas       = document.querySelector('#canvas'),
      photo        = document.querySelector('#photo'),
      startbutton  = document.querySelector('#startbutton'),
      width = 320,
      height = 0;
 
  navigator.getMedia = ( navigator.getUserMedia ||
                         navigator.webkitGetUserMedia ||
                         navigator.mozGetUserMedia ||
                         navigator.msGetUserMedia);
 
  navigator.getMedia(
    {
      video: true,
      audio: false
    },
    function(stream) {
      if (navigator.mozGetUserMedia) {
        video.mozSrcObject = stream;
      } else {
        var vendorURL = window.URL || window.webkitURL;
        video.srcObject = stream;
      }
      video.play();
    },
    function(err) {
      console.log("An error occured! " + err);
    }
  );
 
  video.addEventListener('canplay', function(ev){
    if (!streaming) {
      height = video.videoHeight / (video.videoWidth/width);
      video.setAttribute('width', width);
      video.setAttribute('height', height);
      canvas.setAttribute('width', width);
      canvas.setAttribute('height', height);
      streaming = true;
    }
  }, false);
 
  const takepicture = () => {
    canvas.width = width;
    canvas.height = height;
    canvas.getContext('2d').drawImage(video, 0, 0, width, height);
    var data = canvas.toDataURL('image/png');
    //photo.setAttribute('src', data);
    //console.log(data);
  }
 
  startbutton.addEventListener('click', function(event){
      takepicture();
      getBase64();
    event.preventDefault();
  }, false);
 
 })();
    
 
 //let img = document.getElementById("laimagen");
 let canvas = document.getElementById('canvas');
 let dataURL = canvas.toDataURL();
 let png = document.getElementById("png");
 
 const getBase64 = () => {
  //img.src = canvas.toDataURL("image/png");    
  console.log(dataURL);
  //debugBase64();
 };
