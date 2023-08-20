let totalPrice = 0;
function handleClickDiv(target){
    const selectedItem = document.getElementById('selected-item');
    const cartName = target.parentNode.childNodes[1].childNodes[3].childNodes[3].innerText;
    const liOl = document.createElement('li')
    liOl.innerText = cartName;
    selectedItem.appendChild(liOl);

    const productPrice = target.parentNode.childNodes[1].childNodes[3].childNodes[5].innerText.split(' ')[0];
    totalPrice = parseInt(totalPrice) + parseInt(productPrice);
    document.getElementById('total-price').innerText = totalPrice;
}

function handleClickApply(read){
    const inputField = document.getElementById('input-coupon');
    const couponS = inputField.value;
    if(couponS === 'SELL200'){
        let discount;
        discount = totalPrice * 0.2;
        let p = discount.toFixed(2);
        document.getElementById('discount').innerText = p;
        discountToFixed = totalPrice;
        document.getElementById('total').innerText = totalPrice - discount;
        return discount;
    }

}