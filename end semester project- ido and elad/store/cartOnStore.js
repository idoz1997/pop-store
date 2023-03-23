debugger

let items = JSON.parse(localStorage.getItem("item"))

let number = JSON.parse(localStorage.getItem("showNumberInCartLogo"));
if(number<1){
  cartCounter = 0;
  itemsInCart = new Array();
}
else
{
  cartCounter = number;
  itemsInCart = JSON.parse(localStorage.getItem("OnlyItemsAdds"));
}
  


reloadCartInItems(items);
justShowNumberLogo();




export function reloadCartInItems(items)
{
  loadItems(items); // כדי שנוכל להעלות קודם את המוצרים ורק אז לצות את הכפתורים
  let buttonAddToCart = document.querySelectorAll('.buttonLocation');
  
  
  for(let i=0;i<buttonAddToCart.length;i++)
  {
    debugger
    buttonAddToCart[i].addEventListener('click',()=>{
      debugger
      cartCounter++;
      let sumOfItems = cartCounter;
      localStorage.setItem("showNumberInCartLogo",sumOfItems);
      
      itemsInCart.push(items[i]);
      localStorage.setItem("OnlyItemsAdds",JSON.stringify(itemsInCart));
      
      justShowNumberLogo();

    })
  }
  



  window.stop();
}

function justShowNumberLogo(){
  let logoNumberCart = JSON.parse(localStorage.getItem("showNumberInCartLogo"))
      document.getElementById("numberOfitemsInCart").innerHTML = logoNumberCart;
}