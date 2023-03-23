import Users from "../js/users.js";
console.log(userCreate);
const reader = new FileReader(); // פונקציה מובנת לקריאת קובץ

    document.querySelector("#imgFile").addEventListener("change",function(){
        reader.readAsDataURL(this.files[0]);
    })
    
export function submitRegister(event) {
    event.preventDefault();
    //שמירת כל השדות שיש בתוך הטופס
    let inputs = event.target.querySelectorAll("input");

    //מחיקת העיצוב של השגיאה
    inputs.forEach(element => {
        element.classList.remove('invalid');
    });

    if (!CheckUserName(inputs[0].value)) {
        alert("שם המשתמש יכול להכיל אותיות לועזיות ומספרים בלבד");
        inputs[0].classList.add('invalid');
        return;
    }

    if (!CheckPassword(inputs[1].value)) {
        alert("הסיסמה צריכה להכיל לפחות תו אחד מיוחד/אות גדולה/מספר");
        inputs[2].classList.add('invalid');
        return;
    }

    if (!PasswordsMatch(inputs[1].value, inputs[2].value)) {
        alert("הסיסמאות לא תואמות");
        inputs[1].classList.add('invalid');
        inputs[2].classList.add('invalid');
        return;
    }

    if(!CheckFirstName(inputs[3].value))
    {
        alert("השם הפרטי יכול להכיל אותיות בלבד")
        inputs[3].classList.add('invalid');
        return;
    }

    if(!CheckLastName(inputs[4].value))
    {
        alert("השם משפחה יכול להכיל אותיות בלבד")
        inputs[4].classList.add('invalid');
        return;
    }

    if(!CheckEmail(inputs[5].value))
    {
        alert("כתובת המייל אינה תקינה!")
        inputs[5].classList.add('invalid');
        return;
    } 

    if (!CheckStreet(inputs[8].value))
    {
        alert('רחוב יכול להכיל אותיות בעברית בלבד')
        inputs[8].classList.add(`invalid`);
        return;
    }

    if(!CheckStreetNumber(inputs[9].value))
    {
        alert(`מספר הרחוב יכול להכיל מספרים חיוביים בלבד`)
        inputs[9].classList.add(`invalid`)
        return;
    }
    
    

    
    
    let u = new Users(inputs[0].value,inputs[1].value,inputs[2].value,inputs[3].value,inputs[4].value,inputs[5].value,inputs[6].value,inputs[7].value,inputs[8].value,inputs[9].value,reader.result);
    for(let i=0;i<userCreate.length;i++)
    {
     if(inputs[5].value==userCreate[i].email){
      alert(`האימייל קיים במערכת, נא להזין מייל חדש`);
      inputs[5].classList.add('invalid');
      return;}   
    }
    userCreate.push(u);
    localStorage.setItem("user",JSON.stringify(userCreate));
    let allUsers = JSON.parse(localStorage.getItem("userCreate")); 
    console.log(allUsers);
    
    alert("ברוכים הבאים לחנות")
}

function CheckUserName(userName) {
    for (let i = 0; i < userName.length; i++) {
        let tav = userName[i];
        if (!(tav >= 'a' && tav <= 'z' || tav >= 'A' && tav <= 'Z' || tav >= '0' && tav <= '9'))
            return false;
    }
    return true;
}

function CheckPassword(password) {
    let specialChar = 0;
    let CapitalChar = 0;
    let numCount = 0;

    for (let i = 0; i < password.length; i++) {
        let tav = password[i];
        if ((tav >= '0' && tav <= '9'))
            numCount++;
        if(tav>='A'&& tav<='Z')
        {
            CapitalChar++;
        }
        if(tav>= "$" && tav<="/")
        {
            specialChar++;
        }
    }
    if(specialChar>=1 && CapitalChar>=1 && numCount>=1){
        return true;
    }
    else
    {
        return false;
    }
}

function PasswordsMatch(password1, password2)
 {
    return password1 === password2;
}

function CheckFirstName(FirstName)
{
  for (let i = 0; i < FirstName.length; i++)
   {
      let tav=FirstName[i];
      if (!(tav >= 'a' && tav <= 'z' || tav >= 'A' && tav <= 'Z'))
      return false
   }
   return true;
}

function CheckLastName(LastName)
{
  for (let i = 0; i < LastName.length; i++)
   {
      let tav=LastName[i];
      if (!(tav >= 'a' && tav <= 'z' || tav >= 'A' && tav <= 'Z'))
      return false
   }
   return true;
}


function CheckEmail(email)
{
    let stringEmail=email;
    let emailCheck=stringEmail.indexOf(`.com`)
    if (emailCheck==-1)
    {
    return false;
    }
    for (let i = 0; i < email.length; i++)
    {
      let tav=email[i]
      if (!(tav >= 'a' && tav <= 'z' || tav >= 'A' && tav <= 'Z' || tav=='@' || tav=='.' || tav >= '0' && tav <= '9'))
      return false
    }
    return true;
}

function CheckStreet(street)
{
  for (let i = 0; i<street.length; i++) 
  {
      let tav=street[i]
      if (!((tav >= 'א' && tav <= 'ת') || (tav==' ')))
      return false
  }
  return true;
}

function CheckStreetNumber(streetNumber)
{
    for (let i = 0; i < streetNumber.length; i++) {
        if(!(streetNumber[i]>='0'&& streetNumber[i]<='9'))
        {
            return false;
        }
    }
    return true;
}
export async function LoadCities() {
    let results = await fetch("../data/cities.json");
    let cities = await results.json();
    CreateCitiesList(cities);
}

function CreateCitiesList(cities) {
    //תפיסת האלמנט של הרשימה
    //מעבר על כל הערים
    //option לכל עיר יש ליצור אובייקט 
    //להוסיף את הבחירה לתוך הרשימה
    let citiesList = document.querySelector(`#cities`);
    cities.map((city) => {
        let option = document.createElement('option');
        option.innerText = city.engName;
        citiesList.append(option);
    });
}



export function CheckUsersAllRight()
{
    return userCreate;
}

