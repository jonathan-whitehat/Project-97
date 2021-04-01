  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyA7NWyNxvg2nOmhrZh8jP86thkrhD1BQs4",
    authDomain: "letschat-web-app-4dbc4.firebaseapp.com",
    databaseURL: "https://letschat-web-app-4dbc4-default-rtdb.firebaseio.com",
    projectId: "letschat-web-app-4dbc4",
    storageBucket: "letschat-web-app-4dbc4.appspot.com",
    messagingSenderId: "951403237154",
    appId: "1:951403237154:web:b585079a754df9ebe1df7b"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "Welcome" + user_name + "!";

function addRoom()
{     
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
          purpose : "adding_room_name"
    });
    localStorage.setItem("room_name", room_name);
    window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
      Room_names = childKey;
      console.log("RoomName- " + room_name);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      });
    });
}


getData();

function redirectToRoomName(name) 
{
  console.log(name); 
  localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html";
}

function logout()
{
  localStorage.removeItem("user_name");
  localStorage.removeItem("user_name");
  window.location = "index.html";
}