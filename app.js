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
    semestre: semestre,
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

var tabla = document.getElementById('tabla');
db.collection("estudiantes").onSnapshot((querySnapshot) => {
    tabla.innerHTML = '';
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data().nombre}`);
        tabla.innerHTML += `
        <tr> 
        
         <td>${doc.data().nombre}</td>  
         <td>${doc.data().apellido}</td>  
         <td>${doc.data().carrera}</td>  
         <td>${doc.data().semestre}</td> 
        <td><button class="btn btn-danger" id="boton" onclick="DELETE('${doc.id}')">DELETE</button></td>
         <td><button class="btn btn-info" id="boton" onclick="UPDATE('${doc.id}','${doc.data().nombre}','${doc.data().apellido}','${doc.data().carrera}','${doc.data().semestre}')">Update</button></td>
         </tr>
         `
    });
});

function DELETE(id) {
    db.collection("estudiantes").doc(id).delete().then(function () {
        console.log("Document successfully deleted!");
    }).catch(function (error) {
        console.error("Error removing document: ", error);
    });
}
function UPDATE(id, nombre, apellido, carrera, semestre) {
    document.getElementById('nombre').value = nombre;
    document.getElementById('apellido').value  =apellido;
    document.getElementById('carrera').value = carrera;
    document.getElementById('semestre').value = semestre;

    var boton = document.getElementById('boton');
    boton.innerHTML = 'update';

    boton.onclick = function () {
        var washingtonRef = db.collection("estudiantes").doc(id);

        // Set the "capital" field of the city 'DC'
        var nombre = document.getElementById('nombre').value;
        var apellido = document.getElementById('apellido').value;
        var carrera = document.getElementById('carrera').value;
        var semestre = document.getElementById('semestre').value;

        return washingtonRef.update({
            nombre:   nombre,
            apellido: apellido,
            carrera:  carrera,
            semestre: semestre,
            })
            .then(function () {
                console.log("Document successfully updated!");
                boton.innerHTML = 'Guardar';
                document.getElementById('nombre').value = '';
                document.getElementById('apellido').value = '';
                document.getElementById('carrera').value = '';
                document.getElementById('semestre').value = '';
            })
            .catch(function (error) {
                // The document probably doesn't exist.
                console.error("Error updating document: ", error);
            });
    }



}