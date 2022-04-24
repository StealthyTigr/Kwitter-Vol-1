const firebaseConfig = {
    apiKey: "AIzaSyCgKp1uwkw0zV5xio7paaEcSyXfVf9o2yU",
    authDomain: "kwitter-450fc.firebaseapp.com",
    databaseURL: "https://kwitter-450fc-default-rtdb.firebaseio.com",
    projectId: "kwitter-450fc",
    storageBucket: "kwitter-450fc.appspot.com",
    messagingSenderId: "606078189035",
    appId: "1:606078189035:web:2a75a474ed13a446832dae",
    measurementId: "G-THSQS6SMSF"
  };


  function addUser(){
      user_name = document.getElementById("user_name").value;
      firebase.database().ref("/").child(user_name).update({
          purpose : "adding Users"
      })

  }