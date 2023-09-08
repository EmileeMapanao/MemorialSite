const firebaseConfig = {
    apiKey: "AIzaSyDk1UgfIbXomLDJqi473t73dqC9YaPuSHQ",
    authDomain: "memorialwebsite-82edf.firebaseapp.com",
    databaseURL: "https://memorialwebsite-82edf-default-rtdb.firebaseio.com",
    projectId: "memorialwebsite-82edf",
    storageBucket: "memorialwebsite-82edf.appspot.com",
    messagingSenderId: "1029058327991",
    appId: "1:1029058327991:web:411d72a5494979eae8a432",
    measurementId: "G-7N1DDTDBLV"
  };

    // Initialize Firebase
   firebase.initializeApp(firebaseConfig);

   //reference your database
   var db = firebase.database()
   const ref = db.ref("messages")

   //function save() {
    //var name = document.getElementById('tbName').value;
    //var comment = document.getElementById('txComment').value;
    //var newComment = document.getElementById('newcomment').value;
    //reads comment, if empty asks user to fill block

      //db.ref('users/').push({
       // name : name,
      //  comment : comment,
      //  newComment : newComment
    //})
    //alert('Saved')
  
    
    // if user enters name, no push to database
    // if user does not enter name, pushses anon to db
   //}

  // function get() {
  //  var username = document.getElementById('tbName').value
   // var user_ref = db.ref('users/' + tbName)
  //  user_ref.on('value', function(snapshot){
  //    var data = snapshot.val()

  //    console.log(data)
   // })
//  }
   
  //function update() {
  //  var comment = document.getElementById('txComment').value
  //  var updates = {
  //    comment : comment
//
 //   }
 // }

 function save(){
  const form = document.getElementById('newcomment');

  form.addEventListener("submit",(e)=>{
    e.preventDefault();
    const name = document.getElementById('tbName').value
    const text = document.getElementById('txComment').value

    ref.push({
      name : name,
      text: text,

    })

    alert('Saved')
    console.log(name, text)
    form.reset
  })
}

   