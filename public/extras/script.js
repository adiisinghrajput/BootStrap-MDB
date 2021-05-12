/**
  Javascript classes.
 **/


/**  Nav background changes on windows load */
const navBackground = document.getElementById('navContainer');
window.onload = function(){
  navBackground.style.backgroundColor = "#ffffff"
}
/**  Nav background changes on windows load */

/** typewriting effect in hero section**/
var type = new Typed('#typed',{
  stringsElement :'#typed-strings',
  typeSpeed :150,
  backSpeed :100,
  loop :true,
  loopCount: Infinity,
})
/** typewriting effect in hero section**/


/**  Back to top button starts */
  backToTopButton = document.getElementById("preloader");

  // When the user scrolls down 20px from the top of the document, show the button
  window.onscroll = function() {scrollFunction()};

  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      backToTopButton.style.display = "block";
      document.getElementById('navContainer').style.backgroundColor = "#0d63fd"
      document.getElementById('navTogglee').style.backgroundColor ="none"
    } else {
      backToTopButton.style.display = "none";
      document.getElementById('navContainer').style.backgroundColor = "#ffffff"     
    }
  }

  // When the user clicks on the button, scroll to the top of the document
  function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }
/**  Back to top button ends */


/** Contact validation starts from here
const userName = document.getElementById('inputName');
const mobile = document.getElementById('inputMobile');
const budget = document.getElementById('inputBudget');
const requriement = document.getElementById('inputServices');
const city = document.getElementById('inputCity');
const state = document.getElementById('inputState');
const sendButton = document.getElementById('sendMessage');

const nameError = document.getElementById('nameError');

 Contact validation end from here**/


