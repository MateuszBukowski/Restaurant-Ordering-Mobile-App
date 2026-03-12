import { menuArray } from './data.js'

const products = document.getElementById('products')
const orders = document.getElementById('orders')
const modalPaymentForm = document.getElementById('modal-payment-form')
const summary = document.getElementById('summary')

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
            <button class="plus-btn">+</button>
            <hr>
        </div>`
    });
    return resultHtml
}

function getModalPayment(){
    let resultHtml = ""
    resultHtml = `
        <div class="modal-payment">
        <p>Your Order</p>
        <p>ORDER LIST</p>
        <p>ORDER PRICE</p>
        <hr>
        <p>In Total: </p>
        <p>PRICE</p>
        <button class="green-btn">Complete Order</button>
        </div>
    `
    return resultHtml
}

function getPaymentForm(){
    let resultHtml = ""
    resultHtml = `
        <p>Enter Card Details</p>
        <form>
        <label>Enter your name</label>
        <input></input>
        <label>Enter card number</label>
        <input></input>
        <label>Enter CVV</label>
        <input></input>
        <button type+"submit" class="green-btn">Pay</button>
        </form>
    `
    return resultHtml
}

function getSummary(){
    let resultHtml = ""
    resultHtml = `
        <p>Thanks NAME! Your order is on its way!</p>
    `
    return resultHtml
}

function render(){
    products.innerHTML = getProducts()
    orders.innerHTML = getModalPayment()
    modalPaymentForm.innerHTML = getPaymentForm()
    summary.innerHTML = getSummary()
}

render()