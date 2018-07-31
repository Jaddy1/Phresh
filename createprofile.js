// x = document.getElementsByClassName('menu-icon');
// x[0].addEventListener('click', function() {
// 	toggleMenu();
// 	toggleMenuLink();
// 	toggleX();
// });

function toggleMenu() {
	document.getElementById('upper-slide').classList.toggle('upper-slide-right');
	document.getElementById('slide').classList.toggle('slide-right');
}

function toggleMenuLink() {
	document.getElementById("links").classList.toggle('slide-in');
}

function toggleX() {
	x[0].classList.toggle('hover');
}
		