export default class Users {
username;
password;
image;
firstName;
lastName;
email;
birthDate;
city;
street;
streetNumber;

constructor(username, password, conifrmPassword,firstName,lastName,email,birthDate,city,street,streetNumber,image)
{
    this.setUsername(username);
    this.setPassowrd(password);
    this.setConfirmPassword(conifrmPassword);
    this.setFirstName(firstName);
    this.setLastName(lastName);
    this.setEmail(email);
    this.setBirthDate(birthDate);
    this.setCity(city);
    this.setStreet(street);
    this.setStreetNumber(streetNumber); 
    this.setImage(image);
}

setUsername(username)
{
  this.username=username;
}

setPassowrd(password)
{
    this.password=password;
}

setConfirmPassword(conifrmPassword)
{
    this.conifrmPassword=conifrmPassword;
}

setFirstName(firstName)
{
    this.firstName=firstName;
}

setLastName(lastName)
{
    this.lastName=lastName;
}

setEmail(email)
{

    this.email=email;
    
}

GetEmail(){
    return this.email;
}

setBirthDate(birthDate)
{
    this.birthDate=birthDate;
}

setCity(city)
{
    this.city=city;
}


setStreet(street)
{
    this.street=street;
}

setStreetNumber(streetNumber)
{
    this.streetNumber=streetNumber;
}

setImage(image)
{
    this.image=image;
}

GetFirstName(){
    return this.firstName;
}

GetLastName(){
    return this.lastName;
}

getFullName()
{
    let fullName =`${this.GetFirstName} ${this.GetLastName}`;
    return fullName;
}

GetBirthDate()
{
    return this.birthDate;
}

UpdateDetails(username, password, conifrmPassword,firstName,lastName,email,birthDate,city,street,streetNumber,image)
{
    this.setUsername(username);
    this.setPassowrd(password);
    this.setConfirmPassword(conifrmPassword);
    this.setFirstName(firstName);
    this.setLastName(lastName);
    this.setEmail(email);
    this.setBirthDate(birthDate);
    this.setCity(city);
    this.setStreet(street);
    this.setStreetNumber(streetNumber); 
    this.setImage(image);
 }



}

