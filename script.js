/*********************************
          BACKGROUND SECTION
**********************************/

backgrounds = ['/img/korea1920-0.jpg', '/img/korea1920-1.jpg', '/img/korea1920-2.jpg', '/img/korea1920-3.jpg', '/img/korea1920-4.jpg'];

document.documentElement.style.background = "url(" + backgrounds[0] + ") no-repeat ";
document.documentElement.style.backgroundPosition = "center center";
let i = 0;

function setBackgroundProperties() {
  document.documentElement.style.background = "url(" + backgrounds[i] + ") no-repeat ";
  document.documentElement.style.backgroundPosition = "center center";
};

function changeBackground() {
  if (i < backgrounds.length) {
    setBackgroundProperties();
  } else {
    i = 0;
    setBackgroundProperties();
  }
}
setInterval(function () {
  changeBackground();
  i++;
}, 10000);

/*********************************
          SUBMIT BUTTON SECTION
**********************************/

let inputWord0, inputWord1, wordsArray, arrayNumber;
wordsArray = [];

const SUBMIT_BUTTON = document.getElementById('submit');


SUBMIT_BUTTON.addEventListener('click', function () {

  // save data inputed by user to variables
  inputWord0 = document.getElementById('input-language0').value;
  inputWord1 = document.getElementById('input-language1').value;

  // clear both input fields
  document.getElementById('input-language0').value = '';
  document.getElementById('input-language1').value = '';

  // add saved data to the Array
  wordsArray.push(array = [inputWord0, inputWord1]);
})

/*********************************
        DRAW BUTTON SECTION
**********************************/

let drawedNumber, drawedWord;

const DRAW_BUTTON = document.getElementById('draw');
const DRAWED_ELEMENT = document.getElementById('drawed-text');


DRAWED_ELEMENT.style.fontSize = "2.5rem";
DRAWED_ELEMENT.style.alignSelf = "center";
DRAWED_ELEMENT.style.fontWeight = "bold";

DRAW_BUTTON.addEventListener('click', function () {

  // get random integer from wordsArray.length
  drawedNumber = Math.floor(Math.random() * wordsArray.length);
  console.log(drawedNumber);

  // show drawed word of first language in apripriate section
  drawedWord = wordsArray[drawedNumber][0];
  document.getElementById('drawed-text').textContent = drawedWord;

})

/*********************************
        CHECK BUTTON SECTION
**********************************/

const CHECK_BUTTON = document.getElementById('check');
let answer;

CHECK_BUTTON.addEventListener('click', function () {
  answer = document.getElementById('answer').value;
  document.getElementById('answer').value = '';

  if (wordsArray[drawedNumber][1] === answer) {
    console.log('Odpowiedź poprawna');
  } else {
    console.log('Odpowiedź błędna');
  }
})