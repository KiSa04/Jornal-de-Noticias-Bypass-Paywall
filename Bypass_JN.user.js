// ==UserScript==
// @name         JN Bypass
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       Kisa
// @match        https://www.jn.pt/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=jn.pt
// @grant        none
// @donations    BTC: 3LfJ1TDbdSV6h8rLqyL3XcYtwVtaisNvKX
// @donations    ETH: 0x11b14d6ee8148652b91cc4361bfabfbb0c95f536
// ==/UserScript==

(function() {
    'use strict';
     window.onload = function() {
         //Remove a paywall principal
        let paywall = document.querySelector('.t-article-content');
            paywall.setAttribute("style", "display: none;");
         // Restaura a visibilidade completa da noticia
        let link = document.querySelector('.t-article-content');
            link.setAttribute("style", "transform: none; box-shadow: none; height: auto");
         //Remove a paywall invisível que cobre o fundo da noticia
        let paywall2 = document.querySelector('.t-paywall-1');
            paywall2.setAttribute("style", "display: none;");
         //Remove o anti-adblock
        var div = document.getElementsByClassName("fc-close");
        div[0].click();
    }
})();