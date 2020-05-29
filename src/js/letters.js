/* ==========================================================================
   Intro letter animation
   ========================================================================== */

(function () {

	var	isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);	

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
})();



