var config = {
	apiKey: "AIzaSyATsprQmBaksAg7ZPoGGejFTLWclLP576Y",
	authDomain: "glass-gasket-254006.firebaseapp.com",
	databaseURL: "https://glass-gasket-254006.firebaseio.com",
	projectId: "glass-gasket-254006",
	storageBucket: "glass-gasket-254006.appspot.com",
	messagingSenderId: "883400548883",
	appId: "1:883400548883:web:61d2e40bfa097c9ba4d5e6",
	measurementId: "G-GZ498J99QG"
};
  // Initialize Firebase
  firebase.initializeApp(config);


function FriendlyChat() {
  this.checkSetup();
  this.initFirebase();
}


FriendlyChat.prototype.initFirebase = function() {
  this.auth = firebase.auth();
  this.database = firebase.database();
  this.storage = firebase.storage();
}
FriendlyChat.prototype.signIn = function() {

  var provider = new firebase.auth.GoogleAuthProvider();
  this.auth.signInWithPopup(provider)
}

FriendlyChat.prototype.signInFb = function() {

	var provider = new firebase.auth
	.FacebookAuthProvider()
	
	//provider.addScope('user_birthday')
	
	provider.setCustomParameters({
		'display': 'popup'
	})
	
	firebase.auth()
	.signInWithRedirect(provider);
	
	firebase.auth()
	.signInWithPopup(provider)
	.then(function (result) {
		var token = result
		.credential.accessToken
		
	  	var user = result.user
	}).catch(function (error) {
		var errorCode = error.code;
		var errorMessage = error.message;
		var email = error.email;
		var credential = error.credential
	})
	firebase.auth()
	.getRedirectResult()
	.then(function (result) {

		if (result.credential) {
			var token = resul
				t.credential
				.accessToken

		}
		var user = result.user;
	}).catch(function (error) {
		var errorCode = error.code;
		var errorMessage = error.message;
		var email = error.email;
  // The firebase.auth.AuthCredential type that was used.
		var credential = error.credential
	})
}

// Signs-out of Friendly Chat.
FriendlyChat.prototype.signOut = function() {
  // Sign out of Firebase.
  this.auth.signOut();
};

// Returns true if user is signed-in. Otherwise false and displays a message.
FriendlyChat.prototype.checkSignedInWithMessage = function() {
  if (this.auth.currentUser) {
	return true;
  }
  return false;
};

FriendlyChat.LOADING_IMAGE_URL = 'https://www.google.com/images/spin-32.gif';

// Displays a Message in the UI.
FriendlyChat.prototype.checkSetup = function() {
  if (!window.firebase || !(firebase.app instanceof Function) || !window.config) {
	window.alert('You have not configured and imported the Firebase SDK. ' +
		'Make sure you go through the codelab setup instructions.');
  } else if (config.storageBucket === '') {
	window.alert('Your Firebase Storage bucket has not been enabled. Sorry about that. This is ' +
		'actually a Firebase bug that occurs rarely. ' +
		'Please go and re-generate the Firebase initialisation snippet (step 4 of the codelab) ' +
		'and make sure the storageBucket attribute is not empty. ' +
		'You may also need to visit the Storage tab and paste the name of your bucket which is ' +
		'displayed there.');
  }
}


  window.friendlyChat = new FriendlyChat();
