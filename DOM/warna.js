//Ubah Warna dengan menambahkan kelas
const ubahWarna = document.querySelector('#ubahWarna')

ubahWarna.addEventListener('click', function(){
    document.body.classList.toggle('light-green')
})


//Ubah warna dengan acak menggunakan tombol
const newButton = document.createElement('button')
const isi = document.createTextNode('Acak Warna')
newButton.appendChild(isi)
ubahWarna.after(newButton)

newButton.addEventListener('click', function(){
    const r = Math.round(Math.random() * 255 + 1)
    const g = Math.round(Math.random() * 255 + 1)
    const b = Math.round(Math.random() * 255 + 1)

    document.body.style.backgroundColor = `rgb(${r},${g},${b})`
})


//Ubah warna menggunakan slider input
const redSlider = document.querySelector('input[name=sRed]')
const greenSlider = document.querySelector('input[name=sGreen]')
const blueSlider = document.querySelector('input[name=sBlue]')

redSlider.addEventListener('input', function(){
    const r = redSlider.value
    document.body.style.backgroundColor = `rgb(${r},0,0)`
})
greenSlider.addEventListener('input', function(){
    const r = redSlider.value
    const g = greenSlider.value
    document.body.style.backgroundColor = `rgb(${r},${g},0)`
})
blueSlider.addEventListener('input', function(){
    const r = redSlider.value
    const g = greenSlider.value
    const b = blueSlider.value
    document.body.style.backgroundColor = `rgb(${r},${g},${b})`
})


//Ubah warna dengan mouse digerakan
document.body.addEventListener('mousemove', function(e){
    const xPos = Math.round((e.clientX / window.innerWidth) * 255)
    const yPos = Math.round((e.clientY / window.innerHeight) * 255)

    document.body.style.backgroundColor = `rgb(${xPos},${yPos},100)`
})
