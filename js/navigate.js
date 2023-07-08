const app = firebase.initializeApp({
    apiKey: "AIzaSyAZaVfOOPYkw3kFTi1FlynQ41vT4IMXVpQ",
    authDomain: "pamalikasako.firebaseapp.com",
    databaseURL: "https://pamalikasako-default-rtdb.firebaseio.com",
    projectId: "pamalikasako",
    storageBucket: "pamalikasako.appspot.com",
    messagingSenderId: "393016043530",
    appId: "1:393016043530:web:356a22824be3f5d0ce57f3",
    measurementId: "G-FQ4XL0C28F"
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

            console.log('porn')
        }
    }, (error) => {
        console.log(error);
    })



    // window.open('panel', '_self')
})



function addUSER() {
    
    ref.doc('kerveysir').set({
        status: 'live'
    }).then( console.log('in'))
}

