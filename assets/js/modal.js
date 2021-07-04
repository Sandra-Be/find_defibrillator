// get modal element
var modal = document.getElementById('simpleModal');
//get open modal button
var modalBtn = document.getElementById('modalBtn');
//get close modal button
var closeBtn = document.getElementsByClassName('closeBtn')[0];

//listen for open click
modalBtn.addEventListener('click', openModal);
//listen for close click
closeBtn.addEventListener('click', closeModal);
//listen for outside click on window
window.addEventListener('click', outsideClick);

//function to open modal
function openModal(){
    modal.style.display = 'block';
}

//function to close modal
function closeModal(){
    modal.style.display = 'none';
}

//function to close modal if click outside window
function outsideClick(x){
    if(x.target == modal){
        modal.style.display = 'none';
    }
}