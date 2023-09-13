const firebaseConfig = {
  apiKey: "AIzaSyBAP2HgXx-voygp6a1bLk_J0GiW7Q1TcEM",
  authDomain: "brandonswebsite-93312.firebaseapp.com",
  databaseURL: "https://brandonswebsite-93312-default-rtdb.firebaseio.com",
  projectId: "brandonswebsite-93312",
  storageBucket: "brandonswebsite-93312.appspot.com",
  messagingSenderId: "16043005500",
  appId: "1:16043005500:web:0e8ff885d5ec884e5f1539",
  measurementId: "G-C8WKGPL5Y6",
  apiKey: "AIzaSyBAP2HgXx-voygp6a1bLk_J0GiW7Q1TcEM",
  authDomain: "brandonswebsite-93312.firebaseapp.com",
  databaseURL: "https://brandonswebsite-93312-default-rtdb.firebaseio.com",
  projectId: "brandonswebsite-93312",
  storageBucket: "brandonswebsite-93312.appspot.com",
  messagingSenderId: "16043005500",
  appId: "1:16043005500:web:0e8ff885d5ec884e5f1539",
  measurementId: "G-C8WKGPL5Y6"
};

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
      name = 'Anonymous'
    }
    if (name == "" && message == "") {
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
    form.reset()
    window.location.reload()
    form.reset();
    window.location.reload(); // auto refresh to display new comment
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
      showat.innerHTML += "<li>" + comment + "<br><br>" + "<span> <strong>" + name + "</strong><br>" + when + "</span></li>";
    })
  })
}
showPastComments()

//button change
function changeButton() {
  var btn = document.getElementById("btn");
  btn.value = 'my value'; // will just add a hidden value
  btn.innerHTML = 'Submitted!';
}
