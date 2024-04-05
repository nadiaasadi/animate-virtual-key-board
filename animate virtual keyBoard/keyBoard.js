
let titleElem=document.querySelector('.title')

document.addEventListener('keyup',function(event){
    // console.log(event.key);
        console.log(event);
        appendValue(event)

    let keyEventUser=event.key.toUpperCase()
    let mainKey=document.getElementById(keyEventUser)
    console.log(mainKey);
    mainKey.classList.add('hit')
    mainKey.addEventListener('animationend',function(){
        mainKey.classList.remove('hit')
    })
    console.log(mainKey);


})
function appendValue(event){
    if(event.code === 'Backspace') {
        titleElem.innerHTML=titleElem.innerHTML.slice(0,-1)
        return
    }
    titleElem.innerHTML+=event.key
}