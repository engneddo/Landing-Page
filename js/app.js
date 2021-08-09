/**
 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 
 * Dependencies: None
 
 * JS Version: ES2015/ES6
 
 * JS Standard: ESlint
 
*/

/*
 * Define Global Variables
*/
const allSecs = document.querySelectorAll('section');
const myFragment = document.createDocumentFragment();
/*
 * End Global Variables
*/

//Begin Main Functions
 let createNav = ()=>{
  allSecs.forEach(currentSec=>{
  //Create list item  
  let newLi = document.createElement('li');
  //Get data-nav text
  let dataNav = currentSec.getAttribute('data-nav');
  //Create link in list item
  newLi.innerHTML=`<a href='#${currentSec.id}' class='menu__link'>${dataNav}</a>`;
  // Build menu 
  myFragment.appendChild(newLi);
  // Scroll to section on link click
  newLi.addEventListener('click', liEvent=>{
    liEvent.preventDefault();
    currentSec.scrollIntoView({block: 'end', inline: 'nearest'})
   })
  })
  // build the nav
  document.querySelector('#navbar__list').appendChild(myFragment);
}

//Scrolling Function
 let scrollEvent = ()=>{
  allSecs.forEach(currentSec=>{
  let myRect = currentSec.getBoundingClientRect();
  //Check Top Of Section's BoundingRect
  if(myRect.top > 0 && myRect.top < 200){
    // Add class 'your-active-class' to section when near top of viewport
    currentSec.classList.add('your-active-class');
    //Retrive All links In The Page
    const allLinks = document.querySelectorAll('a');
    allLinks.forEach(currentLink=>{
  (currentLink.textContent == currentSec.getAttribute('data-nav'))? currentLink.classList.add('Active') : currentLink.classList.remove('Active');
  })
  }
  else{
    //change current section class
    currentSec.classList.remove('your-active-class');
  }
})
}

/*
 * End Main Functions
 * Begin Events
*/
//Event Listner On Contents Load
document.addEventListener("DOMContentLoaded", createNav);
//Event Listner On Viewporst Scroll
window.addEventListener('scroll',scrollEvent);







