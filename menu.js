document.querySelector('#btnmenu').onclick = function() {
	let btnText = document.querySelector('#btnmenu');
	let hideMenu = document.querySelector('header nav');
	console.log(hideMenu.textContent);
		
	if (btnText.innerText == "Скрыть меню") {
		btnText.innerText = "Показать меню";
	} else if (btnText.innerText == 'Показать меню'){
		btnText.innerText = "Скрыть меню";
	}
	
	console.log('nav.first-screen_navmenu = ', hideMenu.classList.contains('first-screen_navmenu__hide'));
	hideMenu.classList.toggle('first-screen_navmenu__show');
	hideMenu.classList.toggle('first-screen_navmenu__hide');
}
