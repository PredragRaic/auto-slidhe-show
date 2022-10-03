const oneImg = document.querySelector('#one');
const twoImg = document.querySelector('#two');
const threeImg = document.querySelector('#three');
const fourImg = document.querySelector('#four');
const fiveImg = document.querySelector('#five');

function interval(){

fiveImg.style.visibility = 'hidden';
oneImg.style.visibility = 'visible';

function displayImg2(){
    twoImg.style.visibility = 'visible';
    oneImg.style.visibility = 'hidden';
}
function displayImg3(){
    threeImg.style.visibility = 'visible';
    twoImg.style.visibility = 'hidden';
}
function displayImg4(){
    fourImg.style.visibility = 'visible';
    threeImg.style.visibility = 'hidden';
}
function displayImg5(){
    fiveImg.style.visibility = 'visible';
    fourImg.style.visibility = 'hidden';
}
setTimeout(displayImg2, 1500);
setTimeout(displayImg3, 3000);
setTimeout(displayImg4, 4500);
setTimeout(displayImg5, 6000);

setTimeout(interval, 7500);
}
interval()