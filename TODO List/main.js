const addBouton = document.querySelector('.addBouton');
var input = document.querySelector('.input');
const container = document.querySelector('.container');

class item{
	constructor(itemName){
		this.createItem(itemName);

	}
	createItem(itemName){
		let input= document.createElement('input');
		input.value=itemName;
		input.disabled=true;
		input.classList.add('input-item');
		input.type="text";

		let itemBox = document.createElement('div');
		itemBox.classList.add('item');

		let editBouton = document.createElement('bouton');
		editBouton.innerHTML="EDIT";
		editBouton.classList.add('editBouton');

		let removeBouton = document.createElement('bouton');
		removeBouton.innerHTML="REMOVE";
		removeBouton.classList.add('removeBouton');

		container.appendChild(itemBox);
		itemBox.appendChild(input);
		itemBox.appendChild(editBouton);
		itemBox.appendChild(removeBouton);

		editBouton.addEventListener('click' , () => this.edit(input));
		removeBouton.addEventListener('click' , () => this.remove(itemBox));


	}
	edit(input){
            input.disabled = !input.disabled;
          
	}
	remove(item){
		container.removeChild(item);
	}

}

function check(){
if(input.value != ""){
new item(input.value);
input.value="";
}
}
addBouton.addEventListener('click' , check);