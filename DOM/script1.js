//Membuat Paragraf Baru
const newP = document.createElement('p');
const textP = document.createTextNode('Paragraf yang dibuat dengan DOM');

newP.appendChild(textP);

const sectionA = document.getElementById('a');

sectionA.appendChild(newP);

//Membuat li baru
const newLi = document.createElement('li')
const isiLi = document.createTextNode('Item Baru')

newLi.appendChild(isiLi)

const ul = document.querySelector('section#b ul')
const li2 = ul.querySelector('li:nth-child(2)')

ul.insertBefore(newLi, li2)

//Hapus Element
const link = document.getElementsByTagName('a')[0];

sectionA.removeChild(link)

//Replace Element
const sectionB = document.getElementById('b')
const p4 = sectionB.querySelector('p')

const hBaru = document.createElement('h1')
const isiH = document.createTextNode('Judul Baru')

hBaru.appendChild(isiH)

sectionB.replaceChild(hBaru, p4)