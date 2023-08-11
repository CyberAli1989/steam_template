
const openButton = document.querySelector('#open-btn')
const closeButton = document.querySelector('#close-btn')
const modalContainer = document.querySelector('#modal-container')

openButton.addEventListener('click',function(){

    modalContainer.style.display = 'block';
    
})

closeButton.addEventListener('click', () => {

    modalContainer.style.display = 'none';

})

window.addEventListener('click', (e)=> {

    if(e.target === modalContainer){

        modalContainer.style.display = 'none';

    }
    console.log(e.target)
})