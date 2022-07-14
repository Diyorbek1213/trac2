"use strict"

// АДАПТАЦИЯ ДЛЯ ДИСПЛЕЕВ ВЫШЕ 850 PX ПО ВЫСОТЕ

const houseElemnts = document.querySelector('.house__elements ');

if (+innerHeight > 850 && houseElemnts) {
	houseElemnts.classList.add('_active');
}

//ПОЯВЛЕНИЕ ГЛАЗА В СТЕНЕ ПОСЛЕ ЗАГРУЗКИ КОНТЕНТА

const eyes = document.querySelectorAll('.eye');

for (let i = 0; i < eyes.length; i++) {
	function showEyes() {
		eyes[i].classList.add('_active');
	}

	setTimeout(showEyes, 2000);
}

//ПОЯВЛЕНИЕ ТЕКСТА ПОСЛЕ ЗАГРУЗКИ КОНТЕНТА

const title = document.querySelector('.bg__title');

function showTitle() {
	title.classList.add('_active');
}

setTimeout(showTitle, 1000);

//ПРИ КЛИКЕ ПО КНОПКЕ ABOUT US ПОЯВЛЕНИЕ ТЕКСТА


function showText() {

	const menuContent = document.querySelector('.main__menu__bar');
	const menuBack = document.querySelector('.main__menu__block__back');


	menuContent.classList.add('_active');

	menuBack.addEventListener('click', () => {
		menuContent.classList.remove('_active');
	})


}


//ПРИ КЛИКЕ ПО КНОПКЕ SignUP ПОЯВЛЕНИЕ ФОРМЫ

const signup = document.querySelector('.signup__block');
const signupExit = document.querySelector('.signup__exit');
function showSignup() {
	signup.classList.toggle('_active');
}

signupExit.addEventListener('click', () => {
	signup.classList.remove('_active');
})

//ПРИ КЛИКЕ ПО КНОПКЕ SignIn ПОЯВЛЕНИЕ ФОРМЫ
const signin = document.querySelector('.signin__block');
const signinExit = document.querySelector('.signin__exit');
function showSignin() {
	signin.classList.toggle('_active');
}

signinExit.addEventListener('click', () => {
	signin.classList.remove('_active');
})

