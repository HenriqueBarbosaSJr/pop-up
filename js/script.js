// Referências do DOM HTML

const btnMostrar = document.getElementById('btnMostrar');
const popup = document.querySelector('.popupWrapper');


btnMostrar.addEventListener('click', ()=>{
    popup.style.display = 'block';
})

popup.addEventListener('click', event => {
    const classClicada = event.target.classList[0];
     //console.log(classClicada); //exibe a classe clicada 
    if (classClicada === 'popupWrapper' || 
          classClicada === 'popupClose' || 
             classClicada === 'closelinkpopup' ){

                   popup.style.display = 'none'; 
        }
})