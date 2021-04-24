let y = window.matchMedia("(max-width: 768px)")
let y2 = window.matchMedia("(max-width: 568px)")

function openNavbar() {
    document.getElementById("closeButoon").style.display = "flex";
    document.getElementById("hamburgerNavbarLinks").style.display = "flex";
    document.querySelector("body").classList.toggle("active");

    if (y2.matches) {
        document.getElementById("hamburgerNavbarLinks").style.width = "100%";
    } else if (y.matches) {
        document.getElementById("hamburgerNavbarLinks").style.width = "60%";
        document.querySelector("main").style.opacity = "0.4";
        document.querySelector("main").style.backgroundColor = "rgba(0,0,0,0.4)"
    }
}

let x = window.matchMedia("(max-width: 768px)")

function closeNavbar() {
    document.getElementById("hamburgerNavbarLinks").style.width = "0%";
    document.getElementById("closeButoon").style.display = "none";
    document.getElementById("hamburgerButton").style.display = "none"; 
    document.querySelector("body").classList.toggle("active");

    document.querySelector("main").style.opacity = "1";
    document.querySelector("main").style.backgroundColor = "rgba(0,0,0,0)";
    
    if (x.matches) {
        document.getElementById("hamburgerButton").style.display = "flex";
        
        
    }
    else {
        document.getElementById("hamburgerButton").style.display = "none";
    }

}