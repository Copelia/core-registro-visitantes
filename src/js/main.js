
window.initFirebase();

let db = firebase.firestore();



//Registrando al visitante en la base de datos

  document.getElementById('register-visitor').addEventListener('click', (event) => {
    let visitorName = document.getElementById("icon_prefix").value;
    let issueVisitor = document.getElementById("icon_telephone").value;
    let yearDateTime = firebase.firestore.FieldValue.serverTimestamp();

    //Hacer que este if funcione
    if (visitorName === ""  || issueVisitor === "") {
      alert('Para continuar, por favor ingresa los datos solicitados');
    } else {
    db.collection('visitors').add({
      Visitante : visitorName,
      Asunto : issueVisitor,
      fechaYhora : yearDateTime
    }).then((docRef) => {
      console.log('Document written with ID: ', docRef.id);
        location.href = 'select.html';
    })
    .catch((error) => {
      console.error('Error adding document: ', error);
    });
  
  }
  
  });


//Tomando foto    

let player= document.getElementById('player'); 
let snapshotCanvas = document.getElementById('snapshot');
let captureButton = document.getElementById('capture');

  let handleSuccess = (stream) => {
    //Adjunta stream al elemento video
    player.srcObject = stream;
  };

  captureButton.addEventListener('click', () => {
    let context = snapshot.getContext('2d');
    // Tomando frame del video a canvas
    context.drawImage(player, 0, 0, snapshotCanvas.width, 
        snapshotCanvas.height);
    let dataURL = snapshotCanvas.toDataURL();
    console.log(dataURL);
//Guardando en base de datos 
          // Create a root reference
  let storageRef = firebase.storage().ref();
  //     // Create a reference to 'images/mountains.jpg'
   var storeImage = storageRef.child('images');
      console.log(storeImage);
   storeImage.putString(dataURL, 'data_url').then(function(snapshot) {
    console.log('Uploaded a data_url string!');
   });

  });

  navigator.mediaDevices.getUserMedia({video: true})
      .then(handleSuccess);


