window.initFirebase();
let db = firebase.firestore();
let dbSettings = { timestampsInSnapshots: true };
db.settings(dbSettings);

const register = () => {
  let email = document.getElementById("email").value;
  let pass = document.getElementById("contraseña").value;

  firebase.auth().createUserWithEmailAndPassword(email, pass).catch(function (error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
    console.log(errorCode, errorMessage);

  });
}

const login = () => {
  let email = document.getElementById("email").value;
  let pass = document.getElementById("contraseña").value;

  firebase.auth().signInWithEmailAndPassword(email, pass).catch(function (error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
    console.log(errorCode, errorMessage);

  });

};

function observer() {
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      //Variable para obtener datos de firestore
      //Intentando ordenar lista con .orderBy('time', 'desc') pero no despliega la información
      // Ejem  let docRef = db.collection('visitors').orderBy('desc');
      let docRef = db.collection('visitors');
      //let usuario = user;
      let registration = document.getElementById('registration');
      let clean = '';
      registration.innerHTML = clean;

      
   
      //Función de firestore para obtener datos
      docRef.get().then(element => {
        let tabData = '';
        let results = document.getElementById('contenido');
        //let picture = visitor.data().Foto;

        element.forEach(visitor => {
          let timeStamp = visitor.data().fechaYhora.seconds;
          let myDate = new Date(timeStamp * 1000);
       
          console.log(visitor.data().Visitante);
          console.log(visitor.data().Asunto);
          console.log(myDate);
         

          tabData += `<div>
          <p>${visitor.data().Visitante}</p>
          <p>${visitor.data().Asunto}</p>
          <p>${myDate}</p>
        </div>
        `;
        });

        results.innerHTML = `<h3>Información de visitantes</h3>` + tabData  + `<button class="btn center waves-effect waves-light btn" onclick="cerrar()">Log Out</button>`;

      });
    }
  });

  let storage = firebase.storage();
  var pathReference = storage.ref('images');
  let storageRef = firebase.storage().ref();

     // `url` is the download URL for 'images/stars.jpg'
    
  let httpsReference = storage.refFromURL('https://firebasestorage.googleapis.com/v0/b/visitor-register-f8275.appspot.com/o/images?alt=media&token=e2e3446c-f574-460c-a9f0-0e2b90fb2259');
  storageRef.child('images').getDownloadURL().then(function(url) {
    let img = document.getElementById('myimg');
    img.src = url;
  }).catch(function(error) {
    console.log('Oooops');
    // Handle any errors
  });
};
observer();

function cerrar() {
  firebase.auth().signOut()
    .then(function () {
      location.href = '../../index.html';
    })
    .catch(function (error) {
      console.log(error);
    })

};


//`<img src="${picture}">`