
import Users from "./users.js";


let checkUserInfoArray=JSON.parse(localStorage.getItem('user'));
let currentUserIndex=parseInt(localStorage.getItem("indexPos"));


document.getElementById("editFirstName").value=checkUserInfoArray[currentUserIndex].firstName;
document.getElementById("editLastName").value=checkUserInfoArray[currentUserIndex].lastName;
document.getElementById("editEmail").value=checkUserInfoArray[currentUserIndex].email;
document.getElementById("editCity").value=checkUserInfoArray[currentUserIndex].city;



let newValueArray=document.querySelectorAll(`input`);
newValueArray[4].addEventListener("click", SaveChanges);

function SaveChanges()
{
    let updateUser = new Users(userCreate[currentUserIndex].username,userCreate[currentUserIndex].password,userCreate[currentUserIndex].conifrmPassword,newValueArray[0].value,newValueArray[1].value,newValueArray[2].value,userCreate[currentUserIndex].birthDate,newValueArray[3].value,userCreate[currentUserIndex].street,userCreate[currentUserIndex].streetNumber,userCreate[currentUserIndex].image);
    userCreate.splice(currentUserIndex,1); // חותכת את התא הספציפי שרוצים מתוך המערך
    userCreate.push(updateUser);
    localStorage.setItem("user",JSON.stringify(userCreate));
    localStorage.setItem("indexPos",JSON.stringify(checkUserInfoArray.length-1));
    window.location.href="/profilepage.html";  
}

