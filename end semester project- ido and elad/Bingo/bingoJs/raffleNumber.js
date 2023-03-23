let raffleButton = document.getElementById("raffleButton");

raffleButton.addEventListener('click',()=>{

  document.getElementById("numberRaffle").innerHTML= shuffleNumbers();
})

function shuffleNumbers(){
  let notDuplicateNumbers = new Array();
  let itsRandom = true;

  
  let rndNumber = Math.floor(Math.random()*(100-1)+1);
    for(let i=0;i<notDuplicateNumbers.length;i++)
    {
      
      while(itsRandom == false)
      {
        if(rndNumber == notDuplicateNumbers[i])
        {
         itsRandom = false;
         rndNumber = Math.floor(Math.random()*(100-1)+1);
        }
      }
      
    }

    if(itsRandom == true)
    {
      notDuplicateNumbers.push(rndNumber);
    }

    return rndNumber;
}

