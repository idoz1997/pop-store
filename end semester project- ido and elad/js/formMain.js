
import {submitRegister} from '../js/formMethods.js'
import {SubmitSignIn} from '../js/signin.js'
import {LoadCities} from '../js/formMethods.js'
import Users from '../js/users.js';
//אם קיים אלמנט מתאים אז תשייך אירוע 
if (document.querySelector('#sign-up-form'))
    document.querySelector('#sign-up-form').addEventListener('submit', submitRegister);

if(document.querySelector('#sign-in-form'))
document.querySelector('#sign-in-form').addEventListener('submit', SubmitSignIn);


LoadCities();

