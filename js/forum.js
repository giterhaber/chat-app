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



const p = localStorage.getItem('userSTAT')
if (!p) {
  location.href = '../'
} else {
    //
}
const ref = db.collection('suggestion')


 


    
    // ref.get().then( function (doc) {


    //     // console.log(doc.data().list)
    //     list = doc.data().list



    //     // console.log(L)
    //     list.forEach( (v, i) => {

    //         // console.log(v.desc)



    //         post(i, v.title, v.desc)


    //     })
    // })

  




// function post(n, t, d) {
//     const format = `<tr>
//     <td>${n}</td>
//     <td>${t}</td>
//     <td>${d.substr(0, 50) + '...'}</td>
//   </tr>`


//   $('table').append(format)
// }





    $('#submitT').on('click', function () {
        // console.log(L)

        var tt = $('#ticketTitle').val()
        var td = $('#ticketDescription').val()

        const t = {
            date: new Date(),
            title: tt,
            desc: td,
            user: p
        }

            ref.add(t).then( (doc) => {
                console.log(doc.id)
                alert('success')
                setTimeout(() => {
                    location.href = '../chat.html'
                }, 3000);
            })
  
    })