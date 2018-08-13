
window.initFirebase();

let db = firebase.firestore();



//Registrando al visitante en la base de datos
// const registration = () => {
  document.getElementById('register-visitor').addEventListener('click', (event) => {
    let visitorName = document.getElementById("icon_prefix").value;
    let issueVisitor = document.getElementById("icon_telephone").value;
    let yearDateTime = firebase.firestore.FieldValue.serverTimestamp();

    //Condicionando registro con campos vacíos
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

// };

//Taking picture  

let player= document.getElementById('player'); 
let snapshotCanvas = document.getElementById('snapshot');
let captureButton = document.getElementById('capture');

  let handleSuccess = (stream) => {
    //Fix stream to video element
    player.srcObject = stream;
  };

  captureButton.addEventListener('click', () => {
    let context = snapshot.getContext('2d');
    // Saving a frame from video stream
    context.drawImage(player, 0, 0, snapshotCanvas.width, 
        snapshotCanvas.height);
    let snapshotDate = (snapshotCanvas + '-' + new Date())    
    console.log(snapshotDate);
    let dataURL = (snapshot.toDataURL());
    console.log(dataURL);
//Saving snapshot on database
db.collection('visitors').add({
  Foto : dataURL
}).then((docRef) => {
  console.log('Document written with ID: ', docRef.id);
    location.href = 'select.html';
})
.catch((error) => {
  console.error('Error adding document: ', error);
});




//Saving on firestore storage
  // Create a root reference
  // let storageRef = firebase.storage().ref();
  //Create a reference to 'images/mountains.jpg'
  //  let storeImage = storageRef.child('images') ;
  //  storeImage.putString(dataURL, 'data_url').then(function(snapshot) {
  //   console.log('Uploaded a data_url string!');
  //  });

  });

  navigator.mediaDevices.getUserMedia({video: true})
      .then(handleSuccess);





   //let imgId = firebase.firestore.FieldValue.serverTimestamp();
   //console.log(imgId);