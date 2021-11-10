const p4 = document.querySelector('section#b p')

function ubahWarna() {
    p4.style.backgroundColor = 'lightgreen'
}

p4.onclick = ubahWarna
p4.addEventListener('dblclick', function(){
    const ul = document.querySelector('section#b ul')
    const newLi = document.createElement('li')
    const textLi = document.createTextNode('item baru')

    newLi.appendChild(textLi)
    ul.appendChild(newLi)
})

p4.addEventListener('mouseenter' ,function(){
    p4.style.backgroundColor = 'lightblue'
})
p4.addEventListener('mouseleave' ,function(){
    p4.style.backgroundolor = 'white'
})

