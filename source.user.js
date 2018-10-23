// ==UserScript==
// @name         New Reddit Remover
// @namespace    http://tampermonkey.net/
// @version      1.1
// @description  Redirects from New Reddit to Old Reddit.
// @author       You
// @match        <$URL$>
// @grant        none
// @include https://www.reddit.com/*
// ==/UserScript==

var old = "HTTPS://old.reddit.com";
var pn = window.location.pathname;

var redirect = old + "/" + pn;
window.location.replace(redirect);
