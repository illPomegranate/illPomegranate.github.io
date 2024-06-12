let slideIndex = 0;
function slideshow(){
    const slides = document.getElementsByClassName("slide");

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }

    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    slides[slideIndex - 1].style.display = "block";  

    setTimeout(slideshow, 3000);

    
}
document.addEventListener("DOMContentLoaded", slideshow);


document.addEventListener("DOMContentLoaded", function() {
    const navbar = document.getElementById('navbar');
    if (navbar) {
        var navigationbar = navbar.offsetTop;
        function navbarTop() {
            if (window.scrollY >= navigationbar) {
                navbar.classList.add('sticky');
            } else {
                navbar.classList.remove('sticky');
            }
        }

        window.addEventListener('scroll', navbarTop);
    } else {
        console.error("Navbar element not found!");
    }
});

function toggleMenu() {
    var navLinks = document.querySelector('.nav-links');
    navLinks.style.display = navLinks.style.display === 'none' ? 'flex' : 'none';
}

let button = document.getElementsByClassName("button");
function fakeahhlink(){
    if(button){
        alert("Link doesn't exist");
    }
    
}