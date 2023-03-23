let numbers = JSON.parse(localStorage.getItem("showNumberInCartLogo"));

let itemsInCart;

let indexUser = JSON.parse(localStorage.getItem("indexPos")); /// תפיסת המיקום המשתמש במערך
let users = JSON.parse(localStorage.getItem("user"))// תפיסת מערך המתשמשים

if(indexUser<0)
{
  document.getElementById("showUserOnHomePage").innerHTML +=" Admin Click To Go profile"
}
else
{
  document.getElementById("showUserOnHomePage").innerHTML +=" "+ users[indexUser].username + " Click To Go profile"
  // ואנחנו מוסיפים לתוך ה html את השם של המשתמש
}

