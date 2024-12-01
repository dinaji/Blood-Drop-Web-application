const firebaseConfig = {
    apiKey: "AIzaSyCHnQQ-3pnXDwnfNdokdk1GVSU_B6k2em4",
    authDomain: "blooddrop-f6cc9.firebaseapp.com",
    databaseURL: "https://blooddrop-f6cc9-default-rtdb.firebaseio.com",
    projectId: "blooddrop-f6cc9",
    storageBucket: "blooddrop-f6cc9.appspot.com",
    messagingSenderId: "738527134011",
    appId: "1:738527134011:web:020d67aa48138bb4e0371e"
  };

//initialize firebase
  firebase.initializeApp(firebaseConfig);

  //reference my database
 var BloodDropDB = firebase.database().ref('BloodDrop');

document.getElementById('loginForm').addEventListener('submit', submitForm);

function submitForm(e){
    e.preventDefault();

    var username = getElementVal('username');
    var password =getElementVal('password');

    console.log(username,password);
   //saveMessages(username, password);

}

const saveMessages = (username, password) =>{
    var newBloodDrop = BloodDropDB.push();
    newBloodDrop.set({
        username: username,
        password: password,
    });
};

const getElementVal =(id)=>{

    return document.getElementById(id).value; 
}