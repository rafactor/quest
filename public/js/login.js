'use strict';

console.log('login')

var registered;

var $linkCreateAcc = $("#linkCreateAcc");
var $linkLogin = $("#linkLogin");
var $btnCancel = $(".quest-btn--cancel")


function toggle() {
    $linkCreateAcc.closest(".mdl-card").toggleClass("hidden");
    $linkLogin.closest(".mdl-card").toggleClass("hidden");
}

function backToHome(){
    window.location.href = '/';
}

$btnCancel.on("click", backToHome);
$linkCreateAcc.on("click", toggle);
$linkLogin.on("click", toggle);