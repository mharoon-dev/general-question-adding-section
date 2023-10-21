let onBtn = document.querySelector('.on');
let offBtn = document.querySelector('.off');
let p = document.querySelector('.p');
offBtn.style.display = 'none';
p.style.display = 'none';
p.style.opacity = '0';
p.style.transition = 'opacity 2s'; // Corrected the transition property

function on() {
    onBtn.style.display = 'none';
    offBtn.style.display = 'inline'; // Corrected this line
    p.style.display = 'inline';
    p.style.opacity = '1';
}

function off() {
    onBtn.style.display = 'inline';
    offBtn.style.display = 'none';
    p.style.display = 'none';
    p.style.opacity = '0';
}
