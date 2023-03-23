
export function SubmitSignIn(event)
{
    event.preventDefault();
    //שמירת כל השדות שיש בתוך הטופס
    let signInInputs = event.target.querySelectorAll("input");

    signInInputs.forEach(element => {
        element.classList.remove('invalid');
    });

    if(signInInputs[0].value == "admin" && signInInputs[1].value == "admin1234admin")
    {
        window.location.href = "/managerProfile.html";
        return;
    }

    if (!CheckUserName(signInInputs[0].value)) {
        alert("שם המשתמש יכול להכיל אותיות לועזיות ומספרים בלבד");
        signInInputs[0].classList.add('invalid');

    }


    if (!signInInputs[1].value =="admin1234admin" && !CheckPassword(signInInputs[1].value)) {
        alert("הסיסמה צריכה להכיל לפחות תו אחד מיוחד/אות גדולה/מספר");
        signInInputs[1].classList.add('invalid');
        return;
    }
    
    let checkInputsArray=JSON.parse(localStorage.getItem('user'));
    let i = 0;

    let ifSignIn = false;
    for (;i<checkInputsArray.length;i++)
    {
        if (checkInputsArray[i].username==signInInputs[0].value && checkInputsArray[i].password==signInInputs[1].value)
        { 
           ifSignIn = true;
           localStorage.setItem("indexPos",JSON.stringify(i)); // נוצר בלוקאל-סטוראג ערך שמסמן את המיקום במערך של המשתמשים שאותו אנחנו נכנסים לפרופיל        
           window.location.href="/profilepage.html";

        }
    }

    if(ifSignIn == false)
    {
        alert("one of the detail is incorrect please , please try again")
    }
    


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

