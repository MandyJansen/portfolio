/* ==========================================================================
   Slide menu
   ========================================================================== */

   var slideMenuButton = document.querySelector('.js-slideMenuButton');
   var slideNav = document.querySelector('.slideNav');
   var navItem = document.querySelector('.js-navItem');
   var body = document.querySelector('body');
   var hasActiveMenu = 'has-activeMenu';
	
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
		// 4. When nav item gets clicked, close menu
		navListItems[i].addEventListener('click', function() {
			removeHasActiveMenu();
		})
	}

	//  Function to remove .has-activeMenu from body
	function removeHasActiveMenu() {
		body.classList.remove('has-activeMenu');
	}

/* ==========================================================================
   Intro letter animation
   ========================================================================== */

var mobileDevices = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

if (isMobile) {
	// Letters are not moving
} else {
	/* declare the letters */
	var elems = document.getElementsByClassName("letter");

	/*loop trough all the letters */
	Array.from(elems).forEach(v => v.addEventListener('mouseover', function() {

		/* add hover class only to the one that's hovered */
		this.classList.add('hover');

		/*when cursor leaves the letter, remove the hover class after 1.5 seconds*/
		this.addEventListener("mouseout", function() {

		/* variable to access 'this' in setTimeout function */
			var x = this;

			setTimeout(function(){ 
				x.classList.remove('hover');
			}, 1500);
		})
	}));
}

