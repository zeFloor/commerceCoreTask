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
    e.stopPropagation()
}

// Put on the event listener so that the shopping list would disappear when clicked anywhere in DOM except for the shopping list
document.addEventListener('click', e => {
    if(e.target.closest(".shoppingList") === null) {
        shoppingList.removeAttribute("id")
        shoppingList.id = "disappear"
        arrow.classList.remove("fa-chevron-up")
        arrow.classList.add("fa-chevron-right")
    }
})

// ---------- END OF FUNCTION ----------

// ---------- Function that fills up shopping list with items and removes them ----------

var shoppingCart = document.querySelector(".shoppingItems")
var removeItem = document.querySelector(".remove")
var product = document.querySelector('.shoppingItem')

shoppingItems = [['threeLeggings', '3x CoreProduct', 39.99], ['leggings', 'Extra CoreProduct', 9.99]]

function addShoppingItem() {
    shoppingItems.forEach(element => {
        shoppingCart.innerHTML += `
        <li class="flex-container shoppingItem">
            <div class="flex-container imgAndProdName">
            <img src="images/${element[0]}.svg" alt="">
                <div class="product">
                    <p>${element[1]}&#174</p>
                    <button class="remove" onclick="removeShoppingItem(this)">Remove</button>
                </div>
            </div>
            <p>$${element[2]}</p>
        </li>
        
        `
    });
}

function removeShoppingItem(e) {
    e.parentNode.parentNode.parentNode.remove()
}

addShoppingItem()