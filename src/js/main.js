
window.initFirebase();

let db = firebase.firestore();

//Registrando al visitante en la base de datos

  document.getElementById('register-visitor').addEventListener('click', (event) => {
    let visitorName = document.getElementById("name").value;
    let issueVisitor = document.getElementById("issue").value;

    db.collection('visitors').add({
      Visitante : visitorName,
      Asunto : issueVisitor
    }).then((docRef) => {
      console.log('Document written with ID: ', docRef.id);
    })
    .catch((error) => {
      console.error('Error adding document: ', error);
    });
  });


//Tomando foto. Refactorizar este código 

//   var streaming = 
//       video        = document.querySelector('#video'),
//       canvas       = document.querySelector('#canvas'),
//       photo        = document.querySelector('#photo'),
//       startbutton  = document.querySelector('#startbutton'),
//       width = 320,
//       height = 0;

//   navigator.getMedia = ( navigator.getUserMedia ||
//                          navigator.webkitGetUserMedia ||
//                          navigator.mozGetUserMedia ||
//                          navigator.msGetUserMedia);

//   navigator.getMedia(
//     {
//       video: true,
//       audio: false
//     },
//     function(stream) {
//       if (navigator.mozGetUserMedia) {
//         video.mozSrcObject = stream;
//       } else {
//         var vendorURL = window.URL || window.webkitURL;
//         video.srcObject = stream;
//       }
//       video.play();
//     }
//   );

//   video.addEventListener('canplay', event => {
//     if (!streaming) {
//       height = video.videoHeight / (video.videoWidth/width);
//       video.setAttribute('width', width);
//       video.setAttribute('height', height);
//       canvas.setAttribute('width', width);
//       canvas.setAttribute('height', height);
//       streaming = true;
//     }
//   });

//   const takepicture = () => {
//     canvas.width = width;
//     canvas.height = height;
//     canvas.getContext('2d').drawImage(video, 0, 0, width, height);
//     var data = canvas.toDataURL('image/png');
  

//   startbutton.addEventListener('click', event => {
//       takepicture();
//     event.preventDefault();
//   });

// };

//let img = document.getElementById("laimagen");
//let canvas = document.getElementById('canvas');
//let dataURL = canvas.toDataURL();

//     // Create a root reference
//     let storageRef = firebase.storage().ref();
//     // Create a reference to 'images/mountains.jpg'
//     var storeImage = storageRef.child('images/foto.jpg');
//     storeImage.putString(dataURL, 'data_url').then(function (snapshot) {
//       console.log('Uploaded a data_url string!');
//     });
//     event.preventDefault();
//   }, false);

// })
// };

