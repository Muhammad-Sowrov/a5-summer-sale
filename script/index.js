function handleClickDiv(target){
    const selectedItem = document.getElementById('selected-item');
    const cartName = target.parentNode.childNodes[1].childNodes[3].childNodes[3].innerText;
    const liOl = document.createElement('li')
    liOl.innerText = cartName;
    selectedItem.appendChild(liOl);
    
}
// .childNodes[3].childNodes[3].innerText
// target.parentNode.childNodes[1].childNodes[3].childNodes[3].innerText