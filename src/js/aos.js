/* initialize Animate on Screen */
var AOS = require('aos');

function initAos() {
    AOS.init();
}

/* start AOS when page has loaded */
window.onload = initAos;