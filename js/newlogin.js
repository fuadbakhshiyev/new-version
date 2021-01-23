let loginbox = document.getElementById('loginbox')

toggle = () => {
	loginbox.classList.toggle('signin')
	loginbox.classList.toggle('signup')
}

setTimeout(() => {
	loginbox.classList.add('signin')
}, 200)