
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


window.registerVisitor = () => {
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

  window.logOut = () => {
    firebase.auth().signOut()
    .then(function(){
       console.log("Saliendo...");
    })
    .catch(function (error){
      console.log(error);
    })
  
    };

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