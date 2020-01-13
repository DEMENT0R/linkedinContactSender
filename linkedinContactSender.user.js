// ==UserScript==
// @name         linkedin contact sender
// @namespace    linkedinContactSender
// @description  linkedin.com
// @icon         https://static-exp1.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca
// @version      0.1.3
// @author       DEMENT0R
// @downloadURL  https://github.com/DEMENT0R/linkedinContactSender/raw/master/linkedinContactSender.user.js
// @updateURL    https://github.com/DEMENT0R/linkedinContactSender/raw/master/linkedinContactSender.user.js
// @license      MIT
// @noframes
// @match        https://*.linkedin.cn/search*
// @match        https://*.linkedin.cn/mynetwork/*
// @match        https://*.linkedin.com/search*
// @match        https://*.linkedin.com/mynetwork/*
// @require      http://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_listValues
// @grant        GM_deleteValue
// @grant        GM_addStyle
// ==/UserScript==

(function() {
    'use strict';

    var invites_quantity =  localStorage.getItem('invites_quantity');
    var current_quantity = 0;
    localStorage.setItem('current_quantity', current_quantity);

    var $ = window.jQuery;

    setInterval(function(){
        // search
        if($("button").is(":contains('Установить контакт')")){
            //alert($("button").is(":contains('Установить контакт')"));
            $("button:contains('Установить контакт')")[0].click();
            current_quantity++;
            invites_quantity++;
            localStorage.setItem('current_quantity', current_quantity);
            localStorage.setItem('invites_quantity', invites_quantity);
            doAccept();
        } else {
            $("button:contains('Далее')")[0].click();
        }
    }, 4000);
    function doAccept(){
        setTimeout(function(){
            $("button:contains('Отправить сейчас')").click();
        }, 1000);
    }

})();
