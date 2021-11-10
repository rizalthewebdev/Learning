// DOM Selection

// getElementById()
const judul = document.getElementById('judul');

judul.style.color = 'red';
judul.style.backgroundColor = '#ccc';
judul.innerHTML = 'Khoerul Rizal';

// getElementsByTagName()
const paragraf = document.getElementsByTagName('p');
paragraf[0].style.backgroundColor = 'lightBlue';

for (let i = 0; i < paragraf.length; i++) {
    paragraf[i].style.backgroundColor = 'lightBlue';
}

// getElementsByClassName()
const p1 = document.getElementsByClassName('p1');

p1[0].innerHTML = 'Ini diubah dengan Javascript';

// querySelector()
const li2 = document.querySelector('section#b ul li:nth-child(2)');

li2.style.backgroundColor = 'lightBlue'; 

// querySelectorAll()
const p = document.querySelectorAll('p');

for (let i = 0; i < p.length; i++) {
    p[i].style.color = 'green';
}

const changeParagraf = document.querySelectorAll('p');

changeParagraf[3].innerHTML = "Ini Harusnya Berubah";


