window.initFirebase();

const register = () => {
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
   
   const login = () => {
     let email = document.getElementById("email").value;
     let pass = document.getElementById("contraseña").value;
   
     firebase.auth().signInWithEmailAndPassword(email, pass).catch(function(error) {
       // Handle Errors here.
       var errorCode = error.code;
       var errorMessage = error.message;
       // ...
       console.log(errorCode, errorMessage);
     
     });
     
   }
     
   function observer(){
     firebase.auth().onAuthStateChanged(function(user) {
       if (user) {
         let usuario = user;
         let registration = document.getElementById('registration');
         let logOutButton = document.getElementById('contenido');
         let clean = '';
            
        registration.innerHTML = clean; 
        logOutButton.innerHTML = `
        <p>Aquí tabla dinámica</p>
        <button onclick="cerrar()">Log Out</button>
    `;

         console.log("Usuario activo");
       } else {
         
         console.log("No existe usuario activo");
       }
     });
   }
   observer();
   

   
   function cerrar(){
     firebase.auth().signOut()
     .then(function(){
        console.log("Saliendo...");
        location.href = '../../index.html';
     })
     .catch(function (error){
       console.log(error);
     })
   
     };
   
 
   