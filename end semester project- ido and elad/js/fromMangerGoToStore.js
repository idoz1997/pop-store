let goStore = document.getElementById("GoToStoreFromManager");

goStore.addEventListener('click',()=>{
  localStorage.setItem("showNumberInCartLogo",0);
  localStorage.setItem("indexPos",-1);
  window.location.href = "/store.html";
})