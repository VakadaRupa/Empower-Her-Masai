const h1Element = document.getElementById('main-title');
h1Element.textContent = "Welcome to the DOM";

const paragraphElements = document.getElementsByTagName('p');
for(let i = 0; i < paragraphElements.length; i++){
    paragraphElements[i].style.color = 'blue';
}

const firstContainer = document.querySelector('div.container');
firstContainer.style.backgroundColor = 'yellow';