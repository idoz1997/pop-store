let submitBut = document.querySelector("#submitButton");
debugger
let select = document.getElementById('chooseSize');
let saveSize = select.value;
let arrayOfNumbers = new Array();
/// הקוד חוזר על עצמו בגלל שאת אתחול המטריצה לא הצלחנו לעשות ג'אנרי
let matrix = new Array(2);

for(let i=0;i<matrix.length;i++)
{
  matrix[i] = new Array(2)
}

for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < matrix[i].length; j++) {
      matrix[i][j] = -1
  }
}



////////////////////////////////////////////////////////////////
let matrix3 = new Array(3);

for(let i=0;i<matrix3.length;i++)
{
  matrix3[i] = new Array(3)
}

for (let i = 0; i < matrix3.length; i++) {
  for (let j = 0; j < matrix3[i].length; j++) {
      matrix3[i][j] = -1
  }
}

/////////////////////////////////////////////////////////////////

let matrix4 = new Array(4);

for(let i=0;i<matrix4.length;i++)
{
  matrix4[i] = new Array(4)
}

for (let i = 0; i < matrix4.length; i++) {
  for (let j = 0; j < matrix4[i].length; j++) {
      matrix4[i][j] = -1
  }
}

////////////////////////////////////////////////////////////////

let matrix5 = new Array(5);

for(let i=0;i<matrix5.length;i++)
{
  matrix5[i] = new Array(5)
}

for (let i = 0; i < matrix5.length; i++) {
  for (let j = 0; j < matrix5[i].length; j++) {
      matrix5[i][j] = -1
  }
}

//////////////////////////////////////////////////////////////////

let matrix6 = new Array(6);

for(let i=0;i<matrix6.length;i++)
{
  matrix6[i] = new Array(6)
}

for (let i = 0; i < matrix6.length; i++) {
  for (let j = 0; j < matrix6[i].length; j++) {
      matrix6[i][j] = -1
  }
}

//////////////////////////////////////////////////////////////////

let matrix7 = new Array(7);

for(let i=0;i<matrix7.length;i++)
{
  matrix7[i] = new Array(7)
}

for (let i = 0; i < matrix7.length; i++) {
  for (let j = 0; j < matrix7[i].length; j++) {
      matrix7[i][j] = -1
  }
}

//////////////////////////////////////////////////////////////////

let matrix8 = new Array(8);

for(let i=0;i<matrix8.length;i++)
{
  matrix8[i] = new Array(8)
}

for (let i = 0; i < matrix8.length; i++) {
  for (let j = 0; j < matrix8[i].length; j++) {
      matrix8[i][j] = -1
  }
}

//////////////////////////////////////////////////////////////////

let matrix9 = new Array(9);

for(let i=0;i<matrix9.length;i++)
{
  matrix9[i] = new Array(9)
}

for (let i = 0; i < matrix9.length; i++) {
  for (let j = 0; j < matrix9[i].length; j++) {
      matrix9[i][j] = -1
  }
}
console.log(matrix);

/////////////////////////////////////////////////////////////////
select.addEventListener('click',()=>{
  
  if(select.value == 2)
  {

    CreateBoard(2);
    recognizeClickOnTd(2)

  }
  else if(select.value == 3)
  {
    CreateBoard(3);
    recognizeClickOnTd3()
  }
  else if(select.value == 4)
  {
    CreateBoard(4);
    recognizeClickOnTd4()
  }
  else if(select.value == 5)
  {
    CreateBoard(5);
    recognizeClickOnTd5()
  }
  else if(select.value == 6)
  {
    CreateBoard(6);
    recognizeClickOnTd6()
  }
  else if(select.value == 7)
  {
    CreateBoard(7);
    recognizeClickOnTd7()
  }
  else if(select.value == 8)
  {
    CreateBoard(8);
    recognizeClickOnTd8()
  }
  else if(select.value == 9)
  {
    CreateBoard(9);
    recognizeClickOnTd9()
  }
})




