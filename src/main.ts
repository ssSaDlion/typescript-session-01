const buscadorGlobal=document.querySelector('#buscador-global')
console.log(buscadorGlobal)
buscadorGlobal?.addEventListener('keyup' , (event:any)=>console.log(event?.target?.value))
const home=document.querySelector('#enlace-home')
console.log(home)
home.addEventListener('click' , (event:any)=>console.log(event))