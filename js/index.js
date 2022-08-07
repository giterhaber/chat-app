
if (typeof firebase === "undefined") {
  alert("Firebase SDK not detected. You must include it before initialization");
}
firebase.initializeApp({
  apiKey: "AIzaSyBskQE0MtgrzaGiifrTjasqM1P7GqF-4IA",
  authDomain: "opeanseassupport.firebaseapp.com",
  projectId: "opeanseassupport",
  storageBucket: "opeanseassupport.appspot.com",
  messagingSenderId: "172655186140",
  appId: "1:172655186140:web:74c4dad1902667f913a419",
  measurementId: "G-SV1CFC7N5Q",
});

//this is the name of our db collection to store chat messages
const BASIC_CHAT_DB = "mamshie";

let NAME = "User_" + Math.round(Math.random() * 1000);

// addMessage2DOM({ content: `Welcome to Live Chat, ${NAME}`, name: "" });

const db = firebase.firestore(); //get a handle to firestore DB

//this method adds the given data to page
function addMessage2DOM(data, id) {
  let side = data.name == NAME ? "mine" : "theirs";
  let msg = `<div class="message ${side}">
    <div class="message__name">${data.name}</div>
    <div class="message__bubble">${data.content}</div>
  </div>`;

  const allMessages = document.querySelector(".messages");
  allMessages.innerHTML += msg; //add message to the page
  // Scroll messages area to its bottom
  allMessages.scrollTop = allMessages.scrollHeight - allMessages.clientHeight; //scroll down as new chat messages being added
  return;
}

const button = document.querySelector("#sendBtn");

button.addEventListener("click", () => {
  //this function calls addMessage2DB with data from page
  const input = document.querySelector("#input");
  const value = input.value;
  input.value = ""; //clear it after reading

  const data = {
    name: NAME,
    content: value,
    time: new Date(),
  };
  //insert to DB and then snapshot handler takes care of adding it to DOM
  addMessage2DB(data);
  return;
});

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
  .orderBy("time")
  .onSnapshot((querySnapshot) => {
    //this methods reads data from DB and calls addMessage2DOM
    console.log("querySnapshot.docs.length: " + querySnapshot.docs.length);
    //querySnapshot.forEach((doc) => {  //if you want all
    querySnapshot.docChanges().forEach((change) => {
      //if you want only changes
      addMessage2DOM(change.doc.data(), change.doc.id);
    });
  });
