
const itemList = document.querySelector('#itemList');
const addButton = document.querySelector('#addButton');
function addItem() {
    const newItem = document.createElement('li');
    const sequenceNumber = itemList.children.length + 1;
    newItem.textContent = `Item ${sequenceNumber}`;
    if (sequenceNumber % 2 !== 0) { 
        newItem.classList.add('bold-blue');
    } else { 
        newItem.classList.add('italic-red');
    }
    itemList.appendChild(newItem);
}

addButton.addEventListener('click', addItem);
