function elementIdAdd (element){
    const elementIds = document.getElementById(element);
    elementIds.classList.add('hidden');
}

function elementIdRemove (remove){
    const removeElement = document.getElementById(remove);
    removeElement.classList.remove('hidden')
}

function setBackgroundColor(bgId){
    const elementId = document.getElementById(bgId);
    elementId.classList.add('bg-yellow-500');
}

function remobeBackgroundColor(bgId){
    const elementId = document.getElementById(bgId);
    elementId.classList.remove('bg-yellow-500');
}

function getElementFunction(elem){
    const emlement = document.getElementById(elem);
    const textElement = emlement.innerText;
    const elemVal = parseInt(textElement);
    return elemVal;
}

function getElementTextById(element){
    const getElement = document.getElementById(element);
    const textElement = getElement.innerText;
    return textElement;
}

function getTextFunction(elm,elemId){
    const getText = document.getElementById(elm);
    getText.innerText = elemId 
};


function createARandomAlphabate(id,elem){
    const alphabte = 'abcdefghijklmnopqrstuvwxyz';
    const arrAlphabate = alphabte.split('');

    const randomNumber = Math.random() * 25;
    const index = Math.round(randomNumber);

    const myAlphabate = arrAlphabate[index];
    return myAlphabate

}