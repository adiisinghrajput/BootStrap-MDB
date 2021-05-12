var firebaseConfig = {
    apiKey: "AIzaSyBeY4yrN-FAEVSG5rKpsF2aHF1krTFiLfo",
    authDomain: "adityasinghrajputportfolio.firebaseapp.com",
    databaseURL: "https://adityasinghrajputportfolio-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "adityasinghrajputportfolio",
    storageBucket: "adityasinghrajputportfolio.appspot.com",
    messagingSenderId: "46220481750",
    appId: "1:46220481750:web:b2b3c42efcf58e1ceea577",
    measurementId: "G-69W4CW9YNM"
  };

   // Initialize Firebase
   firebase.initializeApp(firebaseConfig);
   firebase.analytics();
   var firestore = firebase.firestore();

   //Starting grab our DOM element
   const submitButton = document.querySelector('#sendMessage');

   const nameInput = document.querySelector('#inputName');
   const emailInput = document.querySelector('#inputEmail');
   const mobileInput = document.querySelector('#inputMobile');
   const budgetInput = document.querySelector('#inputBudget');
   const servicesInput = document.querySelector('#inputServices');
   const cityInput = document.querySelector('#inputCity');
   const stateInput = document.querySelector('#inputState');

   const db = firestore.collection("messages");

   submitButton.addEventListener("click", function(){
   
        const userName = nameInput.value;
        const userEmail = emailInput.value;
        const userMobile = mobileInput.value;
        const userBudget = budgetInput.value;
        const userCity = cityInput.value;
        const userState = stateInput.value;
        const userRequriement = servicesInput.value;

        console.log(userName);
       
       db.doc().set({
           name :userName,
           mobile : userMobile,
           email : userEmail,
           budget : userBudget,
           city : userCity,
           state : userState,
           requriement : userRequriement
       }).then(function(){
           console.log("Data Saved Succesfully");
       }).catch(function(error){
           console.log(error);
       });
   });












