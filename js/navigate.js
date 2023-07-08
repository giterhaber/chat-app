const app = firebase.initializeApp({
    apiKey: "AIzaSyBskQE0MtgrzaGiifrTjasqM1P7GqF-4IA",
    authDomain: "opeanseassupport.firebaseapp.com",
    projectId: "opeanseassupport",
    storageBucket: "opeanseassupport.appspot.com",
    messagingSenderId: "172655186140",
    appId: "1:172655186140:web:74c4dad1902667f913a419",
    measurementId: "G-SV1CFC7N5Q",
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
    
    ref.doc('kerveysir').set({
        status: 'admin'
    }).then( console.log('in'))
}
// addUSER()

