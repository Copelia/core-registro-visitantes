
window.initFirebase();

let db = firebase.firestore();
//let dataURL;

//Registrando al visitante en la base de datos
// const registration = () => {
document.getElementById('register-visitor').addEventListener('click', (event) => {
  let visitorName = document.getElementById("name").value;
  let issueVisitor = document.getElementById("issue").value;
  let yearDateTime = firebase.firestore.FieldValue.serverTimestamp();
 

  //Condicionando registro con campos vacíos
  if (visitorName === "" || issueVisitor === "") {
    swal('Para continuar, por favor ingresa los datos solicitados');
  } else {
    db.collection('visitors').add({
      Visitante: visitorName,
      Asunto: issueVisitor,
      fechaYhora: yearDateTime,
      //Foto: dataURL 
    }).then((docRef) => {
      console.log('Document written with ID: ', docRef.id);
      location.href = 'select.html';
    })
      .catch((error) => {
        console.error('Error adding document: ', error);
      });

  }

});


//Taking picture  
let player = document.getElementById('player');
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
  let date = new Date();
  let timeStamp = Date.parse(date);
  //console.log(timeStamp);
  let dataURL = (snapshot.toDataURL());
  //console.log(dataURL);

  //Option 1: Saving snapshot on database
  db.collection('visitors').add({
    Foto: dataURL
  }).then((docRef) => {
    console.log('Document written with ID: ', docRef.id);
  })
    .catch((error) => {
      console.error('Error adding document: ', error);
    });


  //Option 2: Saving on firestore storage, this function overwrites last taken picture
  // Create a root reference
  // let storageRef = firebase.storage().ref();
  //Create a reference to 'images/name.jpg'
  // let storeImage = storageRef.child(`'images/${timeStamp}'`) ;
   //let storeImage = storageRef.child('images') ;
  //  let uploading = storeImage.putString(dataURL, 'data_url').then(function(snapshot) {
  //   console.log('Uploaded a data_url string!');
  //  }, function () {
  //     uploading.snapshot.ref.getDownloadURL().then(downloadURL => {
  //       console.log('File available at', downloadURL);
  //     })
    
   });

// });

navigator.mediaDevices.getUserMedia({ video: true })
  .then(handleSuccess);



