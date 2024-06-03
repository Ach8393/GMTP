// hide and slide code //

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if(entry.isIntersecting){ entry.target.classList.add('show');}
        else{entry.target.classList.remove('show')}
    });
});
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

// hide and slide code //

// only hide code //

const observerTwo = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if(entry.isIntersecting){ entry.target.classList.add('showT');}
        else{entry.target.classList.remove('showT')}
    });
});
const hiddenElementsTwo = document.querySelectorAll('.hiddenT');
hiddenElementsTwo.forEach((el) => observerTwo.observe(el));

// only hide code //

//JAVASCRIPT FOR TOGGLE MENU ON SMALLER DEVICES//

var navLinks=document.getElementById('navLinks');
    function showMenu(){
        navLinks.style.right="0"
    }
    function hideMenu(){
        navLinks.style.right="-120px"
    }
