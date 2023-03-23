window.onload = () =>{
  localItemData();
}

function localItemData(){
  debugger
  let tableBody = document.getElementById("tableCartItems");
  let itemsCarts = JSON.parse(localStorage.getItem("OnlyItemsAdds"));
  let dataHtml = "";
  let butPos = 0;
  let editPos = 0;

  for (let i=0;i<itemsCarts.length;i++,butPos++) {
      dataHtml+= `<tr><td><img id="imgItem" style="width:50px;height: 50px;" src="${itemsCarts[i].img}" alt="" srcset=""></td><td>${itemsCarts[i].Name}</td><td>${itemsCarts[i].category}</td><td>${itemsCarts[i].descripition}</td><td>${itemsCarts[i].SalePrice}$</td><td><button class="posRemoveItems" id="butPos${butPos}">remove</button></tr>`;       
  }

  
  
  

  tableBody.innerHTML = dataHtml;
  debugger

  RemoveItemFromCart();
}

export function RemoveItemFromCart(){
  let removeItems = document.querySelectorAll(`.posRemoveItems`);
  for(let i=0;i<removeItems.length;i++){
    removeItems[i].addEventListener('click',()=>{
          let onlyItemsInCart = JSON.parse(localStorage.getItem("OnlyItemsAdds"))
          onlyItemsInCart.splice(i,1);
          localStorage.setItem("OnlyItemsAdds",JSON.stringify(onlyItemsInCart));
          let numberLogo = JSON.parse(localStorage.getItem("showNumberInCartLogo"));
          --numberLogo;
          localStorage.setItem("showNumberInCartLogo",numberLogo);
          location.reload();
      })
  }
}