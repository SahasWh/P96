const firebaseConfig = {
    apiKey: "AIzaSyAaLGZ2jF3TFgfBko8Cyep3HtZmngmhKS0",
    authDomain: "project-41-70df5.firebaseapp.com",
    databaseURL: "https://project-41-70df5-default-rtdb.firebaseio.com",
    projectId: "project-41-70df5",
    storageBucket: "project-41-70df5.appspot.com",
    messagingSenderId: "854061332391",
    appId: "1:854061332391:web:d9aa21d4872379160fa882"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");
  room_name = localStorage.getItem("room_name");

  function send() {
    msg = document.getElementById("message").innerHTML
    firebase.database().ref(room_name).push({
          name: user_name,
          message:msg,
          like:0 
    });
    document.getElementById("msg").value = "";
}