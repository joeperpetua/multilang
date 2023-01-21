async function handleTranslate(q, langArray, stopLoader) {
    if (!langArray){
        stopLoader(false, ".translation-loader");
        return;
    }
    let tl = '';
    let textFieldArray = [];
    langArray.forEach((element, index, array) => {
        if (index === array.length - 1){ 
            tl += element.code;
        } else {
            tl += `${element.code},`;
        }
        textFieldArray.push({"lang": element.code, "element": document.querySelector(`#translation-${element.code}`)});
    });
    
    let trans_response = await fetch(`https://apiml.joeper.myds.me/translate?q=${q}&tl=${tl}&sl=auto`);
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
        let trans_json = await trans_response.json();
        console.log(trans_json.message);   
    }

    stopLoader(false, ".translation-loader");
    return;
}

async function handleDictionary(q, langArray, stopLoader) {
    if (!langArray){
        stopLoader(false, ".variations-loader");
        return;
    }
    let tl = '';
    let textFieldArray = [];
    langArray.forEach((element, index, array) => {
        if (index === array.length - 1){ 
            tl += element.code;
        } else {
            tl += `${element.code},`;
        }
        textFieldArray.push({"lang": element.code, "element": document.querySelector(`#variations-list-${element.code}`), "parent": document.querySelector(`#variations-${element.code}`)});
    });
    
    let trans_response = await fetch(`https://apiml.joeper.myds.me/dictionary?q=${q}&tl=${tl}&sl=auto`);
    if (trans_response.ok) {
        let trans_json = await trans_response.json();
        trans_json.definitions.forEach(response => {
            textFieldArray.forEach(textFieldArrayElement => {
                if(response.target === textFieldArrayElement.lang){
                    // clear element before assigning new variations
                    textFieldArrayElement.element.innerHTML = '';
                    response.result.forEach(el => {
                        textFieldArrayElement.element.innerHTML += `${el}; `;
                    });
                    textFieldArrayElement.parent.style.display = "block";
                }
            });
        });
        
    } else {
        let trans_json = await trans_response.json();
        console.log(trans_json.message);  
    }
    stopLoader(false, ".variations-loader");
    return;
}

export {handleTranslate};
export {handleDictionary};