
(function () {

    var AOS = require('aos');
    var body = document.querySelector('body'),
    isRevealed = 'is-revealed';

    function init() {
        // When window is loaded, hide revealer
        body.classList.add(isRevealed);
        // Initialize Animate on Screen
        AOS.init();
    }
    window.onload = init;
})();