function addUser(){
    user_name = document.getElementById("user_name").value;
    
    localStorage.setItem("user_name" , user_name);

    window.location = "kwitter_room.html";
}

function addRoom(){
    room_name = document.getElementById("room_name").value;

    firebaseConfig.database().ref("/").child(room_name).update({
        purpose : "adding room name"    
    });

    window.locatioan = "Kwitter_page.html";
}