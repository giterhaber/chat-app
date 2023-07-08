
if (typeof firebase === "undefined") {
    alert("Firebase SDK not detected. You must include it before initialization");
  }
  firebase.initializeApp({
    apiKey: "AIzaSyAZaVfOOPYkw3kFTi1FlynQ41vT4IMXVpQ",
    authDomain: "pamalikasako.firebaseapp.com",
    databaseURL: "https://pamalikasako-default-rtdb.firebaseio.com",
    projectId: "pamalikasako",
    storageBucket: "pamalikasako.appspot.com",
    messagingSenderId: "393016043530",
    appId: "1:393016043530:web:356a22824be3f5d0ce57f3",
    measurementId: "G-FQ4XL0C28F"
  });
  
  //this is the name of our db collection to store chat messages

  var ppp = prompt('')
  if (ppp == 'checkgong') {
    //
  } else {
    location.href = '../'
  }





  const BASIC_CHAT_DB = 'suggestion';
  let NAME = "User_" + Math.round(Math.random() * 1000);
  
  // addMessage2DOM({ content: `Welcome to Live Chat, ${NAME}`, name: "" });
  
  const db = firebase.firestore(); //get a handle to firestore DB




    
  
  //this method adds the given data to page
  function addMessage2DOM(data, id) {
    let side = data.name == NAME ? "mine" : "theirs";
    let msg = `<div class="message ${side}">
      <div class="message__name">${data.user}: <span style="color:grey">${data.title}</span></div>
      <div class="message__bubble">${data.desc} <br><small>${data.date.toDate().toLocaleString()}</small></div>
    </div>`;
  
    const allMessages = document.querySelector(".messages");
    allMessages.innerHTML += msg; //add message to the page
    // Scroll messages area to its bottom
    allMessages.scrollTop = allMessages.scrollHeight - allMessages.clientHeight; //scroll down as new chat messages being added
  
   
    return;
  }

  const button = document.querySelector("#sendBtn");
  
//   button.addEventListener("click", () => {
//     //this function calls addMessage2DB with data from page
//     const input = document.querySelector("#input");
//     const value = input.value;
//     input.value = ""; //clear it after reading

//     let data;
    

  
  
//             data = {
//                 name: '...',
//                 content: value,
//                 time: new Date(),
//               };
//             //   out(value)
//               addMessage2DB(data);
       
  

    

//     //insert to DB and then snapshot handler takes care of adding it to DOM

  
//     return;
//   });
  
  //keypressenter
  input.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      button.click();
      
    }
  });
  
  //this method adds the given data to firebase database collection
  function addMessage2DB(data) {
    db.collection(BASIC_CHAT_DB)
      .add(data)
      .then(function (docRef) {
        //if add is successful
        console.log("Document written with ID: " + docRef.id);
      })
      .catch(function (error) {
        //if add fails
        console.logError("Error adding document: " + error);
      });
    return;
  }
  
  //lisen to DB changes . onSnapshot() works everytime data changed from anywhere
  db.collection(BASIC_CHAT_DB)
    .orderBy("date")
    .onSnapshot((querySnapshot) => {
      //this methods reads data from DB and calls addMessage2DOM
      console.log("querySnapshot.docs.length: " + querySnapshot.docs.length);
      //querySnapshot.forEach((doc) => {  //if you want all
      querySnapshot.docChanges().forEach((change) => {
        //if you want only changes
        addMessage2DOM(change.doc.data(), change.doc.id);

        console.log(change.doc.data())

        
      });
    });
  
  
  

  

  





