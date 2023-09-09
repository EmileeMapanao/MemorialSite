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

// Add anon button
// order comments from newest to oldest


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//reference your database
var db = firebase.database()
const ref = db.ref("messages")

function save() {
  const form = document.getElementById('newcomment');
  form.addEventListener("submit", (e) => {
    if (document.getElementById('anon').checked){
      name = 'anonymous'
    }
    else {
    e.preventDefault();
    var name = document.getElementById('tbName').value
    }
    const text = document.getElementById('txComment').value

    ref.push({
      name: name,
      text: text,
      when: firebase.database.ServerValue.TIMESTAMP

    })

    alert('Saved')
    console.log(name, text)
    form.reset()
  })
}

function showPastComments() {
  var showat = document.getElementById('pastcomments');
  var commentsRef = firebase.database().ref('messages/');
  commentsRef.once('value', function (snapshot) {
   var com = snapshot.forEach(function (itemSnapshot) {
      var itemData = itemSnapshot.val();
      var comment = itemData.text;
      var name = itemData.name;
      var when = new Date(itemData.when).toLocaleDateString("en-us");
      showat.innerHTML += "<li>" + comment + "<br><br>" + "<span> <strong>" + name + " (" + when + ") </strong> </span></li>";
    })
  })
}
showPastComments()