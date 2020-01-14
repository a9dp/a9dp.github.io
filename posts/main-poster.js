onerror = function () {
 alert(arguments[0])
}

my('#title, #descript, #content')
.each(function (e) {
	my(this).click(function (e) {
		if (my(this).find('textarea[data-type="editer"]')[0])
			return;
			
		try {
			e.preventDefault()
			e.stopPropagation()
		} catch (e) {}
		
		var html = my(this).html()
		
		var _ = this
		
		var edit = my('<textarea>')
		edit.data('type', 'editer')
		
		edit.html(html)
		.css({
			width: '100%'
		})
		.css({
			height: my(this).innerHeight() + 'px'
		})
		.addClass('form-control border')
		.blur(function () {
			this.value = this.value.replace(/\n/g, '<br>')
			my(_).html(this.value)
		})
		.focus()
		my(this).empty()
		.append(edit)
		
	})
})
my('#posted').click(function () {
	var file, _ = this
	var inpF = my('<input type=file accept="image/*,capture=camera">')
	.appendTo('body')
	.css({
		display: 'none',
		visible: 'none',
		opacity: 0,
		position: 'fixed',
		top: '-100vh',
		left: '-100vw'
	})
	.change(function () {
alert(010)
		file = this.files[0]
		var read = new FileReader
		
		alert("read start")
		read.onload = function () {
			_.src = this.result
		
			_[my.expando + '-file'] = file
		}
		  read.readAsDataURL(file)
	})
	inpF[0].click()
	inpF[0].focus()
	
	
	
})







FriendlyChat.prototype.post = function (e) {
	if (this.checkSignedInWithMessage()) {

	var currentUser = this.auth.currentUser, _ = this;
alert(currentUser.displayName) 

	firebase.database().ref("posted").push({
	  name: currentUser.displayName,
	  photoUrl: currentUser.photoURL || '/images/no-login.png'
	}).then(function() {/*
		_.database.ref("posted-preview").push({
	  name: currentUser.displayName,
	  title: my('#title').html(),
	  posted: my('#descript').html(),
	  time: Date.now(),
	  descript: e,
	  photoUrl: currentUser.photoURL || '/images/no-login.png'
		})
		.then(function () {
			my('#loading')
			.attr('hidden', true)
alert("done") 
		})
		.catch(function (e) {
			my('#loading')
			.attr('hidden', true)
		alert("error" + e)
		})*/

	})
	.catch(function(error) {
		my('#loading')
		.attr('hidden', true)
	  console.error('Error writing to Firebase Database', error)
	})
  }
}


firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
alert(user.photoURL) 
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

my('#post-blog').click(function () {
	
	if (friendlyChat.checkSignedInWithMessage()) {
	
		my('#loading')
		.unAttr('hidden')
		
		var file = my('#posted')[0][my.expando + '-file']
		if (file) {
			// if file exists
			
			var sto = friendlyChat.storage
			.ref('posted-image')
			.put(file, {
				contentType: file.type
			})
			
			sto.on('state_changed',
				function () {
					
				},
				function () {
					//friendlyChat.post()
				},
				function () {
					sto.snapshot.ref.getDownloadURL().then(function(downloadURL) {
			 //friendlyChat.post(downloadURL)
 })
				}
			)
			
		}
		else friendlyChat.post();
		
	}
	else {
		alert("You have login if active action this")
	}
	
})
