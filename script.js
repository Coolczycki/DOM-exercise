/*
 DOM exercise; 
01. <p> with red text that says “Hey I’m red!”
02. <h3> with blue text that says “I’m a blue h3!”
03. <div> with a black border and pink background color with the following elements inside of it:
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
