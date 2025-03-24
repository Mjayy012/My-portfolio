// Typewriter Effect
const texts = [
    "Web Designer",
    "Web Developer"
]
let speed  = 70;
const textElements = document.querySelector(".typewriter-text");
let textIndex = 0;
let charcterIndex = 0;
function typeWriter(){
    if (charcterIndex < texts[textIndex].length){
        textElements.innerHTML += texts[textIndex].charAt(charcterIndex);
        charcterIndex++;
        setTimeout(typeWriter, speed);
    }
    else{
        setTimeout(eraseText, 1000)
    }
}
function eraseText(){
    if(textElements.innerHTML.length > 0){
        textElements.innerHTML = textElements.innerHTML.slice(0,-1);
        setTimeout(eraseText, 50)
    }
    else{
        textIndex = (textIndex + 1) % texts.length;
        charcterIndex = 0;
        setTimeout(typeWriter, 500)
    }
}
window.onload = typeWriter


/*=============== CV DOWNLOAD ===============*/
document.getElementById("downloadCVBtn").addEventListener("click", () => {
    const link = document.createElement("a");
    link.href = "assets/img/Mark jay Bares - Resume.pdf"; // Replace with the actual CV path
    link.download = "Mark jay Bares - Resume.pdf"; // The name of the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});


/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader(){
    const header = document.getElementById('header')
    // When the scroll is greater than 80 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 80) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*=============== QUESTIONS ACCORDION ===============*/
const accordionItems = document.querySelectorAll('.questions__item')

accordionItems.forEach((item) =>{
    const accordionHeader = item.querySelector('.questions__header')

    accordionHeader.addEventListener('click', () =>{
        const openItem = document.querySelector('.accordion-open')

        toggleItem(item)

        if(openItem && openItem!== item){
            toggleItem(openItem)
        }
    })
})

const toggleItem = (item) =>{
    const accordionContent = item.querySelector('.questions__content')

    if(item.classList.contains('accordion-open')){
        accordionContent.removeAttribute('style')
        item.classList.remove('accordion-open')
    }else{
        accordionContent.style.height = accordionContent.scrollHeight + 'px'
        item.classList.add('accordion-open')
    }

}

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*=============== SHOW SCROLL UP ===============*/ 
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 400 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 400) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== DARK LIGHT THEME ===============*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2200,
    delay: 400,
    // reset: true
})

sr.reveal(`.home__data`)
sr.reveal(`.home__img`, {delay: 500})
sr.reveal(`.home__social`, {delay: 600})
sr.reveal(`.about__img, .contact__box`,{origin: 'left'})
sr.reveal(`.about__data, .contact__form`,{origin: 'right'})
sr.reveal(`.projects__card, .proj__card, .questions__group, .footer`,{interval: 100})



/*=============== MODAL ===============*/

const images1 = [
    "assets/img/project.JPG",
    "assets/img/project1.JPG",
    "assets/img/project2.JPG",
    "assets/img/project3.JPG"
];

const images2 = [
    "assets/img/training.JPG",
    "assets/img/training1.JPG",
    "assets/img/training2.JPG",
    "assets/img/training3.JPG"
];

let currentIndex1 = 0;
let currentIndex2 = 0;

const imageDisplay1 = document.getElementById("imageDisplay");
const imageDisplay2 = document.getElementById("imageDisplay2");

const nextBtn1 = document.getElementById("nextBtn1");
const nextBtn2 = document.getElementById("nextBtn2");

if (nextBtn1) {
    nextBtn1.addEventListener("click", () => {
        currentIndex1 = (currentIndex1 + 1) % images1.length;
        imageDisplay1.src = images1[currentIndex1];
    });
}

if (nextBtn2) {
    nextBtn2.addEventListener("click", () => {
        currentIndex2 = (currentIndex2 + 1) % images2.length;
        imageDisplay2.src = images2[currentIndex2];
    });
}
const modal = document.getElementById("modal"); // Assuming you have a modal with this ID
const openModal = document.getElementById("openModal");
const closeModal = document.getElementById("closeModal");

const modal1 = document.getElementById("modal1");
const openModal1 = document.getElementById("openModal1");
const closeModal1 = document.getElementById("closeModal1");

const modal2 = document.getElementById("modal2");
const openModal2 = document.getElementById("openModal2");
const closeModal2 = document.getElementById("closeModal2");

function openModalFn(modal) {
    modal.style.display = "flex";
}

function closeModalFn(modal) {
    modal.style.display = "none";
}


if (openModal) openModal.addEventListener("click", () => openModalFn(modal));
if (closeModal) closeModal.addEventListener("click", () => closeModalFn(modal));

if (openModal1) openModal1.addEventListener("click", () => openModalFn(modal1));
if (closeModal1) closeModal1.addEventListener("click", () => closeModalFn(modal1));

if (openModal2) openModal2.addEventListener("click", () => openModalFn(modal2));
if (closeModal2) closeModal2.addEventListener("click", () => closeModalFn(modal2));

window.addEventListener("click", (e) => {
    if (e.target === modal) closeModalFn(modal);
    if (e.target === modal1) closeModalFn(modal1);
    if (e.target === modal2) closeModalFn(modal2);
});

