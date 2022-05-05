
//ADD YOUR FIREBASE LINKS HERE

var firebaseConfig = {
  apiKey: "AIzaSyA57-DB41HbbPrFWjgD0x6eRI9yv7Iw_sU",
  authDomain: "kwitter-3b98d.firebaseapp.com",
  databaseURL: "https://kwitter-3b98d-default-rtdb.firebaseio.com",
  projectId: "kwitter-3b98d",
  storageBucket: "kwitter-3b98d.appspot.com",
  messagingSenderId: "188920344535",
  appId: "1:188920344535:web:e327bccf83432b9a6c2592",
};

// Initialize Firebase
 firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Group_names = childKey;
      //Start code
      console.log("Room Name -" + Room_names);
      row = "<div class='room_nmae' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
   window.location = "kwitter_page.html";
}

