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
      let docRef = db.collection('visitors');
      let usuario = user;
      let registration = document.getElementById('registration');
      let clean = '';
      registration.innerHTML = clean;
   
      //Función de firestore para obtener datos
      docRef.get().then(element => {
        let tabData = '';
        let results = document.getElementById('contenido');

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

        results.innerHTML = `<h3>Información de visitantes</h3>` + tabData + `<button class="btn center waves-effect waves-light btn" onclick="cerrar()">Log Out</button>`;

      });
    }
  });
};
observer();

function cerrar() {
  firebase.auth().signOut()
    .then(function () {
      alert('Vuelve pronto!');
      location.href = '../../index.html';
    })
    .catch(function (error) {
      console.log(error);
    })

};
