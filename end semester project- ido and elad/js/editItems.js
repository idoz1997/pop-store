import Items from "../store/addItem.js"

let checkItemsInfoArray=JSON.parse(localStorage.getItem('item'));
let currentItemsIndex=parseInt(localStorage.getItem("posItemEditArray"));


document.getElementById("editProductId").value=checkItemsInfoArray[currentItemsIndex].productId;
document.getElementById("editName").value=checkItemsInfoArray[currentItemsIndex].Name;
document.getElementById("editRegularPrice").value=checkItemsInfoArray[currentItemsIndex].RegularPrice;
document.getElementById("editSalePrice").value=checkItemsInfoArray[currentItemsIndex].SalePrice;
document.getElementById("editDescription").value=checkItemsInfoArray[currentItemsIndex].descripition;


let newValueArray=document.querySelectorAll(`input`);
newValueArray[5].addEventListener("click", SaveChanges);

function SaveChanges()
{
    let updateItem = new Items(newValueArray[0].value,newValueArray[1].value,newValueArray[2].value,newValueArray[3].value,newValueArray[4].value,checkItemsInfoArray[currentItemsIndex].category,checkItemsInfoArray[currentItemsIndex].img);
    itemArray.splice(currentItemsIndex,1); // חותכת את התא הספציפי שרוצים מתוך המערך
    itemArray.push(updateItem);
    localStorage.setItem("item",JSON.stringify(itemArray));
    localStorage.setItem("posItemEditArray",JSON.stringify(checkItemsInfoArray.length-1));
    window.location.href="/managerProfile.html";  
}