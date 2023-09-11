// Modal Cadastro
const modal = document.getElementById('modal')
const btn = document.getElementById('btn')
const close = document.getElementById('close')
btn.addEventListener('click',()=>{
    modal.style.display = 'flex '
})
close.addEventListener('click',()=>{
    modal.style.display = 'none'
})

// Modal Entrar
const modalLogin = document.getElementById('modalLogin')
const btnLogin = document.getElementById('btnLogin')
const closeLogin = document.getElementById('closeLogin')
btnLogin.addEventListener('click',()=>{
    modalLogin.style.display = 'flex '
})
closeLogin.addEventListener('click',()=>{
    modalLogin.style.display = 'none'
})
