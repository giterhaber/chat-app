const app = firebase.initializeApp({
    apiKey: "AIzaSyDUXtotsJrj6onAiK_b2O5wZsbZs9eOI_A",
    authDomain: "zerozeroone-d5ea3.firebaseapp.com",
    databaseURL: "https://zerozeroone-d5ea3-default-rtdb.firebaseio.com",
    projectId: "zerozeroone-d5ea3",
    storageBucket: "zerozeroone-d5ea3.appspot.com",
    messagingSenderId: "596456248535",
    appId: "1:596456248535:web:7851334958f27e2131cc92",
    measurementId: "G-BNBLESZCPP"
  })

const db = firebase.firestore(app);

const ref = db.collection('userS')

$('.form__btn').on('click', function () {

    let V = $('.form__input').val()
    let C = $('#chatcode').val()

    localStorage.setItem('chatroom', C)

    console.log(V)


    ref.doc(V).get().then( (doc) => {
        if (doc.exists) {
            console.log('yeah')


            
            localStorage.setItem('userSTAT', V)
            localStorage.setItem('allow', 'yes')

            setTimeout(window.open('chat.html', '_self'), 6000)


        } else {

            alert('error')
        }
    }, (error) => {
        console.log(error);
    })



    // window.open('panel', '_self')
})



function addUSER() {
    
    ref.doc('gogong').set({
        status: 'adS'
    }).then( console.log('in'))
}
addUSER()

