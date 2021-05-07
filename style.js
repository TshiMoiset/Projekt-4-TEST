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

let links = document.querySelectorAll("a");
let currentPage = "About";

links.forEach(link => {
    link.addEventListener("click", clickedLink);
});

function clickedLink(event) {
    links.forEach(link => {
        link.removeAttribute("data-current");
    });
    currentPage = event.target.innerHTML;
    event.target.setAttribute("data-current", true);
    
}

var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("slides");
    var text = document.getElementsByClassName("text");
    var slides2 = document.getElementsByClassName("slides2");
    var text2 = document.getElementsByClassName("text2");
    var slides3 = document.getElementsByClassName("slides3");
    var text3 = document.getElementsByClassName("text3");
    var slides4 = document.getElementsByClassName("slides4");
    var text4 = document.getElementsByClassName("text4");
    var slides5 = document.getElementsByClassName("slides5");
    var text5 = document.getElementsByClassName("text5");
    var slides6 = document.getElementsByClassName("slides6");
    var text6 = document.getElementsByClassName("text6");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
        slides2[i].style.display = "none";  
        slides3[i].style.display = "none";  
        slides4[i].style.display = "none";  
        slides5[i].style.display = "none";  
        slides6[i].style.display = "none";  
        text[i].style.opacity = "0.2";  
        text2[i].style.opacity = "0.2";
        text3[i].style.opacity = "0.2";
        text4[i].style.opacity = "0.2";
        text5[i].style.opacity = "0.2";
        text6[i].style.opacity = "0.2";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";  
    slides2[slideIndex-1].style.display = "block"; 
    slides3[slideIndex-1].style.display = "block"; 
    slides4[slideIndex-1].style.display = "block"; 
    slides5[slideIndex-1].style.display = "block"; 
    slides6[slideIndex-1].style.display = "block"; 
    text[slideIndex-1].style.opacity = "1";  
    text2[slideIndex-1].style.opacity = "1";
    text3[slideIndex-1].style.opacity = "1";
    text4[slideIndex-1].style.opacity = "1";
    text5[slideIndex-1].style.opacity = "1";
    text6[slideIndex-1].style.opacity = "1";
    setTimeout(showSlides, 6000);
}

[
    document.querySelector(".next")
].forEach((item) => {
    item.addEventListener("click", (event) => {
    document.querySelector(".slideshow-container").classList.toggle("disactive");
    document.querySelector(".slideshow-container-next").classList.toggle("active");
    });
});

[
    document.querySelector(".next2")
].forEach((item) => {
    item.addEventListener("click", (event) => {
    document.querySelector(".slideshow-container-next").classList.toggle("active");
    document.querySelector(".slideshow-container-next2").classList.toggle("active");
    });
});


[
    document.querySelector(".next3")
].forEach((item) => {
    item.addEventListener("click", (event) => {
    document.querySelector(".slideshow-container-next2").classList.toggle("active");
    document.querySelector(".slideshow-container-next3").classList.toggle("active");
    });
});

[
    document.querySelector(".next4")
].forEach((item) => {
    item.addEventListener("click", (event) => {
    document.querySelector(".slideshow-container-next3").classList.toggle("active");
    document.querySelector(".slideshow-container-next4").classList.toggle("active");
    });
});


[
    document.querySelector(".next5")
].forEach((item) => {
    item.addEventListener("click", (event) => {
    document.querySelector(".slideshow-container-next4").classList.toggle("active");
    document.querySelector(".slideshow-container-next5").classList.toggle("active");
    });
});

[
    document.querySelector(".next6")
].forEach((item) => {
    item.addEventListener("click", (event) => {
    document.querySelector(".slideshow-container-next5").classList.toggle("active");
    document.querySelector(".slideshow-container").classList.toggle("disactive");
    });
});
// Prev
[
    document.querySelector(".prev")
].forEach((item) => {
    item.addEventListener("click", (event) => {
    document.querySelector(".slideshow-container").classList.toggle("disactive");
    document.querySelector(".slideshow-container-next5").classList.toggle("active");
    });
});

[
    document.querySelector(".prev6")
].forEach((item) => {
    item.addEventListener("click", (event) => {
    document.querySelector(".slideshow-container-next5").classList.toggle("active");
    document.querySelector(".slideshow-container-next4").classList.toggle("active");
    });
});


[
    document.querySelector(".prev5")
].forEach((item) => {
    item.addEventListener("click", (event) => {
    document.querySelector(".slideshow-container-next4").classList.toggle("active");
    document.querySelector(".slideshow-container-next3").classList.toggle("active");
    });
});

[
    document.querySelector(".prev4")
].forEach((item) => {
    item.addEventListener("click", (event) => {
    document.querySelector(".slideshow-container-next3").classList.toggle("active");
    document.querySelector(".slideshow-container-next2").classList.toggle("active");
    });
});


[
    document.querySelector(".prev3")
].forEach((item) => {
    item.addEventListener("click", (event) => {
    document.querySelector(".slideshow-container-next2").classList.toggle("active");
    document.querySelector(".slideshow-container-next").classList.toggle("active");
    });
});

[
    document.querySelector(".prev2")
].forEach((item) => {
    item.addEventListener("click", (event) => {
    document.querySelector(".slideshow-container-next").classList.toggle("active");
    document.querySelector(".slideshow-container").classList.toggle("disactive");
    });
});
