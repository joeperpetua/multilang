async function handleTranslate(q, langArray, stopLoader) {
    let tl = '';
    let textFieldArray = [];
    langArray.forEach(element => {
        tl += `${element.code},`;
        textFieldArray.push({"lang": element.code, "element": document.querySelector(`#translation-${element.code}`)});
    });
    
    let trans_response = await fetch(`https://apiml.joeper.myds.me/translate?q=${q}&tl=${tl}`);
    if (trans_response.ok) {
        let trans_json = await trans_response.json();
        trans_json.translations.forEach(response => {
            textFieldArray.forEach(textFieldArrayElement => {
                if(response.target === textFieldArrayElement.lang){
                    textFieldArrayElement.element.innerHTML = response.result;
                }
            });
        });
        
    } else {
        console.error(trans_response);  
    }

    stopLoader(false, ".translation-loader");
    return;
}

async function handleDictionary(q, langArray, stopLoader) {
    let tl = '';
    let textFieldArray = [];
    langArray.forEach(element => {
        tl += `${element.code},`;
        textFieldArray.push({"lang": element.code, "element": document.querySelector(`#variations-list-${element.code}`), "parent": document.querySelector(`#variations-${element.code}`)});
    });
    
    let trans_response = await fetch(`https://apiml.joeper.myds.me/dictionary?q=${q}&tl=${tl}`);
    if (trans_response.ok) {
        let trans_json = await trans_response.json();
        trans_json.definitions.forEach(response => {
            textFieldArray.forEach(textFieldArrayElement => {
                if(response.target === textFieldArrayElement.lang){
                    response.result.forEach(el => {
                        textFieldArrayElement.element.innerHTML += `${el}; `;
                    });
                    textFieldArrayElement.parent.style.display = "block";
                }
            });
        });
        
    } else {
        console.error(trans_response);  
    }
    stopLoader(false, ".variations-loader");
    return;
}

export {handleTranslate};
export {handleDictionary};