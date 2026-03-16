import { menuArray } from './data.js'

const products = document.getElementById('products')
const orders = document.getElementById('orders')
const modalPaymentForm = document.getElementById('modal-payment-form')
const summary = document.getElementById('summary')

let productBasket = []

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

function getOrders(){
    let totalPrice = 0
    let ordersHtml = "" 
    productBasket.forEach(productOrder => {
        ordersHtml += `        
        <p>${productOrder.name}</p>
        <button class="remove-btn">remove</button>
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
        <button class="green-btn">Complete Order</button>
    `
    return resultHtml
}

function getModalPaymentForm(){
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
    orders.innerHTML = getOrders()
    modalPaymentForm.innerHTML = getModalPaymentForm()
    summary.innerHTML = getSummary()
}

render()