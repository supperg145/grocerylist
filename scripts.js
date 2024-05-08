const product = document.querySelector("#product");
const meat = document.querySelector("#meat")
const vegetable = document.querySelector("#vegetable")
const bread = document.querySelector("#bread")
const dairy = document.querySelector("#dairy")
const other = document.querySelector("#other")
const fruit = document.querySelector("#fruit")
const submitButton = document.querySelector("#submit")
const clearButton = document.querySelector("#clear")
const tableBody = document.getElementById("tableBody")
const costInput = document.querySelector("#costeuro")

let totalPrice = 0
let addedItems = []

const addToList = () => {
    const newRow = tableBody.insertRow()
    const newCell1 = newRow.insertCell();
    const newCell2 = newRow.insertCell();
    const newCell3 = newRow.insertCell();

    newCell1.setAttribute("id", "col")
    newCell1.textContent = product.value;
    addedItems.push(product.value)
    console.log(addedItems)
    newCell2.setAttribute("id", "col")
    newCell2.textContent = getType();
    newCell3.setAttribute("id", "col")
    newCell3.textContent = costInput.value

    totalPrice = totalPrice += Number(costInput.value)

    updateTotalCost()
    howManyItems()

    tableBody.appendChild(newRow);
    console.log(product.value)
};


const getType = () => {
    if(meat.checked){
        return "Meat"
    }
    if(vegetable.checked) {
        return "Vegetable"
    }
    if(bread.checked) {
        return "Breads & Cereals"
    }
    if(dairy.checked) {
        return "Dairy"
    }
    if(other.checked) {
        return "Other"
    }
    if(fruit.checked) {
        return "Fruit"
    }
    return ""
}

submitButton.addEventListener("click", addToList);
clearButton.addEventListener("click", () => {
    tableBody.innerHTML = "";
});

const updateTotalCost = () => {
    const totalCostElement = document.getElementById("totalCost");
    totalCostElement.textContent = totalPrice.toFixed(2);
};

const howManyItems = () => {
    let addedItemsCount = 0
    for(let i = 0; i < addedItems.length; i++){
        addedItemsCount++
    }
    const totalProductsElement = document.getElementById("totalProducts");
    totalProductsElement.textContent = addedItemsCount
}