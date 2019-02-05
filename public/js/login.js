'use strict';

console.log('login')

var registered;

var $linkCreateAcc = $("#linkCreateAcc");
var $linkLogin = $("#linkLogin");


function toggle() {
    console.log('test')
    $linkCreateAcc.closest(".mdl-card").toggleClass("hidden");
    $linkLogin.closest(".mdl-card").toggleClass("hidden");
}


$linkCreateAcc.on("click", toggle);
$linkLogin.on("click", toggle);