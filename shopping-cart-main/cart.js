
function productQuantity(product,price, isIncrease){
    const producInput = document.getElementById(product + '-input');
    let  productInputValue = producInput.value; 

    if(isIncrease == true){
        productInputValue = parseInt(productInputValue) + 1;
    }
    else if(productInputValue > 0){
        productInputValue = parseInt(productInputValue) - 1;
    }

    // update Price
    producInput.value = productInputValue;
    const updatePrice = document.getElementById(product + '-price');
    updatePrice.innerText = productInputValue * price;
   
    // Add Subtotal
    calculatePrice();
   
}

function getInput(product){
    const productInput = document.getElementById(product + '-input');
    const productNumber = parseInt(productInput.value);
    return productNumber;
}
function calculatePrice(){
    const phonePrice = getInput('phone') * 1219;
    const casePrice = getInput('casing') * 59;
    const totalPrice =  phonePrice + casePrice;
    document.getElementById('sub-total').innerText =totalPrice;
    const tax = totalPrice / 10;
    document.getElementById('tax-amount').innerText = tax;
    const totalAmount = document.getElementById('total-amount');
    totalAmount.innerText = totalPrice + tax;


}

// phone 

document.getElementById('phone-plus').addEventListener('click', function(){
    productQuantity('phone',1219, true);
})
document.getElementById('phone-minus').addEventListener('click', function(){
    productQuantity('phone',1219, false);
})

document.getElementById('plus-btn').addEventListener('click', function(){
    productQuantity('casing',59, true);
})

document.getElementById('minus-btn').addEventListener('click', function(){
    productQuantity('casing', 59,false);
})

