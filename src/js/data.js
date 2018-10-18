window.initFirebase = () => {
    firebase.initializeApp({
    apiKey: "AIzaSyBcF7TEYv7lKctHHG6gyP6Abg_npVzMBNc",
  authDomain: "visitor-register-f8275.firebaseapp.com",
  databaseURL: "https://visitor-register-f8275.firebaseio.com",
  projectId: "visitor-register-f8275",
  storageBucket: "visitor-register-f8275.appspot.com",
  messagingSenderId: "968340223875"
    });
};

const hideView = () => {
  document.getElementById('admin-view').style.display = 'none';
}
//Enviando a registro de visitante
document.getElementById('login').addEventListener('click', (event) => {
  location.href = 'src/views/home.html';
})

document.getElementById('admin-event').addEventListener
('click', (event) => {
  document.getElementById('admin-view').style.display = 'block';
  document.getElementById('welcome-view').style.display = 'none';
})


