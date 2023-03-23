let itemAddToCart = JSON.parse(localStorage.getItem("OnlyItemsAdds"));
let sumPrices = 0;
for(let i=0;i<itemAddToCart.length;i++)
{
  sumPrices+=parseInt(itemAddToCart[i].SalePrice);
}

document.getElementById("sumPrice").innerHTML += " " +sumPrices + "$";


let buyNow = document.getElementById("BuyNow");

buyNow.addEventListener('click',()=>{
  alert("Thank You for your purchase")
  location.reload();
})
