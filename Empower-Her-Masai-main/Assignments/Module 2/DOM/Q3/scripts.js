
const colorInput = document.getElementById('colorInput');
const changeColorBtn = document.getElementById('changeColorBtn');
const textInput = document.getElementById('textInput');
const updateTextBtn = document.getElementById('updateTextBtn');
const targetDiv = document.getElementById('targetDiv');

function isValidColor(strColor) {
    const s = new Option().style;
    s.color = strColor;
    return s.color !== '';
}
changeColorBtn.addEventListener('click', function() {
    const colorName = colorInput.value.trim();

    if (isValidColor(colorName)) {
        targetDiv.style.backgroundColor = colorName;
        colorInput.value = ''; 
    } else {
        alert('Invalid color name!');
    }
});
updateTextBtn.addEventListener('click', function() {
    const newText = textInput.value.trim();

    if (newText === '') {
        alert('Please enter some text!');
    } else {
        targetDiv.textContent = newText;
        textInput.value = ''; 
    }
});
