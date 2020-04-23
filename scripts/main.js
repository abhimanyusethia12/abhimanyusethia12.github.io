
let changeUser = document.querySelector('button.user');
let changeBG = document.querySelector('button.bg');
let myHeading = document.querySelector('h2.personalised-hello');

function random(number) {
    return Math.floor(Math.random() * (number+1));
}

changeBG.onclick = function() {
    const rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
    document.body.style.backgroundColor = rndCol;
}

function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName || myName === null){
        setUserName();
    }else {
        localStorage.setItem('name', myName);
        myHeading.textContent = 'Abhimanyu welcomes ' + myName;    
    }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Hello ' + storedName + '!';
}

changeUser.onclick = function() {
    setUserName();
}

let myImage = document.querySelector('img');


myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/abhimanyu.jpg') {
      myImage.setAttribute ('src','images/meme.jpg');
    } else {
      myImage.setAttribute ('src','images/abhimanyu.jpg');
    }
}

