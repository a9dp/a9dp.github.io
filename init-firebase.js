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
  this.auth.onAuthStateChanged(
	this.onAuthStateChanged
	.bind(this)
  )
}

FriendlyChat.prototype.loadMessages = function() {

  this.messagesRef = this.database.ref('messages');

  this.messagesRef.off();
  this.messagesRef.limitToLast(12).on('child_added', setMessage);
  this.messagesRef.limitToLast(12).on('child_changed', setMessage);
};

// Saves a new message on the Firebase DB.
FriendlyChat.prototype.saveMessage = function(posted) {

  if (posted && this.checkSignedInWithMessage()) {

	var currentUser = this.auth.currentUser

	this.messagesRef.push({
	  name: currentUser.displayName,
	  text: posted.text,
	  title: posted.title,
	  posted: posted.posted,
	  time: Date.now(),
	  photoUrl: currentUser.photoURL || '/images/profile_placeholder.png'
	}).then(function() {
		//
	})
	.catch(function(error) {
	  console.error('Error writing to Firebase Database', error)
	})
  }
}


FriendlyChat.prototype.saveImagePoseted = function (file) {
  
  var myObject = my({})
  if (this.checkSignedInWithMessage()) {

	var e = this.storage
	.ref('posted-image')
	.put(file, {
		contentType: file.type
	})
	
	e.on("state_changed",
	function () {
		myObject.trigger('progess')
	}, function () {
		myObject.trigger('catch')
	}, function () {
		e.snapshot.ref
		.getDownloadURL()
		.then(function (url) {
			myObject.trigger('then', url)
		})
	})

  }
  else myObject.trigger('catch');
  
  return {
	  then: function (fn) {
		  myObject.on('then')
		  .then(function (e) {
			  fn.call(this, e.detail)
		  })
	  },
	  catch: function (fn) {
		  myObject.on('catch')
		  .then(function (e) {
			  fn.call(this, e.detail)
		  })
	  }
  }
  
}


FriendlyChat.prototype.signIn = function() {

  var provider = new firebase.auth.GoogleAuthProvider();
  this.auth.signInWithPopup(provider)
}

FriendlyChat.prototype.signInFb = function() {

	var provider = new firebase.auth
	.FacebookAuthProvider()
	
	provider
	.addScope('user_birthday')
	
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


FriendlyChat.prototype.onAuthStateChanged = function (user) {
  if (user) {
  
	var profilePicUrl = user.photoURL;
	var nane = user.displayName;

  } else {
  
  }
}

// Returns true if user is signed-in. Otherwise false and displays a message.
FriendlyChat.prototype.checkSignedInWithMessage = function() {
  if (this.auth.currentUser) {
	return true;
  }
  return false;
};


FriendlyChat.LOADING_IMAGE_URL = 'https://www.google.com/images/spin-32.gif';

// Displays a Message in the UI.
FriendlyChat.prototype.displayMessage = function(key, name, text, picUrl, imageUri) {
  var div = document.getElementById(key);

  this.messageList.scrollTop = this.messageList.scrollHeight;
  this.messageInput.focus();
};


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

addEventListener("load", function () {

firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
	my('#user-pic').css("background-image", "url(" + user.photoURL + ")")
	
	my('#user-name').text(user.displayName).unAttr("hidden")
	
	my('#sign-out').unAttr('hidden')
	
	my('#sign-in').attr('hidden', true)
	
  } else {
  	my('#user-pic').css("background-image",  'url("/images/no-login.png")')
	
	my('#user-name').attr('hidden', true)
	
	my('#sign-out').attr('hidden', true)
	
	my('#sign-in').unAttr('hidden')
  }
})

my('#sign-in').click(function () {
    friendlyChat.signInFb()
})
my('#sign-out').click(function () {
    friendlyChat.signOut()
})
})