function CreateBoard(size)
{ 

  let numbers = new Array();
  
  let trIdLocation = 1;
  let tdIdLocation = 1;
  let board = document.getElementById("tableData");
  let table="";

  for(let row=1;row<=size;row++){
    table += "<tr>"
    for(let cols=1;cols<=size;cols++)
    {
      let n = Math.floor(Math.random() * (100 - 1) + 1) //הגרלת מספר רנדומלי
      /*
          בדיקה שאין כפילות
          אם כן להגריל מספר חדש
      */
      let isRandom = true
      for (let i = 0; i < numbers.length; i++) {
          if (numbers[i] == n) {
              isRandom = false
              cols--
              break
          }
      }

      if (isRandom == true) {
          table += `<td id="${tdIdLocation}" class="${trIdLocation}">${n}</td>`
          tdIdLocation++;
          numbers.push(n)
      }
    }

    trIdLocation++;
    table += "</tr>";
  }

  board.innerHTML = table;

}

//////////////////////////////////////////////////////////////
function recognizeClickOnTd(size)
{
  let tds = document.querySelectorAll(`td`)
  //שיוך אירוע לחיצה לכל תא בטבלה
  tds.forEach(td => { 
    td.addEventListener(`click`, markAsFilled)
  })

  

  
}

//////////////////////////////////////////////////////////////
function recognizeClickOnTd3(size)
{
  let tds = document.querySelectorAll(`td`)
  //שיוך אירוע לחיצה לכל תא בטבלה
  tds.forEach(td => { 
    td.addEventListener(`click`, markAsFilled3)
  })

  

  
}

//////////////////////////////////////////////////////////////
function recognizeClickOnTd4(size)
{
  let tds = document.querySelectorAll(`td`)
  //שיוך אירוע לחיצה לכל תא בטבלה
  tds.forEach(td => { 
    td.addEventListener(`click`, markAsFilled4)
  })

  

  
}

//////////////////////////////////////////////////////////////
function recognizeClickOnTd5(size)
{
  let tds = document.querySelectorAll(`td`)
  //שיוך אירוע לחיצה לכל תא בטבלה
  tds.forEach(td => { 
    td.addEventListener(`click`, markAsFilled5)
  })

  

  
}
////////////////////////////////////////////////////////////
function recognizeClickOnTd6(size)
{
  let tds = document.querySelectorAll(`td`)
  //שיוך אירוע לחיצה לכל תא בטבלה
  tds.forEach(td => { 
    td.addEventListener(`click`, markAsFilled6)
  })

  

  
}

/////////////////////////////////////////////////////////
function recognizeClickOnTd7(size)
{
  let tds = document.querySelectorAll(`td`)
  //שיוך אירוע לחיצה לכל תא בטבלה
  tds.forEach(td => { 
    td.addEventListener(`click`, markAsFilled7)
  })

  

  
}

/////////////////////////////////////////////////////////
function recognizeClickOnTd8(size)
{
  let tds = document.querySelectorAll(`td`)
  //שיוך אירוע לחיצה לכל תא בטבלה
  tds.forEach(td => { 
    td.addEventListener(`click`, markAsFilled8)
  })

  

  
}
//////////////////////////////////////////////////////////
function recognizeClickOnTd9(size)
{
  let tds = document.querySelectorAll(`td`)
  //שיוך אירוע לחיצה לכל תא בטבלה
  tds.forEach(td => { 
    td.addEventListener(`click`, markAsFilled9)
  })

  

  
}
/////////////////////////////////////////////////////////


//הפונקציה שמתבצעת לאחר לחיצהעל תא מסוים
function markAsFilled(event){
    debugger
    //התא שלחצנו עליו
    let td = event.target 
    //המספר בתוך התא
    let number = parseInt(td.innerHTML)
    
    let shufNumber = parseInt(document.getElementById("numberRaffle").innerHTML);

    

    if(shufNumber == number)
    {   
      td.classList.add("hitTarget");
      arrayOfNumbers.push(td.id);

      
      let counterCatch = 0;
      for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
          counterCatch++;
          for(let m =0;m<arrayOfNumbers.length;m++)
          {         
            if(counterCatch == arrayOfNumbers[m])
            {
              if(matrix[i][j] == -1)
              {
                matrix[i][j] = counterCatch;
              }
              
            }
          }
              
        }
      }

      let colCheck = true;
      let rowCheck = true;

      for(let i=0;i<matrix.length;i++)
      {
        for(let j=0;j<matrix[i].length-1;j++)
        {
          if(matrix[i][j]==-1 || matrix[i][j+1]==-1)
             {
               rowCheck = false;
             }
        }

        if(rowCheck == true)
         {
           window.location.href = "/winPage.html";
         }
        
      }

      for(let i=0;i<matrix.length;i++)
      {
        for(let j=0;j<matrix[i].length-1;j++)
        {
          if(matrix[i][j]==-1 || matrix[i+1][j]==-1)
             {
               colCheck = false;
             }
        }

        if(colCheck == true)
         {
           window.location.href = "/winPage.html";
         }
        
      }

    
      console.log(matrix)
    }
    else
    {
      alert("This Number Not Ruffle")
      notHit++;
      if(notHit==3)
      {
        alert("you failed the game try again")
        location.reload();
      }
    }


    

}

