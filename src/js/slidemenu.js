





/* ==========================================================================
   Slide menu
   ========================================================================== */

   (function () {

	var slideMenuButton = document.querySelector('.js-slideMenuButton'),
	slideNav = document.querySelector('.slideNav'),
	navItem = document.querySelector('.js-navItem'),
	body = document.querySelector('body'),
	hasActiveMenu = 'has-activeMenu';

	// 1. When .js-slideMenuButton is clicked, add .has-activeMenu to body
	slideMenuButton.addEventListener('click', function() {

		// check to see if body already has .has-activeMenu, if so remove it when button gets clicked again to close the menu
		if (body.classList.contains(hasActiveMenu)) {
			removeHasActiveMenu();

		// else add class .has-activeMenu to body 
		} else {
			body.classList.add(hasActiveMenu);
		}
	
	});

	// 2. when clicked anywhere on the page
	window.addEventListener('click', function(e) {
		// that is NOT .js-slideMenuButton or the slideMenu itself, remove .has-activeMenu from body
		if (!slideMenuButton.contains(e.target) && !slideNav.contains(e.target) ){
			removeHasActiveMenu();
		} 
	});

	// 3. Get all the links in the nav list
	var navList = document.querySelector('.js-navigationList'),
		navListItems = navList.getElementsByTagName('a');
	
	for (var i=0; i < navListItems.length; i++) {

		// go to corresponding section (instead of smooth scroll)
		// and so that it doesnt change the url

		// remove .has-ActiveMenu class when it has reached section

		// add active class to active section

		// 4. When nav item gets clicked, close menu
		navListItems[i].addEventListener('click', function() {
			removeHasActiveMenu();
		})
	}

	// add active state to menu item on scroll

	//  Function to remove .has-activeMenu from body
	function removeHasActiveMenu() {
		body.classList.remove('has-activeMenu');
	}
})();