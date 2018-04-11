firebase.initializeApp({
apiKey: "AIzaSyDNcVFDDpOa2wm6KrT3pwhG8Vk2jZjImMU",
authDomain: "openshisft.firebaseapp.com",
projectId: "openshisft",
});

var db = firebase.firestore();


function guardar() {

var nombre = document.getElementById('nombre').value;
var apellido = document.getElementById('apellido').value;
var carrera = document.getElementById('carrera').value;   
var semestre = document.getElementById('semestre').value;  

db.collection("estudiantes").add({

    nombre:   nombre,
    apellido: apellido,
    carrera:  carrera,
    semestre: semestre ,
})
.then(function(docRef) {
    console.log("Document written with ID: ", docRef.id);
    document.getElementById('nombre').value = '';
    document.getElementById('apellido').value = '';
    document.getElementById('carrera').value = '';
    document.getElementById('semestre').value = '';
})
.catch(function(error) {
    console.error("Error adding document: ", error);
});
}