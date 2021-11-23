const firebaseConfig = {
    apiKey: "AIzaSyBDmWa78QM3MiRioRBiUKSV4oAkOcQsDcI",
    authDomain: "babycareultimo.firebaseapp.com",
    projectId: "babycareultimo",
    storageBucket: "babycareultimo.appspot.com",
    messagingSenderId: "338962396519",
    appId: "1:338962396519:web:a0a1c00b6d682c0b49abc2"
  };

//Inicializar Firebase
firebase.initializeApp(firebaseConfig);
var firestore = firebase.firestore();

//Leer Datos
var tabla = document.getElementById("tabla");
firestore.collection("FomDATA").onSnapshot((querySnapshot) => {
    tabla.innerHTML= "";
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data().Documento}`);
        tabla.innerHTML += `
        <tr>
        <th scope="row">${doc.data().Nombre}</th>
        <td>${doc.data().Apellido}</td>
        <td>${doc.data().Edad}</td>
        <td>${doc.data().Alimentacion}</td>
        <td>${doc.data().Leche}</td>
        <td>${doc.data().Crecimiento}</td>
        <td>${doc.data().Nombretutor}</td>
        <td>${doc.data().Correotutor}</td>
        </tr>
        `
    });
});
