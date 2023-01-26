
var helpBtn = document.getElementById("help_btn");
var slydoBtn = document.getElementById("slydo_btn");
var wazikiBtn = document.getElementById("waziki_btn");
const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]
const message = document.getElementById('message');
const counter = document.getElementById('counter');


if (!navigator.serviceWorker.controller) {
    navigator.serviceWorker.register("serviceWorker.js").then(function (reg) {
        console.log("Service worker has been registered for scope: " + reg.scope);
    });
}



slydoBtn.addEventListener('click', function () {
    var url = "https://play.google.com/store/apps/details?id=com.slydo.slydo";
    window.open(url, "_blank");
});



wazikiBtn.addEventListener('click', function () {
    var url = "https://apps.apple.com/cy/app/waziki/id1543251589";
    window.open(url, "_blank");
});




helpBtn.addEventListener('click', function () {
    var url = "https://play.google.com/store/apps/details?id=com.help_customer.help_customer";
    window.open(url, "_blank");
});


toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})




var max_value = 500;

message.addEventListener('input', function () {


    var currentCount = max_value - message.value.length;
    console.log(currentCount);

    counter.textContent = `${currentCount} characters remaining`;

});

