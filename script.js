///////////////////////////////////TOGGLE MENU///////////////////////////////////////////////////////////////

const toggleMenu = document.querySelector('header div.iconMenu');
const showMenu = document.querySelector('header nav');


toggleMenu.addEventListener('click', () => {
    showMenu.classList.toggle('active');
    toggleMenu.classList.toggle('active');

});


////////////////////////////////////MODAL//////////////////////////////////////////////////////////////////////
const main = document.querySelector('main');
const modalShow = document.querySelector('.modalWrap');
const modalActive = document.querySelector('.modalWrap .modal');
const clouseModal = document.querySelector('.fa-times-circle');

clouseModal.addEventListener('click', () => {
    modalShow.classList.toggle('active');
    modalActive.classList.toggle('active');
    main.classList.toggle('blur');
});

////////////////////////SHOW IMG////////////////////////////////////////////////////////////////////////////////

const showPicture = () => {
    const windowHeight = window.innerHeight;
    const scrollValue = window.scrollY;
    const sectionFirst = document.querySelector('.firstSection');
    const photoMargaret = document.querySelector('.photo.margaret img');

    const sectionFirstFromTop = sectionFirst.offsetTop;
    const sectionFirstHeight = sectionFirst.offsetHeight;
    const photoMargaretHeight = photoMargaret.offsetHeight;


    if (scrollValue > sectionFirstFromTop + sectionFirstHeight + photoMargaretHeight - windowHeight * 2) {
        photoMargaret.classList.add('active');
    } else if (scrollValue < sectionFirstFromTop + sectionFirstHeight / 2 + photoMargaretHeight - windowHeight) {
        photoMargaret.classList.remove('active');

    }

    const secondSection = document.querySelector('.secondSection');
    const photoObama = document.querySelector('.photo.obama img');
    const secondSectionFromTop = secondSection.offsetTop;
    const photoObamaFromTop = photoObama.offsetTop;
    const photoObamaHeight = photoObama.offsetHeight;

    if (scrollValue > secondSectionFromTop + photoObamaFromTop + photoObamaHeight / 2 - windowHeight) {
        photoObama.classList.add('active');
    } else if (scrollValue < secondSectionFromTop + photoObamaFromTop + photoObamaHeight - windowHeight * 2) {
        photoObama.classList.remove('active');
    }
    const fourSection = document.querySelector('.fourSection');
    const alloAlloImg = document.querySelector('.alloallo img');
    const fourSectionFromTop = fourSection.offsetTop;
    const alloalloFromTop = alloAlloImg.offsetTop;
    const alloalloHeight = alloAlloImg.offsetHeight;

    if (scrollValue > fourSectionFromTop + alloalloFromTop + alloalloHeight - windowHeight) {
        alloAlloImg.classList.add('active');
    } else if (scrollValue < fourSectionFromTop + alloalloFromTop - alloalloHeight - windowHeight) {
        alloAlloImg.classList.remove('active');
    }


}
window.addEventListener('scroll', showPicture);


////////////////////////////////////////Scroll up anomation arrow//////////////////////////////////////////////////

let scrollTimer;
let scrollAnimationValue;
const startScroll = (e) => {
    e.preventDefault();
    scrollAnimationValue = window.scrollY;
    scrollTimer = setInterval(scrollStep, 25);
};

const scrollStep = () => {
    scrollAnimationValue -= 100;
    scrollTo(scrollTimer, scrollAnimationValue);

    if (scrollAnimationValue <= 0) {

        clearInterval(scrollTimer);
    }
};
const arrow = document.querySelector('header .arrow');
arrow.addEventListener('click', startScroll);

///////////////////SHOW ARROW UP/////////////////////////////////////////////////////////////////////////////////

const sectionHome = document.querySelector('section.home');
const sectionHomeFromTop = sectionHome.offsetTop;
const sectionHomeHeight = sectionHome.offsetHeight;
const arrowFas = document.querySelector('header .arrow .fas.active')
window.addEventListener('scroll', function (e) {
    const scrollValue = window.scrollY;
    const windowHeight = window.innerHeight;

    if (scrollValue >= windowHeight) {
        arrow.classList.add('active');
    } else {
        arrow.classList.remove('active');

    }
});