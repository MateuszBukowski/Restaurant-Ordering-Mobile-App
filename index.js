import { menuArray } from './data.js'

const products = document.getElementById('products')
const orders = document.getElementById('orders')
const modalPaymentForm = document.getElementById('modal-payment-form')
const summary = document.getElementById('summary')

let productBasket = []
let totalPrice = 0
console.log(`totalPrice = ${totalPrice}`)

document.addEventListener('click', function(e){
    const orderList = document.getElementById('order-list')
    switch(String(e.target.id)){
        case '0':
            orderList.innerHTML += addProductToOrder(e.target.id)
            break
        case '1':
            orderList.innerHTML  += addProductToOrder(e.target.id)
            break
        case '2':
            orderList.innerHTML  += addProductToOrder(e.target.id)
            break
    }
})

function addProductToOrder(productId){
    const productIdNum = Number(productId)
    orders.style.display = 'flex'
    let resultHtml = ""
    menuArray.forEach(product => {
        if (product.id === productIdNum){
            resultHtml = `
            <p>${product.name}</p>
            <button class="remove-btn">remove</button>
            <p>${product.price}</p>
            `      
        totalPrice += Number(product.price)
        console.log(`totalPrice = ${totalPrice}`)
        productBasket.push(product)
        }
    })
    return resultHtml
}

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
    let resultHtml = ""
    resultHtml = `
        <p>Your Order</p>
        <div id="order-list"></div>
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