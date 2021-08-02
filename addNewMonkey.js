const addButton = document.querySelector('.add-button');
let monkeyName = document.querySelector('#form-name');
let monkeyInfo = document.querySelector('#form-info');
let monkeyImg = document.querySelector('#form-image');
let addMonkeyObj = {};

addButton.addEventListener('click', renderMonkeyInfo);

function renderMonkeyInfo(event){
    event.preventDefault();
    if(monkeyName.value == "" || monkeyInfo.value == "" || monkeyImg.value == ""){
        return;
    } 
    
    let nextElementCnt = monkeys.length + 1;
    
    addMonkeyObj = {
        id: nextElementCnt,
        name: monkeyName.value,
        image: monkeyImg.value,
        info: monkeyImg.value,
    }
    monkeys.push(addMonkeyObj);

    monkeyName.value = "";
    monkeyInfo.value = "";
    monkeyImg.value = "";
      
}

