
function openNavbar() {
    document.getElementById("hamburgerNavbarLinks").style.width = "100%";
    document.getElementById("closeButoon").style.display = "flex";
    document.getElementById("hamburgerNavbarLinks").style.display = "flex";
    document.querySelector("body").classList.toggle("active");
}

let x = window.matchMedia("(max-width: 768px)")

function closeNavbar() {
    document.getElementById("hamburgerNavbarLinks").style.width = "0%";
    document.getElementById("closeButoon").style.display = "none";
    document.getElementById("hamburgerButton").style.display = "none"; 
    document.querySelector("body").classList.toggle("active");
    
    if (x.matches) {
        document.getElementById("hamburgerButton").style.display = "flex";
        
        
    }
    else {
        document.getElementById("hamburgerButton").style.display = "none";
    }

}