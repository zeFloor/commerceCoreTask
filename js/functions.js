// ---------- Function that drops down list of items in a shopping cart (on mobile) ----------

var orderSummary = document.querySelector(".shopCart")
var shoppingList = document.querySelector(".shoppingList")
var arrow = document.getElementById("arrow")

orderSummary.onclick = function(e) {
    // If shipping list is not visible then it apears
    if(shoppingList.id === "disappear") {
        shoppingList.removeAttribute("id")
        shoppingList.id = "appear"
        arrow.classList.remove("fa-chevron-right")
        arrow.classList.add("fa-chevron-up")
    }
    // If shipping list is visible then it disappears 
    else if(shoppingList.id === "appear") {
        shoppingList.removeAttribute("id")
        shoppingList.id = "disappear"
        arrow.classList.remove("fa-chevron-up")
        arrow.classList.add("fa-chevron-right")
    }
}

// -------------------- END OF FUNCTION --------------------

// ---------- Functions that fills up shopping list with items and removes them ----------

var shoppingCart = document.querySelector(".shoppingItems")
var removeItem = document.querySelector(".remove")
var totalPrice = document.querySelectorAll(".price")

//Function factory to create object from shopping items

const shoppingItems= (itemName, itemPrice) => {
    if(itemName === 'leggings'){
        product = "1x Extra CoreProduct"
    } else if(itemName === 'threeLeggings'){
        product = "3x CoreProduct"
    }
    return{itemName, itemPrice, product}
}

//Object instantiations

const leggings = shoppingItems('leggings', 9.99)
const threeLeggings = shoppingItems('threeLeggings', 39.99)

//Filling up a list with Objects

shoppingArray = [threeLeggings, leggings]

//Function that takes data from Objects and inserts them in the DOM

function addShoppingItem() {
    shoppingArray.forEach(element => {
        shoppingCart.innerHTML += `
        <li class="flex-container shoppingItem">
            <div class="flex-container imgAndProdName">
                <img src="images/${element.itemName}.svg" alt="">
                <div class="product">
                    <p>${element.product}&#174</p>
                    <button class="remove" onclick="removeShoppingItem(this)">Remove</button>
                </div>
            </div>
            <p class="itemPrice">$${element.itemPrice}</p>
        </li>
        
        `    
    })
}

//Function that calculates the total price of shopping cart

function calculateTotalPrice() {
    let price = 0
    shoppingArray.forEach(element => {
        price += element.itemPrice
    });
    totalPrice.forEach(element => {
        element.innerHTML = `$${parseFloat(price).toFixed(2)}`
    })
} 

//Function that indexes shopping items inside shopping cart

function indexShoppingItems() {
    for(let i = 0; i < shoppingCart.children.length; i++) {
    shoppingCart.children[i].setAttribute('data-index', i)
    }
}

//Function that removes shopping item from shopping cart and resets the cart

function removeShoppingItem(e) {
    shoppingArray.splice(e.closest(".shoppingItem").dataset.index,1)
    e.closest(".shoppingItem").remove()
    shoppingCart.innerHTML = ''
    addShoppingItem()
    calculateTotalPrice()
    indexShoppingItems()
}

// -------------------- END OF SHOPPING LIST FUNCTIONS --------------------

addShoppingItem()
calculateTotalPrice()
indexShoppingItems()
