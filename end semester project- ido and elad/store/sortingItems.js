
let select = document.getElementById(`sortingItems`); // תפיסת האופציות של הקטגוריות

select.addEventListener('click',()=>{ // מוסיף אירוע לכל סוג של קטגורייה

  if(select.value == "By Price")
  {
    let i, element;
    let sortByCategory = new Array();
    sortByCategory = JSON.parse(localStorage.getItem("item"));
  
    for (let sortedElements = 1; sortedElements < sortByCategory.length;sortedElements++) // פונקציה לסידור מערך
    {
      
      element = sortByCategory[sortedElements];
      i = sortedElements - 1;
      while (i >= 0 && sortByCategory[i].RegularPrice > element.RegularPrice)
      {
        
        sortByCategory[i + 1] = sortByCategory[i];
        i--;
      } 

      sortByCategory[i + 1] = element;
    }
    debugger  
    
    localStorage.setItem("ByPrice",JSON.stringify(sortByCategory)); // יוצרים מערך חדש בלוקאלסוטרג שהוא מסודר
    let loadByPrice = JSON.parse(localStorage.getItem("ByPrice"));

    loadItems(loadByPrice); // פונקצייה שמעלה את המוצרים לדף החנות
    
    reloadCartInItems(loadByPrice);
  }
  if(select.value == "Stranger Things")
  {
    let strangerThingsArray = new Array(); // מערך לתפיסת האובייקטים עם השם המתאים
    sortByCategory = JSON.parse(localStorage.getItem("item"));// המערך הגדול של המוצרים
    for (let i = 0; i < sortByCategory.length; i++) {
      if(sortByCategory[i].category == "Stranger Things") // תנאי בדיקה שאם המוצר מתאים לקטגורייה
      {
        strangerThingsArray.push(sortByCategory[i])// מוסיפים אותו למערך החדש שבנינו
      }
      
    }

    localStorage.setItem("StrangerThings",JSON.stringify(strangerThingsArray)); // מעלים את המערך החדש ללוקאלסטוראג
    let loadStrangerThings = JSON.parse(localStorage.getItem("StrangerThings"));

    loadItems(loadStrangerThings);// טוענים את המוצרים שנמצאים במערך המתאים

    reloadCartInItems(loadStrangerThings);
  }
  else if(select.value == "Dragon Ball Z")
  {
    let DragonBall = new Array();
    sortByCategory = JSON.parse(localStorage.getItem("item"));
    for (let i = 0; i < sortByCategory.length; i++) {
      
      if(sortByCategory[i].category == "Dragon Ball Z")
      {
        DragonBall.push(sortByCategory[i])
      }
      
    }

    localStorage.setItem("DragonBallZ",JSON.stringify(DragonBall));
    let loadDragonBallZ = JSON.parse(localStorage.getItem("DragonBallZ"));

    loadItems(loadDragonBallZ);

    reloadCartInItems(loadDragonBallZ);
  }
  else if(select.value == "Pokemon")
  {
    let Pokemon = new Array();
    sortByCategory = JSON.parse(localStorage.getItem("item"));
    for (let i = 0; i < sortByCategory.length; i++) {
      
      if(sortByCategory[i].category == "Pokemon")
      {
        Pokemon.push(sortByCategory[i])
      }
      
    }

    localStorage.setItem("Pokemon",JSON.stringify(Pokemon));
    let loadPokemon = JSON.parse(localStorage.getItem("Pokemon"));

    loadItems(loadPokemon);

    reloadCartInItems(loadPokemon);
  }
})

