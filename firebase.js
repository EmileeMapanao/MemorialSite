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

   function save() {
    var name = document.getElementById('tbName').value;
    var comment = document.getElementById('txComment').value;
    //reads comment, if empty asks user to fill block
    if (document.getElementById('txComment').value.length == 0){
      alert ('Please enter a message.');
    }

    
    if (!document.getElementById('tbName').value == 0) { 
      db.ref('users/' + name).push({
        comment : comment
    })
    alert('Saved')
    }
    
    // if user enters name, no push to database
    // if user does not enter name, pushses anon to db
   }

   function get() {
    var username = document.getElementById('tbName').value
    var user_ref = db.ref('users/' + tbName)
    user_ref.on('value', function(snapshot){
      var data = snapshot.val()

      console.log(data)
    })
  }
   
  function update() {
    var comment = document.getElementById('txComment').value
    var updates = {
      comment : comment

    }
  }
   