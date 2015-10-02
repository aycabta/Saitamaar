// ==UserScript==
// @name        Saitamaar
// @namespace   Saitamaar
// @description Applies `AA' font to elements what is `AAish'
// @version     0.0.1
// @grant       GM_registerMenuCommand
// ==/UserScript==

(function() {
  GM_registerMenuCommand("Saitamaar", function() {
    var e = document.createElement('script');
    e.setAttribute('src','http://aycabta.github.io/Saitamaar/Saitamaar.js');
    e.setAttribute('charset','utf-8');
    document.getElementsByTagName('head')[0].appendChild(e);
  });
})();

