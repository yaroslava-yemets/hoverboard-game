'use strict';

const board = document.querySelector('#board');
const colors = ['#f0c5c2', '#f29e99', '#ed7b74', '#eb453b', '#e81d10', '#ad133a',
'#e88151', '#e06b34', '#e35310', '#e3b510', '#d6b640', '#f0d90a', '#c9c914', 
'#a8c914', '#90c914', '#52910a', '#2c910a', '#33e32d', '#2de348', '#2de36d', 
'#2de388', '#2de39d', '#14ba7a', '#14ba93', '#14baa9', '#14a7ba', '#1472ba', 
'#145cba', '#1432ba', '#0c0861', '#452894', '#43158a', '#5b158a', '#6b158a',
'#c91ee3','#dc1ee3', '#e31ed3', '#e31eb8', '#730d5c', '#ad1375', '#ad1351', ];
const SQUARES_NUMBER = 500;

for (let i = 0; i < SQUARES_NUMBER; i += 1) {
    const square = document.createElement('div');
    square.classList.add('square');

    square.addEventListener('mouseover', setSquareColor);
    square.addEventListener('mouseleave', removeSquareColor);

    board.append(square);
};

function setSquareColor (event) {
    const element = event.target;
    const color = getRandomColor();
    element.style.backgroundColor = color;
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
};

function removeSquareColor (event) {
    const element = event.target;
    element.style.backgroundColor = '#1d1d1d';
    element.style.boxShadow = '0 0 2px #000';
};

function getRandomColor () {
    return colors[Math.floor(Math.random() * colors.length)];
};