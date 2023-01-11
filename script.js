/*
 DOM exercise; 
01. <p> with red text that says “Hey I’m red!”
02. <h3> with blue text that says “I’m a blue h3!”
03. <div> with a black border and pink background
 color with the following elements inside of it:

        03 A) another <h1> that says “I’m in a div”
        03 B) a <p> that says “ME TOO!”
                Hint for this one: after creating the <div> with createElement, 
        03 C) append the <h1> and <p> to it before adding it to the container
*/

// 01: create <p> text
const cont = document.querySelector('#container');
const para = document.createElement("p");
para.textContent = 'Hey, I\'m red!';
para.style.color = 'Red';
cont.appendChild(para);

// 02: <h3> blue text

const hThree = document.querySelector('#container');
const hT = document.createElement('h3');
hT.textContent = "I\'m a blue h3!"; 
hT.style.color = 'Blue';
hThree.appendChild(hT);

// 03: div container

const diver = document.querySelector('#container');
const diverCont = document.createElement('div');

diverCont.style.border = 'thin solid black';
diverCont.style.backgroundColor = 'Pink';
diver.appendChild(diverCont);

// 03A, B, C
const diverH = document.createElement('h1');
diverH.textContent = 'I\'m in div !';
diverCont.appendChild(diverH);

const diverP = document.createElement('p');
diverP.textContent = 'ME TOO!';
diverCont.appendChild(diverP);

// button exercise

const btnCon = document.querySelector('#btn');
btnCon.addEventListener('click', () => {
        alert('Woah, it is working!')
});
