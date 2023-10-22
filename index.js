var x = window.matchMedia("(max-width: 470px)")

function dropdown() {
    if (x.matches) {
        if (document.getElementById("dropdown").style.display == "flex") {
            document.getElementById("dropdown").style.display = "none"
        } 
        else {
            document.getElementById("dropdown").style.display = "flex"
        }
    }
}