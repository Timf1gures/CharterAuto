const addNewCar = document.getElementById("addnewcar")
let addCar = document.getElementById('newcar');


function addCarMenu() {
    addCar.style.display = 'block';

};
addNewCar.addEventListener('click',addCarMenu);


const close =document.getElementById('close');

function addCarMenuClose() {
    addCar.style.display = 'none';
};

close.addEventListener('click',addCarMenuClose);