///////////////////////////////////////////////////////////////////




//הפונקציה שמתבצעת לאחר לחיצהעל תא מסוים
function markAsFilled3(event){
    debugger
    //התא שלחצנו עליו
    let td = event.target 
    //המספר בתוך התא
    let number = parseInt(td.innerHTML)
    
    let shufNumber = parseInt(document.getElementById("numberRaffle").innerHTML);

    

    if(shufNumber == number)
    {   
      td.classList.add("hitTarget");
      arrayOfNumbers.push(td.id);

      
      let counterCatch = 0;
      for (let i = 0; i < matrix3.length; i++) {
        for (let j = 0; j < matrix3[i].length; j++) {
          counterCatch++;
          for(let m =0;m<arrayOfNumbers.length;m++)
          {         
            if(counterCatch == arrayOfNumbers[m])
            {
              if(matrix3[i][j] == -1)
              {
                matrix3[i][j] = counterCatch;
              }
              
            }
          }
              
        }
      }

      let colCheck = true;
      let rowCheck = true;

      for(let i=0;i<matrix3.length;i++)
      {
        for(let j=0;j<matrix3[i].length-1;j++)
        {
          if(matrix3[i][j]==-1 || matrix3[i][j+1]==-1)
             {
               rowCheck = false;
             }
        }

        if(rowCheck == true)
         {
           window.location.href = "/winPage.html";
         }
        
      }

      for(let i=0;i<matrix3.length;i++)
      {
        for(let j=0;j<matrix3.length;j++)
        {
          if(matrix3[j][i]==-1)
             {
               colCheck = false;
             }
        }

        if(colCheck == true)
         {
           window.location.href = "/winPage.html";
         }
        
      }

    
      console.log(matrix3)
    }
    else
    {
      alert("This Number Not Ruffle")
      notHit++;
      if(notHit==3)
      {
        alert("you failed the game try again")
        location.reload();
      }
    }


    

}


////////////////////////////////////////////////////////////////

function markAsFilled4(event){
  debugger
  //התא שלחצנו עליו
  let td = event.target 
  //המספר בתוך התא
  let number = parseInt(td.innerHTML)
  
  let shufNumber = parseInt(document.getElementById("numberRaffle").innerHTML);

  

  if(shufNumber == number)
  {   
    td.classList.add("hitTarget");
    arrayOfNumbers.push(td.id);

    
    let counterCatch = 0;
    for (let i = 0; i < matrix4.length; i++) {
      for (let j = 0; j < matrix4[i].length; j++) {
        counterCatch++;
        for(let m =0;m<arrayOfNumbers.length;m++)
        {         
          if(counterCatch == arrayOfNumbers[m])
          {
            if(matrix4[i][j] == -1)
            {
              matrix4[i][j] = counterCatch;
            }
            
          }
        }
            
      }
    }

    let colCheck = true;
    let rowCheck = true;

    for(let i=0;i<matrix4.length;i++)
    {
      for(let j=0;j<matrix4[i].length-1;j++)
      {
        if(matrix4[i][j]==-1 || matrix4[i][j+1]==-1)
           {
             rowCheck = false;
           }
      }

      if(rowCheck == true)
       {
         window.location.href = "/winPage.html";
       }
      
    }

    for(let i=0;i<matrix4.length;i++)
      {
        for(let j=0;j<matrix4.length;j++)
        {
          if(matrix4[j][i]==-1)
             {
               colCheck = false;
             }
        }

        if(colCheck == true)
         {
           window.location.href = "/winPage.html";
         }
        
      }

  
    console.log(matrix4)
  }
  else
  {
    alert("This Number Not Ruffle")
    notHit++;
    if(notHit==3)
    {
      alert("you failed the game try again")
      location.reload();
    }
  }


  

}


/////////////////////////////////////////////////////////////////////

