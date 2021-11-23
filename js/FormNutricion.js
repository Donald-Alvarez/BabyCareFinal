  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBDmWa78QM3MiRioRBiUKSV4oAkOcQsDcI",
    authDomain: "babycareultimo.firebaseapp.com",
    projectId: "babycareultimo",
    storageBucket: "babycareultimo.appspot.com",
    messagingSenderId: "338962396519",
    appId: "1:338962396519:web:a0a1c00b6d682c0b49abc2"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  var firestore = firebase.firestore();

  
//Variable to access database collection
const db = firestore.collection("FomDATA")

let submitButton = document.getElementById('EnviarForm')

//Create Event Listener To Allow Form Submission
submitButton.addEventListener("click", (e) => {
  //Prevent Default Form Submission Behavior
  e.preventDefault()

  //Get Form Values
  let Nombre = document.getElementById("Nombre").value;
  let Apellido = document.getElementById("Apellido").value;
  let Edad = document.getElementById("Edad").value;
  let Alimentacion = document.getElementById("Alimentacion").value;
  let Leche = document.getElementById("Leche").value;
  let Crecimiento = document.getElementById("Crecimiento").value;
  let Nombretutor = document.getElementById("Nombretutor").value;
  let Correotutor = document.getElementById("Correotutor").value;
  


  //Save Form Data To Firebase
  db.doc().set({
    Nombre: Nombre,
    Apellido: Apellido,
    Edad: Edad,
    Alimentacion: Alimentacion,
    Leche: Leche,
    Crecimiento: Crecimiento,
    Nombretutor: Nombretutor,
    Correotutor: Correotutor
  
  }).then( () => {
    console.log("Data saved")
    alert("Datos Guardados")
  }).catch((error) => {
    console.log(error)
  })

  //alert
  alert("Your Form Has Been Submitted Successfully")
})
