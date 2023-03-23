let backToProfile = document.getElementById("showUserOnHomePage");
let indexPosOfUser = JSON.parse(localStorage.getItem("indexPos"));
backToProfile.addEventListener('click',()=>{
  if(indexPosOfUser == -1)
  {
    window.location.href = "./managerProfile.html";
  }
  else
  {
    window.location.href = "./profilepage.html";
  }
})