function markAsFilled5(event){
  debugger
  //התא שלחצנו עליו
  let td = event.target 
  //המספר בתוך התא
  let number = parseInt(td.innerHTML)
  
  let shufNumber = parseInt(document.getElementById("numberRaffle").innerHTML);

  

  if(shufNumber == number)
  {   
    td.classList.add("hitTarget");
    arrayOfNumbers.push(td.id);

    
    let counterCatch = 0;
    for (let i = 0; i < matrix5.length; i++) {
      for (let j = 0; j < matrix5[i].length; j++) {
        counterCatch++;
        for(let m =0;m<arrayOfNumbers.length;m++)
        {         
          if(counterCatch == arrayOfNumbers[m])
          {
            if(matrix5[i][j] == -1)
            {
              matrix5[i][j] = counterCatch;
            }
            
          }
        }
            
      }
    }

    let colCheck = true;
    let rowCheck = true;

    for(let i=0;i<matrix5.length;i++)
    {
      for(let j=0;j<matrix5[i].length-1;j++)
      {
        if(matrix5[i][j]==-1 || matrix5[i][j+1]==-1)
           {
             rowCheck = false;
           }
      }

      if(rowCheck == true)
       {
         window.location.href = "/winPage.html";
       }
      
    }

    for(let i=0;i<matrix5.length;i++)
      {
        for(let j=0;j<matrix5.length;j++)
        {
          if(matrix5[j][i]==-1)
             {
               colCheck = false;
             }
        }

        if(colCheck == true)
         {
           window.location.href = "/winPage.html";
         }
        
      }

  
    console.log(matrix5)
  }
  else
  {
    alert("This Number Not Ruffle")
    notHit++;
    if(notHit==3)
    {
      alert("you failed the game try again")
      location.reload();
    }
  }


  

}



//////////////////////////////////////////////////////////////

function markAsFilled6(event){
  debugger
  //התא שלחצנו עליו
  let td = event.target 
  //המספר בתוך התא
  let number = parseInt(td.innerHTML)
  
  let shufNumber = parseInt(document.getElementById("numberRaffle").innerHTML);

  

  if(shufNumber == number)
  {   
    td.classList.add("hitTarget");
    arrayOfNumbers.push(td.id);

    
    let counterCatch = 0;
    for (let i = 0; i < matrix6.length; i++) {
      for (let j = 0; j < matrix6[i].length; j++) {
        counterCatch++;
        for(let m =0;m<arrayOfNumbers.length;m++)
        {         
          if(counterCatch == arrayOfNumbers[m])
          {
            if(matrix6[i][j] == -1)
            {
              matrix6[i][j] = counterCatch;
            }
            
          }
        }
            
      }
    }

    let colCheck = true;
    let rowCheck = true;

    for(let i=0;i<matrix6.length;i++)
    {
      for(let j=0;j<matrix6[i].length-1;j++)
      {
        if(matrix6[i][j]==-1 || matrix6[i][j+1]==-1)
           {
             rowCheck = false;
           }
      }

      if(rowCheck == true)
       {
         window.location.href = "/winPage.html";
       }
      
    }

    for(let i=0;i<matrix6.length;i++)
      {
        for(let j=0;j<matrix6.length;j++)
        {
          if(matrix6[j][i]==-1)
             {
               colCheck = false;
             }
        }

        if(colCheck == true)
         {
           window.location.href = "/winPage.html";
         }
        
      }

  
    console.log(matrix6)
  }
  else
  {
    alert("This Number Not Ruffle")
    notHit++;
    if(notHit==3)
    {
      alert("you failed the game try again")
      location.reload();
    }
  }


  

}


//////////////////////////////////////////////////////////////


function markAsFilled7(event){
  debugger
  //התא שלחצנו עליו
  let td = event.target 
  //המספר בתוך התא
  let number = parseInt(td.innerHTML)
  
  let shufNumber = parseInt(document.getElementById("numberRaffle").innerHTML);

  

  if(shufNumber == number)
  {   
    td.classList.add("hitTarget");
    arrayOfNumbers.push(td.id);

    
    let counterCatch = 0;
    for (let i = 0; i < matrix7.length; i++) {
      for (let j = 0; j < matrix7[i].length; j++) {
        counterCatch++;
        for(let m =0;m<arrayOfNumbers.length;m++)
        {         
          if(counterCatch == arrayOfNumbers[m])
          {
            if(matrix7[i][j] == -1)
            {
              matrix7[i][j] = counterCatch;
            }
            
          }
        }
            
      }
    }

    let colCheck = true;
    let rowCheck = true;

    for(let i=0;i<matrix7.length;i++)
    {
      for(let j=0;j<matrix7[i].length-1;j++)
      {
        if(matrix7[i][j]==-1 || matrix7[i][j+1]==-1)
           {
             rowCheck = false;
           }
      }

      if(rowCheck == true)
       {
         window.location.href = "./winPage.html";
       }
      
    }

    for(let i=0;i<matrix7.length;i++)
      {
        for(let j=0;j<matrix7.length;j++)
        {
          if(matrix7[j][i]==-1)
             {
               colCheck = false;
             }
        }

        if(colCheck == true)
         {
           window.location.href = "./winPage.html";
         }
        
      }

  
    console.log(matrix7)
  }
  else
  {
    alert("This Number Not Ruffle")
    notHit++;
    if(notHit==3)
    {
      alert("you failed the game try again")
      location.reload();
    }
  }


  

}


