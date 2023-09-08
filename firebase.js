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
   var memorialSiteDB = firebase.database().ref("MemorialSite");

   document.getElementById("newcomment").addEventListener("submit",submitForm);
   
   function submitForm(e){
    e.preventDefault();

    var name = getElementVal('tbName');
    var comment = getElementVal('txComment');

    console.log(name, comment);
   }

   const getElementVal = (id) => {
    return document.getElementById(id).value;
   };