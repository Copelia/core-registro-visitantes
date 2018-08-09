
  // Initialize Firebase
 const config = {
    apiKey: "AIzaSyBcF7TEYv7lKctHHG6gyP6Abg_npVzMBNc",
    authDomain: "visitor-register-f8275.firebaseapp.com",
    databaseURL: "https://visitor-register-f8275.firebaseio.com",
    projectId: "visitor-register-f8275",
    storageBucket: "visitor-register-f8275.appspot.com",
    messagingSenderId: "968340223875"
  };
  firebase.initializeApp(config);


window.registerVisitor = () => { // Obteniendo datos del usuario
    let email = document.getElementById("email").value;
    let pass = document.getElementById("contraseña").value;
   
    firebase.auth().createUserWithEmailAndPassword(email, pass).catch(function(error) {
     // Handle Errors here.
     var errorCode = error.code;
     var errorMessage = error.message;
     // ...
     console.log(errorCode, errorMessage);
     
   });
   
    
   }

   window.observer = () => {
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        let usuario = user;
       // console.log(user);
       let contenido = document.getElementById("contenido");
    //if (user.emailVerified){}
      contenido.innerHTML = `
        <p>Bienvenidx</p>
        <button onclick="logOut()">Log Out</button>
    `;
        // User is signed in.
        var displayName = user.displayName;
        var email = user.email;
        var emailVerified = user.emailVerified;
        var photoURL = user.photoURL;
        var isAnonymous = user.isAnonymous;
        var uid = user.uid;
        var providerData = user.providerData;
        // ...
        console.log("Usuario activo");
      } else {
        // User is signed out.
        // ...
        console.log("No existe usuario activo");
      }
    });
  }
  observer();

  window.logOut = () => { //Salir de la app
    firebase.auth().signOut()
    .then(function(){
       console.log("Saliendo...");
    })
    .catch(function (error){
      console.log(error);
    })
  
    };


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

// const debugBase64 = (dataURL) => {
//   let win = window.open();
//   win.document.write('<iframe src="' + dataURL  + '" frameborder="0" style="border:0; top:0px; left:0px; bottom:0px; right:0px; width:100%; height:100%;" allowfullscreen></iframe>');
// };






        // let picture = document.getElementById('snapshot');

        // window.getPicture = () => {
        //   let photoUser = picture.value;
        //   console.log(photoUser);
        // }


// Initialize Cloud Firestore through Firebase
// var db = firebase.firestore();

// db.collection("users").add({
//     first: "Ada",
//     last: "Lovelace",
//     born: 1815
// })
// .then(function(docRef) {
//     console.log("Document written with ID: ", docRef.id);
// })
// .catch(function(error) {
//     console.error("Error adding document: ", error);
//});