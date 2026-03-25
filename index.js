import { menuArray } from './data.js'

const products = document.getElementById('products')
const orders = document.getElementById('orders')
const modalPaymentForm = document.getElementById('modal-payment-form')

let productBasket = []
let paymentData = []

document.addEventListener('click', function(e){
    const orderList = document.getElementById('order-list')
    switch(String(e.target.id)){
        case '0':
            productBasket.push(menuArray[e.target.id])
            break
        case '1':
            productBasket.push(menuArray[e.target.id])
            break
        case '2':
            productBasket.push(menuArray[e.target.id])
            break
        case 'remove-btn-0':
            removeProductFromOrder("0")
            break
        case 'remove-btn-1':
            removeProductFromOrder("1")
            break
        case 'remove-btn-2':
            removeProductFromOrder("2")
            break
        case 'order-btn':
            getModalPaymentForm()
            break
    }
    render()
})

document.addEventListener('submit', function(e){
    e.preventDefault()
    payOrder()
})

function getProducts(){
    let resultHtml = ""
    menuArray.forEach(element => {
        resultHtml += `        
        <div class="product">
            <span class="product-emoji">
                ${element.emoji}
            </span>
            <div class="product-properties">
                <p id="product-name">${element.name}</p>
                <p id="product-ingredients">${element.ingredients}</p>
                <p id="product-price">$${element.price}</p>
            </div>
            <button class="plus-btn" id="${element.id}">+</button>
        </div>`
    })
    return resultHtml
}

function removeProductFromOrder(productId) {
    for ( let index = 0; index < productBasket.length; i++ ){
        if ( productBasket[index].id === Number(productId)){
                productBasket.splice(index, 1);
        }
    }
}

function getOrders(){
    let totalPrice = 0
    let ordersHtml = "" 
    productBasket.forEach(productOrder => {
        ordersHtml += `
        <div class="order-product"> 
            <div class="order-product-name-and-btn">       
                <p>${productOrder.name}</p>
                <button class="remove-btns" id="remove-btn-${productOrder.id}">remove</button>
            </div>
            <p>$${productOrder.price}</p>
        </div>
        `
        totalPrice += Number(productOrder.price)
    })
    if (productBasket.length > 0) {
        orders.style.display = 'flex'
    }
    const resultHtml = `
            <p class="order-list-element">Your Order</p>
            <div class="order-products-list">
                ${ordersHtml}
            </div>
            <div class="total-price">
                <p>Total price:</p>
                <p>$${totalPrice}</p>
            </div>
            <button class="green-btn order-tbl-element" id="order-btn">Complete Order</button>
    `   
    return resultHtml
}

function getModalPaymentForm(){
    modalPaymentForm.style.display = 'flex'
    let resultHtml = ""
    resultHtml = `
        <p id="modal-title" >Enter Card Details</p>
        <form id="payment-form">
            <input 
                class="modal-input"
                type="text" 
                name="full-name" 
                id="full-name" 
                pattern="^[A-Za-z]+ [A-Za-z]+$"
                title="Full name"
                placeholder="Enter your name"
                required
            >
            <input 
                class="modal-input"
                type="text" 
                name="card-number" 
                id="card-number" 
                pattern="[0-9]{26}"
                title="26 digits only"
                placeholder="Enter card number"
                required
            >
            <input 
                class="modal-input"
                type="text" 
                name="cvv" 
                id="cvv"
                pattern="[0-9]{3}"
                title="3 digits only"
                placeholder="Enter CVV"
            >
            <button type="submit" class="green-btn" id="pay-btn">Pay</button>
        </form>
    `
    modalPaymentForm.innerHTML = resultHtml
}

function payOrder(){
    const fullName = document.getElementById('full-name')
    const cardNumber = document.getElementById('card-number')
    const cvv = document.getElementById('cvv')
    
    paymentData.push({
        fullName : fullName.value,
        cardNumber : cardNumber.value,
        cvv : cvv.value
    })

    console.log(paymentData)
    getSummary()
}

function getSummary(){
    if (paymentData.length > 0) {
        cleanModalForm()
        cleanOrder()
        orders.innerHTML = `
            <p>Thanks ${paymentData[0].fullName}! Your order is on its way!</p>
        `
    }
}

function cleanModalForm(){
    document.getElementById('full-name').value = ""
    document.getElementById('card-number').value = ""
    document.getElementById('cvv').value = ""
    modalPaymentForm.style.display = 'none'
}

function cleanOrder(){
    orders.innerHTML = ""
}

function render(){
    products.innerHTML = getProducts()
    orders.innerHTML = getOrders()
}

render()