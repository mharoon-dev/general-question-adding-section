let body = document.querySelector('body')
let h1 = document.querySelector('h1')
// card 1

let card1 = document.querySelector('.card1');
let borderOfHeading1 = document.querySelector('#h3_1');
let onBtn1 = document.querySelector('.on1');
let offBtn1 = document.querySelector('.off1');
let p = document.querySelector('.p1');
offBtn1.style.display = 'none';
p.style.display = 'none';

function on1() {
    body.style.backgroundColor = 'rgb(48, 210, 89)'
    h1.style.backgroundColor = 'rgb(18, 164, 162)'
    card1.style.backgroundColor = 'rgb(226, 224, 224)';
    card1.style.color = 'black';
    borderOfHeading1.style.borderBottom = '1px solid black';
    onBtn1.style.display = 'none';
    offBtn1.style.display = 'inline';
    p.style.display = 'inline';
}
function off1() {
    body.style.backgroundColor = 'rgb(18, 164, 162)'
    h1.style.backgroundColor = 'rgb(48, 210, 89)'
    card1.style.backgroundColor = 'black';
    card1.style.color = 'whitesmoke';
    borderOfHeading1.style.borderBottom = '1px solid whitesmoke';
    onBtn1.style.display = 'inline';
    offBtn1.style.display = 'none';
    p.style.display = 'none';
}

// card 2
let borderOfHeading2 = document.querySelector('#h3_2');
let card2 = document.querySelector('.card2');
let onBtn2 = document.querySelector('.on2');
let offBtn2 = document.querySelector('.off2');
let p2 = document.querySelector('.p2'); 
offBtn2.style.display = 'none';
p2.style.display = 'none';

function on2() {
    body.style.backgroundColor = 'rgb(48, 210, 89)'
    h1.style.backgroundColor = 'rgb(18, 164, 162)'
    card2.style.backgroundColor = 'rgb(226, 224, 224)';
    card2.style.color = 'black';
    borderOfHeading2.style.borderBottom = '1px solid black';
    onBtn2.style.display = 'none';
    offBtn2.style.display = 'inline';
    p2.style.display = 'inline';
}
function off2() {
    body.style.backgroundColor = 'rgb(18, 164, 162)'
    h1.style.backgroundColor = 'rgb(48, 210, 89)'
    card2.style.backgroundColor = 'black';
    card2.style.color = 'whitesmoke';
    borderOfHeading2.style.borderBottom = '1px solid whitesmoke';
    onBtn2.style.display = 'inline';
    offBtn2.style.display = 'none';
    p2.style.display = 'none';
}

// card 3

let borderOfHeading3 = document.querySelector('#h3_3');
let card3 = document.querySelector('.card3');
let onBtn3 = document.querySelector('.on3');
let offBtn3 = document.querySelector('.off3');
let p3 = document.querySelector('.p3');
offBtn3.style.display = 'none';
p3.style.display = 'none';

function on3() {
    body.style.backgroundColor = 'rgb(18, 164, 162)'
    h1.style.backgroundColor = 'rgb(48, 210, 89)'
    body.style.backgroundColor = 'rgb(48, 210, 89)'
    h1.style.backgroundColor = 'rgb(18, 164, 162)'
    card3.style.backgroundColor = 'rgb(226, 224, 224)';
    card3.style.color = 'black';
    borderOfHeading3.style.borderBottom = '1px solid black';
    onBtn3.style.display = 'none';
    offBtn3.style.display = 'inline';
    p3.style.display = 'inline';
}
function off3() {
    body.style.backgroundColor = 'rgb(18, 164, 162)'
    h1.style.backgroundColor = 'rgb(48, 210, 89)'
    card3.style.backgroundColor = 'black';
    card3.style.color = 'whitesmoke';
    borderOfHeading3.style.borderBottom = '1px solid whitesmoke';
    onBtn3.style.display = 'inline';
    offBtn3.style.display = 'none';
    p3.style.display = 'none';
}
