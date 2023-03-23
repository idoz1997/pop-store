



let checkUserInfoArray=JSON.parse(localStorage.getItem('user')); // קורא למערך מתוך הלוקאל - סטוראג ושומר אותו תחת משתנה שאיתו נעשה הצגה לדף פרופיל
let currentUserIndex=parseInt(localStorage.getItem("indexPos"));// ממיר את הטקסט - שזה המיקום במערך למספר

let pic = document.getElementById("userPic");

pic.src = checkUserInfoArray[currentUserIndex].image;

let sessionUser=checkUserInfoArray[currentUserIndex];
sessionStorage.setItem("firstName",sessionUser.firstName);
let profileFirstNameItem = sessionStorage.getItem("firstName"); 

sessionStorage.setItem("lastName",sessionUser.lastName);
let profileLastNameItem = sessionStorage.getItem("lastName"); 

sessionStorage.setItem("email", sessionUser.email);
let profileEmailItem=sessionStorage.getItem("email");

sessionStorage.setItem("birthDate", sessionUser.birthDate);
let profileBirthDateItem=sessionStorage.getItem("birthDate");

sessionStorage.setItem("city",sessionUser.city);
let profileCityItem=sessionStorage.getItem("city");

sessionStorage.setItem("FullName",sessionUser.firstName + " " + sessionUser.lastName)
let fullNameItem = sessionStorage.getItem("FullName");


let profileFullName = document.getElementById("profileFullName");
let profileFirstName=document.getElementById("firstname");
let profileLastName=document.getElementById("lastname");
let profileEmail=document.getElementById("email");
let profileBirthDate=document.getElementById("birthdate");
let profileCity=document.getElementById("city");

profileFullName.innerHTML=fullNameItem;
profileFirstName.innerHTML=profileFirstNameItem;
profileLastName.innerHTML=profileLastNameItem;
profileEmail.innerHTML=profileEmailItem;
profileBirthDate.innerHTML=profileBirthDateItem;
profileCity.innerHTML=profileCityItem;







