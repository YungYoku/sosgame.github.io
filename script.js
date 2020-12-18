let whatIsIt = document.querySelector('#whatIsIt');
let whatIsItLeft = document.querySelector('#whatIsIt__left');
let whatIsItRight = document.querySelector('#whatIsIt__right');
let specialsOpacity = document.querySelector('#specials__opacity');
let requirementsH3 = document.querySelector('#requirements__h3');
let requirementsH2 = document.querySelector('#requirements__h2');
let requirementsInfo = document.querySelector('#requirements__info');
let quotesLeft = document.querySelector('#quotes__left');
let quotesRight = document.querySelector('#quotes__right');
let newsletterFlex = document.querySelector('#newsletter__flex');

let whatIsItPos = whatIsIt.getBoundingClientRect().top + document.body.scrollTop;
  if(whatIsItPos < 500) {
    whatIsItLeft.style.opacity = "1";
    whatIsItLeft.style.transform = "translateY(0)";
    whatIsItRight.style.opacity = "1";
    whatIsItRight.style.transform = "translateY(-250px)";
  }
  console.log(whatIsItPos);
  if(whatIsItPos < -900) {
    specialsOpacity.style.opacity = "1";
    specialsOpacity.style.transform = "translateY(0)";
  }
  if(whatIsItPos < -1950) {
    requirementsH3.style.opacity = "1";
    requirementsH3.style.transform = "translateY(0)";
    requirementsH2.style.opacity = "1";
    requirementsH2.style.transform = "translateY(0)";
  }
  if(whatIsItPos < -2150) {
    requirementsInfo.style.opacity = "1";
    requirementsInfo.style.transform = "translateY(0)";
  }
  if(whatIsItPos < -3000) {
    quotesLeft.style.opacity = "1";
    quotesLeft.style.transform = "translateY(0)";
    quotesRight.style.opacity = "1";
    quotesRight.style.transform = "translateY(0)";
  }
  if(whatIsItPos < -4250) {
    newsletterFlex.style.opacity = "1";
    newsletterFlex.style.transform = "translateY(0)";
  }


window.addEventListener('scroll', function() {
  let whatIsItPos = whatIsIt.getBoundingClientRect().top + document.body.scrollTop;
  if(whatIsItPos < 500) {
    whatIsItLeft.style.opacity = "1";
    whatIsItLeft.style.transform = "translateY(0)";
    whatIsItRight.style.opacity = "1";
    whatIsItRight.style.transform = "translateY(-250px)";
  }
  if(whatIsItPos < -900) {
    specialsOpacity.style.opacity = "1";
    specialsOpacity.style.transform = "translateY(0)";
  }
  if(whatIsItPos < -1950) {
    requirementsH3.style.opacity = "1";
    requirementsH3.style.transform = "translateY(0)";
    requirementsH2.style.opacity = "1";
    requirementsH2.style.transform = "translateY(0)";
  }
  if(whatIsItPos < -2150) {
    requirementsInfo.style.opacity = "1";
    requirementsInfo.style.transform = "translateY(0)";
  }
  if(whatIsItPos < -3000) {
    quotesLeft.style.opacity = "1";
    quotesLeft.style.transform = "translateY(0)";
    quotesRight.style.opacity = "1";
    quotesRight.style.transform = "translateY(0)";
  }
  if(whatIsItPos < -4250) {
    newsletterFlex.style.opacity = "1";
    newsletterFlex.style.transform = "translateY(0)";
  }
});

let whatIsItPic1 = document.querySelector("#whatIsIt__pic1");
let whatIsItPic2 = document.querySelector("#whatIsIt__pic2");
let whatIsItPic3 = document.querySelector("#whatIsIt__pic3");
let whatIsItPic4 = document.querySelector("#whatIsIt__pic4");

let whatIsItPics = new Array(whatIsItPic1, whatIsItPic2, whatIsItPic3,whatIsItPic4);

let canOrNot = true;
let i = 0;
let pic1=0, pic2=1, pic3=2, pic4=3;
function slider() {
  if(canOrNot) {
    canOrNot = false;

    arrowJump();

    whatIsItPics[pic1].style.opacity = "0";

    whatIsItPics[pic2].style.zIndex = "5";
    whatIsItPics[pic2].style.transform = "translateX(0)";
    whatIsItPics[pic2].style.width = "60%";

    whatIsItPics[pic3].style.zIndex = "4";
    whatIsItPics[pic3].style.transform = "translateX(35%)";
    whatIsItPics[pic3].style.width = "50%";

    whatIsItPics[pic4].style.zIndex = "3";
    whatIsItPics[pic4].style.transform = "translateX(85%)";
    whatIsItPics[pic4].style.width = "40%";

    setTimeout(() => {
      arrowJumpHide();
      whatIsItPics[pic1].style.transition = "0";
      whatIsItPics[pic1].style.display = "none";
    }, 500);
    setTimeout(() => {
      whatIsItPics[pic1].style.zIndex = "2";
      whatIsItPics[pic1].style.width = "40%";
      whatIsItPics[pic1].style.transform = "translateX(85%)";
      whatIsItPics[pic1].style.opacity = "1";
    }, 550);
    setTimeout(() => {
      whatIsItPics[pic1].style.display = "inline";
      whatIsItPics[pic1].style.transition = "all 0.5s";
      pic1++;
      pic2++;
      pic3++;
      pic4++;
      pic1%=4;
      pic2%=4;
      pic3%=4;
      pic4%=4;
      canOrNot = true;
    }, 600);
  }
}

let arrow = document.querySelector("#whatIsIt__right__scroll");

function arrowJump() {
  arrow.style.animation = "arrowJump 0.5s";
}
function arrowJumpHide() {
  arrow.style.animation = "0";
}