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


// order comments from newest to oldest\

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//reference your database
var db = firebase.database()
const ref = db.ref("messages")

// default to name being required
document.getElementById('tbName').required = true;

// Disabled name tb if anonymous checkbox is ticked
function checkAnon() {
  if (document.getElementById('anon').checked == false) {
    document.getElementById("tbName").disabled = false;
  }
  else {
    document.getElementById('tbName').required = false;
    document.getElementById("tbName").disabled = true;
  }
}


// Submit form and push to server
function save() {
  const form = document.getElementById('newcomment');
  form.addEventListener("submit", (e) => {
    e.preventDefault()
    const text = document.getElementById('txComment').value  // get comment
    if (document.getElementById('anon').checked == false) {
      var name = document.getElementById('tbName').value  // get name if not anon
    }
    else {
      name = 'anonymous'
    }
    if (name == "" && message == ""){  
      // ignore double form submission
    }
    else {
    ref.push({
      name: name,
      text: text,
      when: firebase.database.ServerValue.TIMESTAMP
    })
    //alters button when form submitted
    changeButton()
  }

    console.log(name, text)
    form.reset()
  })
}



// Pull data from server and display on page
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

//button change
function changeButton(){
var btn = document.getElementById("btn");
btn.value = 'my value'; // will just add a hidden value
btn.innerHTML = 'Submitted!';
}
