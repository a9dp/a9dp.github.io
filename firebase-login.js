
firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
alert(firebase.auth.currentUser.uid) 
	my('#user-pic').css("background-image", "url(" + user.photoURL + ")")
	
	my('#user-name').text(user.displayName).unAttr("hidden")
	
	my('#sign-out').unAttr('hidden')
	
	my('#sign-in').attr('hidden', true)
	
  } else {
  	my('#user-pic').css("background-image",  'url("../images/no-login.png")')
	
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
