firebase.initializeApp({
apiKey: "AIzaSyDNcVFDDpOa2wm6KrT3pwhG8Vk2jZjImMU",
authDomain: "openshisft.firebaseapp.com",
projectId: "openshisft",
});

var db = firebase.firestore();


db.collection("users").add({
    first: "Alan",
    middle: "Mathison",
    last: "Turing",
    born: 1912
})
.then(function(docRef) {
    console.log("Document written with ID: ", docRef.id);
})
.catch(function(error) {
    console.error("Error adding document: ", error);
});