var modal = document.querySelector(".modal")
var utama = document.querySelector(".utama")
var container = document.querySelector(".container")

var uname = "asd"
var pass = "asd"

var ids = document.querySelector("form #ids")
var pws = document.querySelector("form #pws")


function aut() {

    if (ids == uname && pws == pass) {
        utama.style.display = "block";
        container.style.display = "none";
        console.log("sukses")
    } else {
        window.alert("Akun Salah !!")
    }
}
