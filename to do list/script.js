
const ul=document.querySelector('#myUL')
const myInput=document.querySelector('#myInput')
document.addEventListener('keydown',keydownFunc)
function keydownFunc(e){
    if(e.keyCode===13){
        if(myInput.value!==""){
        createListElement()
        }
        else{
            alert('entere klik etmeden once melumat daxil edin')
        }
    }
   
   

}

function createCloseButton(selectedLi){
    const closeButton=document.createElement('span')
    closeButton.classList.add('close')
    // closeButton.onclick=deletelistElement()
    const x=document.createTextNode('\u00D7')
    closeButton.appendChild(x)
    closeButton.onclick=deleteListItem
    selectedLi.appendChild(closeButton)
}

function createListElement(){
    const myInputValue=myInput.value
    const li=document.createElement('li')
    li.textContent=myInputValue
    li.onclick=checkedListElement
    ul.appendChild(li)
    createCloseButton(li)
    myInput.value=""
}
function checkerInputValue(){
    if(myInput.value===""){
        window.alert('input boshdur')
    }
    else{

        createListElement() 
    }
}
function deleteListItem(){
    this.parentElement.remove()
}
function checkedListElement(){
 this.classList.add('checked')
}
function deleteAllListElements(){
    ul.innerHTML=""
}