////////////////////////////////////////////////////////////////

function markAsFilled8(event){
  debugger
  //התא שלחצנו עליו
  let td = event.target 
  //המספר בתוך התא
  let number = parseInt(td.innerHTML)
  
  let shufNumber = parseInt(document.getElementById("numberRaffle").innerHTML);

  

  if(shufNumber == number)
  {   
    td.classList.add("hitTarget");
    arrayOfNumbers.push(td.id);

    
    let counterCatch = 0;
    for (let i = 0; i < matrix8.length; i++) {
      for (let j = 0; j < matrix8[i].length; j++) {
        counterCatch++;
        for(let m =0;m<arrayOfNumbers.length;m++)
        {         
          if(counterCatch == arrayOfNumbers[m])
          {
            if(matrix8[i][j] == -1)
            {
              matrix8[i][j] = counterCatch;
            }
            
          }
        }
            
      }
    }

    let colCheck = true;
    let rowCheck = true;

    for(let i=0;i<matrix8.length;i++)
    {
      for(let j=0;j<matrix8[i].length-1;j++)
      {
        if(matrix8[i][j]==-1 || matrix8[i][j+1]==-1)
           {
             rowCheck = false;
           }
      }

      if(rowCheck == true)
       {
         window.location.href = "/winPage.html";
       }
      
    }

    for(let i=0;i<matrix8.length;i++)
      {
        for(let j=0;j<matrix8.length;j++)
        {
          if(matrix8[j][i]==-1)
             {
               colCheck = false;
             }
        }

        if(colCheck == true)
         {
           window.location.href = "/winPage.html";
         }
        
      }

  
    console.log(matrix8)
  }
  else
  {
    alert("This Number Not Ruffle")
    notHit++;
    if(notHit==3)
    {
      alert("you failed the game try again")
      location.reload();
    }
  }


  

}


//////////////////////////////////////////////////////////////////

function markAsFilled9(event){
  debugger
  //התא שלחצנו עליו
  let td = event.target 
  //המספר בתוך התא
  let number = parseInt(td.innerHTML)
  
  let shufNumber = parseInt(document.getElementById("numberRaffle").innerHTML);

  

  if(shufNumber == number)
  {   
    td.classList.add("hitTarget");
    arrayOfNumbers.push(td.id);

    
    let counterCatch = 0;
    for (let i = 0; i < matrix9.length; i++) {
      for (let j = 0; j < matrix9[i].length; j++) {
        counterCatch++;
        for(let m =0;m<arrayOfNumbers.length;m++)
        {         
          if(counterCatch == arrayOfNumbers[m])
          {
            if(matrix9[i][j] == -1)
            {
              matrix9[i][j] = counterCatch;
            }
            
          }
        }
            
      }
    }

    let colCheck = true;
    let rowCheck = true;

    for(let i=0;i<matrix9.length;i++)
    {
      for(let j=0;j<matrix9[i].length-1;j++)
      {
        if(matrix9[i][j]==-1 || matrix9[i][j+1]==-1)
           {
             rowCheck = false;
           }
      }

      if(rowCheck == true)
       {
         window.location.href = "/winPage.html";
       }
      
    }

    for(let i=0;i<matrix9.length;i++)
      {
        for(let j=0;j<matrix9.length;j++)
        {
          if(matrix9[j][i]==-1)
             {
               colCheck = false;
             }
        }

        if(colCheck == true)
         {
           window.location.href = "/winPage.html";
         }
        
      }

  
    console.log(matrix9)
  }
  else
  {
    alert("This Number Not Ruffle")
    notHit++;
    if(notHit==3)
    {
      alert("you failed the game try again")
      location.reload();
    }
  }


  

}