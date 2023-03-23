
var counter = 0;
var counterArray = JSON.parse(localStorage.getItem("counterUsers"));
if(counter == 0 && counterArray<1)
{
  var userCreate = new Array();
  counter++;
  localStorage.setItem("counterUsers",counter);
}
else
{
  counter++;
  var userCreate = JSON.parse(localStorage.getItem("user")); // מערך לשמירת המשתמשים , בצורה גלובלית
}



// spread oprator ...g  ==>  g = [1,2,3]
