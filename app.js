function ingresar(){

var userEmail = document.getElementById("email").value;
var userPass = document.getElementById("pass").value;

firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  //console.log("Error:" + errorCode + errorMessage);
  window.alert("Error :  " + errorMessage);
  //
});


}


function registrarse(){

var userEmail = document.getElementById("new_mail").value;
var userPass = document.getElementById("new_pass").value;

firebase.auth().createUserWithEmailAndPassword(userEmail, userPass)
.catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  window.alert("Usuario invalido");
  // ...
});


}