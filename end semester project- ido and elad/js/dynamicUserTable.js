window.onload = () =>{
    localTableDate();
    localItemsData();
}


function localTableDate(){
    let tableBody = document.getElementById("tableUserData");
    let userShows = JSON.parse(localStorage.getItem("user"));
    let dataHtml = "";
    let butPos = 0;
    let editPos = 0;

    for (let i=0;i<userShows.length;i++,butPos++) {
        dataHtml+= `<tr><td>${userShows[i].username}</td><td>${userShows[i].firstName} ${userShows[i].lastName}</td><td>${userShows[i].birthDate}</td><td>${userShows[i].street} ${userShows[i].streetNumber}</td><td>${userShows[i].email}</td><td><button class="posRemove" id="butPos${butPos}">remove</button> / <button class="posEdit" id="editPos${editPos}">Edit</button></tr>`;       
    }

    
    
    

    tableBody.innerHTML = dataHtml;
    EditLocalStoragePos();
    RemoveUserFromLocalStorage();
}

function localItemsData(){
     let tableBody = document.getElementById("tableItemsData");
     let itemsShows = JSON.parse(localStorage.getItem("item"));
     let dataHtml = "";
     let butPos = 0;
     let editPos = 0;

     for (let i=0;i<itemsShows.length;i++,butPos++) {
         dataHtml+= `<tr><td>${itemsShows[i].productId}</td><td>${itemsShows[i].Name}</td><td>${itemsShows[i].RegularPrice}</td><td>${itemsShows[i].SalePrice}</td><td>${itemsShows[i].descripition}</td><td><button class="posRemoves" id="butPos${butPos}">remove</button> / <button class="itemEdit" id="editPos${editPos}">Edit</button></tr>`;       
     }

    
    
    

    tableBody.innerHTML = dataHtml;

    EditItemsInLocalStorage();
    RemoveItemsFromLocalStorage();
}

function EditItemsInLocalStorage()
{
    let editItemsButton = document.querySelectorAll(`.itemEdit`);
    for(let i=0;i<editItemsButton.length;i++)
    {
        editItemsButton[i].addEventListener('click',()=>{
            localStorage.setItem("posItemEditArray",JSON.stringify(i));
            window.open("./editItem.html");
        })
    }
}

function EditLocalStoragePos(){
    let editUserButtons = document.querySelectorAll(`.posEdit`);
    for(let i=0;i<editUserButtons.length;i++){

        editUserButtons[i].addEventListener('click',()=>{
           localStorage.setItem("indexPos",JSON.stringify(i)); // נוצר בלוקאל-סטוראג ערך שמסמן את המיקום במערך של המשתמשים שאותו אנחנו נכנסים לפרופיל        
           window.open("/editProfilePage.html");
        })
        
    }
   
}

function RemoveItemsFromLocalStorage(){
    let removeItems = document.querySelectorAll(`.posRemoves`);
    for(let i=0;i<removeItems.length;i++){
        removeItems[i].addEventListener('click',()=>{
            itemArray.splice(i,1);
            localStorage.setItem("item",JSON.stringify(itemArray));
            location.reload();
        })
    }
}

function RemoveUserFromLocalStorage(){
    let removeUser = document.querySelectorAll(`.posRemove`);
    for(let i=0;i<removeUser.length;i++){
        removeUser[i].addEventListener('click',()=>{
            userCreate.splice(i,1);
            localStorage.setItem("user",JSON.stringify(userCreate));
            location.reload();
        })
    }
}