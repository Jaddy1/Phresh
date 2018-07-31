
const auth = firebase.auth()
const database = firebase.firestore()
const profSignIn = document.querySelector('#prof-sign-in')
const name = document.querySelector('#name')
const dorm = document.querySelector('#dorm')
const phoneNumber = document.querySelector('#phoneNumber')
const descrip = document.querySelector('#descrip')
const submit = document.querySelector('#submit')


// Using a popup.
const provider = new firebase.auth.GoogleAuthProvider()
provider.addScope('profile')
provider.addScope('email')

window.onload = function(){
  initializeApp()
}

function initializeApp(){
  auth.onAuthStateChanged(function(user){
    if (user) {
      const avatarSrc = user.photoURL 
      // updateGoogleIcon(avatarSrc)
      updateUIforSignIn(avatarSrc)
    }
  })
}

function signInWithGoogle() {
  console.log('sign in')
  auth.signInWithPopup(provider)
  .then(function(result) {
    // This gives you a Google Access Token.
    const token = result.credential.accessToken
    // The signed-in user info.
    const user = result.user
    console.log(user)
    checkForUser(user)
    const avatarSrc = user.photoURL
    const name = user.displayName
    const email = user.email 
    const userId = user.uid
    const userInfo = {
      name: name,
      id: userId,
      photoURL: avatarSrc,
      email: email
    }
    addUserToDatabase(userInfo, userId)
    updateUIforSignIn(avatarSrc)
    
  })
  .catch( err => {
    redirectToHomePageWithError()
  })
}



function addUserToDatabase(userInfo, userId){
  // get a reference to the collection you need
  const userCollectionRef = database.collection('users')
  // create a document in that collection
  const newUserRef = userCollectionRef.doc(userId)
  // set the info equal to what you want
  newUserRef.set(userInfo)
}


function checkForUser(){
  
  const query = database.collection('users')
  .get()
  .then( snapshot => {
     if (snapshot.size ) {
       snapshot.forEach ( doc => {
         let userInfo = doc.data()
         console.log('hi2')
          /*updateUIwithHamburger(userInfo)*/
          window.location.href="createprofile.html"
       })
     }
  })
}
