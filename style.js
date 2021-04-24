let screenSizex = window.matchMedia("(max-width: 768px)")
let screenSizey = window.matchMedia("(max-width: 568px)")

function openNavbar() {
    document.getElementById("closeButoon").style.display = "flex";  // Knappen crossbutton kommer att visas.
    document.getElementById("hamburgerNavbarLinks").style.display = "flex";     // Innehållet i hamburgerNavbarLinks visas.
    document.querySelector("body").classList.toggle("active");  // Koden gör så att amn inte kan skrolla när innehållet i hamburgerNavbarLinks visas

    if (screenSizey.matches) {  // Om skärmstorleken är 568px tar hamburgerNavbarLinks 100% av skärmen
        document.getElementById("hamburgerNavbarLinks").style.width = "100%";  
    } else if (screenSizex.matches) {
        document.getElementById("hamburgerNavbarLinks").style.width = "60%";    // Om skärmstorleken är 768px tar hamburgerNavbarLinks 60% av skärmen
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