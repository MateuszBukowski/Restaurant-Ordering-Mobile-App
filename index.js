import { menuArray } from './data.js'

const products = document.getElementById('products')
const orders = document.getElementById('orders')
const modalPaymentForm = document.getElementById('modal-payment-form')
const summary = document.getElementById('summary')

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
        case 'pay-btn':
            payOrder()
            break
    }
    render()
})

function getProducts(){
    let resultHtml = ""
    menuArray.forEach(element => {
        resultHtml += `        
        <div class="product">
            ${element.emoji}
            <div class="product-properties">
                <p>${element.name}</p>
                <p>${element.ingredients}</p>
                <p>${element.price}</p>
            </div>
            <button class="plus-btn" id="${element.id}">+</button>
            <hr>
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
        <p>${productOrder.name}</p>
        <button id="remove-btn-${productOrder.id}">remove</button>
        <p>${productOrder.price}</p>
        `
        totalPrice += Number(productOrder.price)
    })
    if (productBasket.length > 0) {
        orders.style.display = 'flex'
    }
    const resultHtml = `
        <p>Your Order</p>
        ${ordersHtml}}
        <hr>
        <p>In Total:</p>
        <p>${totalPrice}</p>
        <button class="green-btn" id="order-btn">Complete Order</button>
    `
    return resultHtml
}

function getModalPaymentForm(){
    modalPaymentForm.style.display = 'flex'
    let resultHtml = ""
    resultHtml = `
        <p>Enter Card Details</p>
        <form id="payment-form">
            <label for="full-name">Enter your name</label>
            <input 
                type="text" 
                name="full-name" 
                id="full-name" 
                pattern="^[A-Za-z]+ [A-Za-z]+$"
                title="Full name"
                required
            >
            <label for="card-number">Enter card number</label>
            <input 
                type="text" 
                name="card-number" 
                id="card-number" 
                pattern="[0-9]{26}"
                title="26 digits only"
                required
            >
            <label for="cvv">Enter CVV</label>
            <input 
                type="text" 
                name="cvv" 
                id="cvv"
                pattern="[0-9]{3}"
                title="3 digits only"
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

    summary.style.display = 'flex'
}

function getSummary(){
    let resultHtml = ""
    if (paymentData.lenght > 0) {
        resultHtml = `
            <p>Thanks ${paymentData[0].fullName}! Your order is on its way!</p>
        `
        console.log(productBasket)
    }
    return resultHtml
}

function render(){
    products.innerHTML = getProducts()
    orders.innerHTML = getOrders()
    summary.innerHTML = getSummary()
}

render()