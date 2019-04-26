// Copyright (c) 2019 by Heather (https://codepen.io/hbrok/pen/rrBRmj)

/*
 * Web Font Loader:
 * https://github.com/typekit/webfontloader
 */

// TODO: Make sure to draw a diagram that shows how the
// CSS, HTML, and JavaScript are linked together

// Define which HTML attributes are subject to change
var body = document.querySelector('body');
var fontSelect = document.querySelectorAll('[data-font]');

// Load a Google font by name
var loadFont = function(font) {
  WebFont.load({
    google: {
      families: [font]
    }
  });
};

// Add an event listener for each button
// When a button is clicked, get the font name, load the font, and set the new font family
for (var i = 0; i < fontSelect.length; i++) {
  fontSelect[i].addEventListener('click', function() {
    var font = this.getAttribute('data-font');
    loadFont(font);
    body.style.fontFamily = font;
  });
}
