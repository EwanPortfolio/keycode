let heading = document.getElementById("heading")
let overlay = document.getElementById("overlay")
let alert = document.getElementById("alert")
let keyValue = document.getElementById("keyValue")
let keyCode = document.getElementById("keyCode")
let charCode = document.getElementById("charCode")


document.addEventListener('keypress', (event) => {
    alert.textContent=event.keycode
    keyValue.textContent= event.key
    keyCode.textContent= event.code
    charCode.textContent= event.charCode

});

