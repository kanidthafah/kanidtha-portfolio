//Sidebar
const sidebar = document.querySelector(".sidebar")

function showSidebar() {
    sidebar.style.display = "block"
}

function hideSidebar() {
    sidebar.style.display = "none"
}

window.addEventListener('scroll', function () {
    const sidebarScroll = document.querySelector('.sidebarScroll');
    const scrollPosition = window.scrollY;

    sidebarScroll.style.transform = `translateY(${scrollPosition}px)`;
});

// This function about when scroll navbar background is change from transparent to has bgColor
function changeNavbarBg() {
    const navbar = document.getElementById('navbar');
    const scroll = window.scrollY

    if (scroll > 60) {
        navbar.classList.add('navbarBg');
    } else {
        navbar.classList.remove('navbarBg');
    }
}

window.addEventListener('scroll', function () {
    changeNavbarBg()
});

window.addEventListener('load', function () {
    changeNavbarBg()
});

// Scroll transition js code from: https://codepen.io/alvarotrigo/pen/XWaYRKK

function reveal() {
    let reveals = document.querySelectorAll(".reveal");

    for (let i = 0; i < reveals.length; i++) {
        let windowHeight = window.innerHeight;
        let elementTop = reveals[i].getBoundingClientRect().top;
        let elementVisible = 100;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}

window.addEventListener("scroll", reveal);

