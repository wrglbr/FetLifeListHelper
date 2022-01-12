// ==UserScript==
// @name        FetLife List Helper
// @description Autoscroll to load full lists, highlight females
// @license     GPL-3.0-or-later
// @version     1.5.1
// @namespace   wrglbr
// @copyright wrglbr (https://openuserjs.org/users/wrglbr)
// @match       https://fetlife.com/users/*/friends
// @match       https://fetlife.com/users/*/following
// @match       https://fetlife.com/groups/*/members*
// @match       https://fetlife.com/p/*kinksters*
// @match       https://fetlife.com/events/*/rsvps*
// @resource    normalize4ab3de5 https://cdn.rawgit.com/necolas/normalize.css/4ab3de5bdd26b161c3c82a5a2f72df3e57a8e4bf/normalize.css#md5=fda27b856c2e3cada6e0f6bfeccc2067,sha1=734a72e6c28d4a3a870404fb4abf72723c754296,sha512=faa0766a27f822e530f9cd2d1f9c3b8989abeefe8027e14b52aaf6c1faf732cf633fa2062926613b487807db84a418754ee3ede81a3c1cb593940157d6f71c65
// @grant       GM_addStyle
// @grant       GM_setValue
// @grant       GM_getValue
// @grant       GM_getResourceText
// @grant       GM_xmlhttpRequest
// @updateURL https://openuserjs.org/meta/wrglbr/FetLife_List_Helper.meta.js
// @downloadURL https://openuserjs.org/install/wrglbr/FetLife_List_Helper.user.js
// ==/UserScript==
// ==OpenUserJS==
// @author wrglbr
// ==/OpenUserJS==
!function(){'use strict';var lastScrollHeight=0,something=function(){var executed=!1;return function(){var data=JSON.parse(sessionStorage.getItem('fl/relations')).relations,jso=JSON.stringify(data),oot='{"relations":'+jso.substring(jso.indexOf(":")+1),nomore=JSON.parse(oot).relations.noMore;executed||1==nomore&&(document.documentElement.scrollTop=0,executed=!0)}}();window.setInterval((function(){var sh=document.documentElement.scrollHeight;return sh!=lastScrollHeight?(lastScrollHeight=sh,document.documentElement.scrollTop=sh,function(){function callback(){!function($){var jQuery=$;jQuery(".lh-copy > .f6:contains('F')").each((function(){jQuery(this).parent().parent().parent().addClass("female").parent().parent().css("background-color","#1c0c4b").parent().parent().prependTo("div.flex.flex-wrap.nr1.nl1"),jQuery(this).css("color","white")})),jQuery(".female   div.f6.lh-copy.fw4.gray-300.nowrap.truncate:contains('Illinois')").each((function(){jQuery(this).parent().parent().parent().addClass("illinois").parent().css("background-color","#0d164a").parent().parent().prependTo("div.flex.flex-wrap.nr1.nl1"),jQuery(this).css("color","white")})),jQuery(".female   div.f6.lh-copy.fw4.gray-300.nowrap.truncate:contains('Minnesota')").each((function(){jQuery(this).parent().parent().parent().addClass("minnesota").parent().css("background-color","#0d164a").parent().parent().prependTo("div.flex.flex-wrap.nr1.nl1"),jQuery(this).css("color","white")})),jQuery(".female   div.f6.lh-copy.fw4.gray-300.nowrap.truncate:contains('Iowa')").each((function(){jQuery(this).parent().parent().parent().addClass("minnesota").parent().css("background-color","#0d164a").parent().parent().prependTo("div.flex.flex-wrap.nr1.nl1"),jQuery(this).css("color","white")})),jQuery(".female   div.f6.lh-copy.fw4.gray-300.nowrap.truncate:contains('Indiana')").each((function(){jQuery(this).parent().parent().parent().addClass("minnesota").parent().css("background-color","#0d164a").parent().parent().prependTo("div.flex.flex-wrap.nr1.nl1"),jQuery(this).css("color","white")})),jQuery(".female   div.f6.lh-copy.fw4.gray-300.nowrap.truncate:contains('Michigan')").each((function(){jQuery(this).parent().parent().parent().addClass("minnesota").parent().css("background-color","#0d164a").parent().parent().prependTo("div.flex.flex-wrap.nr1.nl1"),jQuery(this).css("color","white")})),jQuery(".female   div.f6.lh-copy.fw4.gray-300.nowrap.truncate:contains('Wisconsin')").each((function(){jQuery(this).parent().parent().parent().addClass("wisconsin").parent().css("background-color","#3a1456").parent().parent().prependTo("div.flex.flex-wrap.nr1.nl1"),jQuery(this).css("color","white")})),jQuery(".female   div.f6.lh-copy.fw4.gray-300.nowrap.truncate:contains('Appleton')").each((function(){jQuery(this).parent().parent().parent().addClass("appleton").parent().css("background-color","#561414").parent().parent().prependTo("div.flex.flex-wrap.nr1.nl1"),jQuery(this).css("color","white"),jQuery(".appleton button:contains('Following')").css("opacity","0.3")}))}(jQuery.noConflict(!0))}var s=document.createElement("script");s.src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js",s.addEventListener?s.addEventListener("load",callback,!1):s.readyState&&(s.onreadystatechange=callback);document.body.appendChild(s)}()):something()}),300)}();