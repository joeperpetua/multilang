const clearText = () => {
    let textInput = document.querySelector("#input-text");
    let translationElements = document.querySelectorAll(".translation-text");
    let variationsElements = document.querySelectorAll(".variation-text");

    textInput.value = '';
    textInput.focus();
    translationElements.forEach(element => {
        element.innerHTML = '';
    });
    variationsElements.forEach(element => {
        element.innerHTML = '';
        element.parentElement.style.display = 'none';
    });
}

export {clearText};