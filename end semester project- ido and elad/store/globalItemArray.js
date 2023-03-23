
debugger
var counter = 0;
var counterArray = JSON.parse(localStorage.getItem("counterItemArray"));
if(counter == 0 && counterArray<1)
{
  var itemArray = new Array();
  counter++;
  localStorage.setItem("counterItemArray",counter);
}
else
{
  counter++;
  var itemArray = JSON.parse(localStorage.getItem("item"));
}







