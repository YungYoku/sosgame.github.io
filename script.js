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
if (whatIsItPos < 600) {
  whatIsItLeft.style.opacity = "1";
  whatIsItLeft.style.transform = "translateY(0)";
  if(window.innerWidth - 27 < 1150) {
    whatIsItRight.style.opacity = "1";
    whatIsItRight.style.transform = "translateY(-180px)";
  } else {
    whatIsItRight.style.opacity = "1";
    whatIsItRight.style.transform = "translateY(-150px)";
  }
}

if (whatIsItPos < -400) {
  specialsOpacity.style.opacity = "1";
  specialsOpacity.style.transform = "translateY(0)";
}
if (whatIsItPos < -1400) {
  requirementsH3.style.opacity = "1";
  requirementsH3.style.transform = "translateY(0)";
  requirementsH2.style.opacity = "1";
  requirementsH2.style.transform = "translateY(0)";
}
if (whatIsItPos < -1700) {
  requirementsInfo.style.opacity = "1";
  requirementsInfo.style.transform = "translateY(0)";
}
if (whatIsItPos < -2400) {
  quotesLeft.style.opacity = "1";
  quotesLeft.style.transform = "translateY(0)";
  quotesRight.style.opacity = "1";
  quotesRight.style.transform = "translateY(0)";
}
if (whatIsItPos < -3500) {
  newsletterFlex.style.opacity = "1";
  newsletterFlex.style.transform = "translateY(0)";
}


window.addEventListener('scroll', function () {
  let whatIsItPos = whatIsIt.getBoundingClientRect().top + document.body.scrollTop;
  console.log(whatIsItPos);
  if (whatIsItPos < 600) {
    whatIsItLeft.style.opacity = "1";
    whatIsItLeft.style.transform = "translateY(0)";
    if(window.innerWidth < 1150) {
      whatIsItRight.style.opacity = "1";
      whatIsItRight.style.transform = "translateY(-180px)";
    } else {
      whatIsItRight.style.opacity = "1";
      whatIsItRight.style.transform = "translateY(-150px)";
    }
  }
  if (whatIsItPos < -400) {
    specialsOpacity.style.opacity = "1";
    specialsOpacity.style.transform = "translateY(0)";
  }
  if (whatIsItPos < -1400) {
    requirementsH3.style.opacity = "1";
    requirementsH3.style.transform = "translateY(0)";
    requirementsH2.style.opacity = "1";
    requirementsH2.style.transform = "translateY(0)";
  }
  if (whatIsItPos < -1700) {
    requirementsInfo.style.opacity = "1";
    requirementsInfo.style.transform = "translateY(0)";
  }
  if (whatIsItPos < -2400) {
    quotesLeft.style.opacity = "1";
    quotesLeft.style.transform = "translateY(0)";
    quotesRight.style.opacity = "1";
    quotesRight.style.transform = "translateY(0)";
  }
  if (whatIsItPos < -3500) {
    newsletterFlex.style.opacity = "1";
    newsletterFlex.style.transform = "translateY(0)";
  }
});

let whatIsItPic1 = document.querySelector("#whatIsIt__pic1");
let whatIsItPic2 = document.querySelector("#whatIsIt__pic2");
let whatIsItPic3 = document.querySelector("#whatIsIt__pic3");
let whatIsItPic4 = document.querySelector("#whatIsIt__pic4");

let whatIsItPics = [whatIsItPic1, whatIsItPic2, whatIsItPic3, whatIsItPic4];

let canOrNot = true;
let pic1 = 0, pic2 = 1, pic3 = 2, pic4 = 3;
function slider() {
  if (canOrNot) {
    canOrNot = false;

    arrowJump();

    whatIsItPics[pic1].style.opacity = "0";

    whatIsItPics[pic2].style.zIndex = "5";
    whatIsItPics[pic2].style.transform = "translateX(0)";
    whatIsItPics[pic2].style.width = "70%";

    whatIsItPics[pic3].style.zIndex = "4";
    whatIsItPics[pic3].style.transform = "translateX(30%)";
    whatIsItPics[pic3].style.width = "60%";

    whatIsItPics[pic4].style.zIndex = "3";
    whatIsItPics[pic4].style.transform = "translateX(70%)";
    whatIsItPics[pic4].style.width = "50%";

    setTimeout(() => {
      arrowJumpHide();
      whatIsItPics[pic1].style.transition = "0";
      whatIsItPics[pic1].style.display = "none";
    }, 500);
    setTimeout(() => {
      whatIsItPics[pic1].style.zIndex = "2";
      whatIsItPics[pic1].style.width = "50%";
      whatIsItPics[pic1].style.transform = "translateX(70%)";
      whatIsItPics[pic1].style.opacity = "1";
    }, 550);
    setTimeout(() => {
      whatIsItPics[pic1].style.display = "inline";
      whatIsItPics[pic1].style.transition = "all 0.5s";
      pic1++;
      pic2++;
      pic3++;
      pic4++;
      pic1 %= 4;
      pic2 %= 4;
      pic3 %= 4;
      pic4 %= 4;
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




let headerMenu = document.querySelector("#header__top__div__menu");
let headerBtn = document.querySelector("#header__top__div__btn");
let btnBlock1 = document.querySelector("#header__top__div__btn__block1");
let btnBlock2 = document.querySelector("#header__top__div__btn__block2");
let btnBlock3 = document.querySelector("#header__top__div__btn__block3");


let showHide = false;
function showHideMenu() {
  if(!showHide) {
    headerMenu.style.transform = "translate(300px, -20px)";
    showHide = true;
    setTimeout(() => {
      headerBtn.style.opacity = "0";
      btnBlock1.style.backgroundColor = "black";
      btnBlock2.style.backgroundColor = "black";
      btnBlock3.style.backgroundColor = "black";
      btnBlock3.style.marginRight = "10px";
      btnBlock3.style.marginLeft = "0";
    }, 100);
    setTimeout(() => {
      headerBtn.style.opacity = "1";
      headerBtn.style.zIndex = "10";
    }, 300);
  } else {
    headerBtn.style.transition = "0";
    setTimeout(() => {
      headerBtn.style.opacity = "0";
      btnBlock1.style.backgroundColor = "white";
      btnBlock2.style.backgroundColor = "white";
      btnBlock3.style.backgroundColor = "white";
      btnBlock3.style.marginLeft = "10px";
      btnBlock3.style.marginRight = "0";
    }, 100);
    setTimeout(() => {
      headerMenu.style.transform = "translate(680px, -20px)";
    }, 200);
    setTimeout(() => {
      headerBtn.style.transition = "all 0.3s";
      headerBtn.style.opacity = "1";
      headerBtn.style.zIndex = "0";
    }, 400);
    showHide = false;
  }
}

function btn3BlockShow() {
  if(!showHide) {
    btnBlock3.style.marginLeft = "0";
    btnBlock3.style.marginRight = "0";
  }
}
function btn3BlockHide() {
  if(!showHide) {
    btnBlock3.style.marginLeft = "10px";
    btnBlock3.style.marginRight = "0";
  }
}
