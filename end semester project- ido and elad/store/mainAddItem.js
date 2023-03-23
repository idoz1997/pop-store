import Items from "../store/addItem.js";
debugger



let saveItem = document.getElementById("subItem");
let categoryOption = document.getElementById(`categorys`);

const reader = new FileReader(); // פונקציה מובנת לקריאת קובץ

document.querySelector("#image_input").addEventListener("change",function(){ 

  reader.readAsDataURL(this.files[0]);
})


saveItem.addEventListener('click',addItemToStore)

export function addItemToStore(){
  let saveInputs = document.querySelectorAll(`input`);
  let optionCategories = document.getElementById(`categorys`);

  if(idCheck(saveInputs[0].value) == false)
  {
    alert(`חובה טקסט המכיל מספרים ואותיות לועזיות בלבד`)
  }

  if(nameCheck(saveInputs[1].value) == false)
  {
    alert(`חובה טקסט ללא מספרים`)
  }

  if(regularPriceCheck(saveInputs[2].value) == false)
  {
    alert(`חובה מספר חיובי`)
  }

  salePriceCheck(saveInputs[3].value,saveInputs[2].value);


  let createItem = new Items(saveInputs[0].value,saveInputs[1].value,saveInputs[2].value,saveInputs[3].value,saveInputs[4].value,optionCategories.value,reader.result);

  itemArray.push(createItem);
  localStorage.setItem("item",JSON.stringify(itemArray));
    let allUsers = JSON.parse(localStorage.getItem("itemArray")); 
    console.log(allUsers);

    alert("Item as been add successfully")
}


function idCheck(id)
{
  for(let i=0;i<id.length;i++)
  {
    let tav = id[i];

    if((tav>='0' && tav<='9'))
    {
      continue;
    }
    else if(!(tav >= 'A' && tav<='Z') && !(tav>='a'&&tav<='z'))
    {
      return false;     
    }
  }
}

function nameCheck(name)
{
  for(let i=0;i<name.length;i++)
  {
    let tav = name[i];

    if(tav>='0'&&tav<='9')
    {
      return false;
    }
  }
}

function regularPriceCheck(regularPrice)
{

  let saveValue = parseFloat(regularPrice);
  if(saveValue < 0)
  {
    return false;
  }
}

function salePriceCheck(salePrice,regularPrice)
{
  debugger
  let saveValue = parseFloat(salePrice);
  if(saveValue < 0)
  {
    alert(`חובה מספר חיובי`)
    return false;
    
  }

  if(saveValue > regularPrice)
  {
    alert(`חובה שהמחיר מבצע יהיה נמוך מהמחיר הרגיל`)
    return false;
    
  }
}




