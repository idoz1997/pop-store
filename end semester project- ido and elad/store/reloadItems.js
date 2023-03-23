debugger
let itemShowOnStore = JSON.parse(localStorage.getItem("item")); // תופסים את מערך המוצרים שלנו

let cartCounter;

window.onload = () =>
{
loadItems(itemShowOnStore);
}




function loadItems(arrayItems) // פונקצייה להעלאת מוצרים לדף החנות
{
  let divCatchItems = document.getElementById("containerOfItems");// תופסים את הדיב שרוצים להוסיף אליו
  let htmlBodyItems = "";

  for(let i=0;i<arrayItems.length;i++)
  {
    
    htmlBodyItems += `<div id="itemsCards" class="item-cards">
  <div class="border-Card">
      <h1 id="productName">${arrayItems[i].Name}</h1>
      <div class="imgProduct">
          <img id="imgItem" style="width:200px;height: 200px;" src="${arrayItems[i].img}" alt="" srcset="">
      </div>
      <div>
          <p>Regular Price: ${arrayItems[i].RegularPrice}$</p>
          <p>Sale Price: ${arrayItems[i].SalePrice}$</p>
          <p>category: ${arrayItems[i].category} </p>
      </div>
  
      <button type="submit" class="buttonLocation">Add To Cart</button>
  </div>
  </div>`
  }

  divCatchItems.innerHTML = htmlBodyItems;
  
  
  
}


