const diagram = document.querySelector('.diagramimg')
const clickexp = document.querySelector('.clickexp')

diagram.addEventListener('click', ()=>{
    diagram.classList.toggle('expandido')
    clickexp.classList.toggle('expandido')
})
