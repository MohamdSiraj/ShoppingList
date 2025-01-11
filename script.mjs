import {initializeApp } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js'
import {getDatabase, ref ,push, onValue, remove} from  'https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js'

const appSettings = {
    databaseURL: "https://shoppinglist-edc2e-default-rtdb.europe-west1.firebasedatabase.app"
}
const app = initializeApp(appSettings);

const database = getDatabase(app)
const itemInDB = ref(database,'item')

const input = document.getElementById("list-input");
const addBtn = document.getElementById("addBtn");
const listContainer = document.getElementById("list-container");
const itm = document.getElementById("itm");


onValue(itemInDB, function (snapshot) {

    if (snapshot.exists() === false) {
        listContainer.innerHTML = ""
        let noItemMassage = document.createElement('h3')
        noItemMassage.innerText = "ليس هناك مقاضي في قائمة التسوق .... أضف البعض"
        noItemMassage.classList.add('no-item')
        listContainer.appendChild(noItemMassage)
    }
    else {
        clearShoppingList()
       let itemsFromDB = Object.entries(snapshot.val())
        for (let i = 0; i < itemsFromDB.length; i++) {
            let currentItem = itemsFromDB[i]
            addItem(currentItem)
        }
    }

});

function locallyExists(itemEntry) {

}

//this function clears the shopping list when the clear button is clicked
//to prevent duplicates from showing up
function clearShoppingList() {
    listContainer.innerHTML = ""
}
//this function clears the input field when the add button is clicked
function clearInput() {
    input.value= ""
}

function addItem(itemEntry) {

    let itemName = itemEntry[1]
    let itemID = itemEntry[0]


    let itmElement = document.createElement('button')
    itmElement.textContent = itemName;
    //envent listener to remove item from the list and the DB when double-clicked
    itmElement.addEventListener("click", function (){
        let itemReferenceInDB = ref(database,`item/${itemID}`)
        remove(itemReferenceInDB)
    })
    listContainer.appendChild(itmElement)
}


addBtn.addEventListener('click',() => {
    let inputValue = input.value

    if (inputValue != "") {
        addItem(inputValue)
        push(itemInDB, inputValue)
        clearInput()
    }

})





