import { addItemToStore } from '../../js/function.js'
import Items from "../store/addItem.js";

let codeinput = document.querySelector(`#productId`)
let itemnameinput = document.querySelector(`#ProductName`)
let itemDescription = document.querySelector(`#ProductDesc`)
let itemRegularPrice = document.querySelector(`#ProductRegularPrice`)
let itemSalePrice = document.querySelector(`#ProductSalePrice`)

describe('Check all inputs are good(code:text english chars and numbers only    ,name:text with no numbers    ,price:positive decimal number    ,saleprice:positive decimal number lower than regular price    ,image:changed,desc:more than 5 chars   ,catgory:always true beacuse cant be empty)', () => {
    //test 1
    it('all inputs are good (should return true)', () => {
        //Arrange

        codeinput.value="123"
        itemnameinput.value="Pokemon"
        itemDescription.value="Pikachu"
        itemRegularPrice.value=30.00.toFixed(2);
        itemSalePrice.value=20.00.toFixed(2);
        imagechanged=true;
        console.log(imginput,"asda")
       

        //Act
        let result=addItemToStore();
        //Assert
        expect(result).toBe(true);
    });
});
describe('Check item code', () => {
    it('item code have Non-English letters (should return false)', () => {
        //Arrange

        codeinput.value="itemIdח"
        itemnameinput.value="Pokemon"
        itemDescription.value="Pikachu"
        itemRegularPrice.value=30.00.toFixed(2);
        itemSalePrice.value=20.00.toFixed(2);
        imagechanged=true;
       

        //Act
        let result=addItemToStore();
        //Assert
        expect(result).toBe(false);
    });
    it('all inputs are good except code that have special chars (should return false)', () => {
        //Arrange
        codeinput.value="123"
        itemnameinput.value="Pokemon"
        itemDescription.value="Pikachu"
        itemRegularPrice.value=350.00.toFixed(2);
        itemSalePrice.value=120.00.toFixed(2);
        imagechanged=true;
        //Act
        let result=addItemToStore();
        //Assert
        expect(result).toBe(false);
    });
    it('all inputs are good except item code already exist (should return false)', () => {
        //Arrange
        codeinput.value=123
        itemnameinput.value="Pokemon"
        itemDescription.value="Pikachu"
        itemRegularPrice.value=350.00.toFixed(2);
        itemSalePrice.value=120.00.toFixed(2);
        imagechanged=true;
        //Act
        let result=addItemToStore();
        //Assert
        expect(result).toBe(false);
    });


});



describe('Check item name', () => {
    //test 1
    it('less than 2 chars (should return false)', () => {
        //Arrange

        codeinput.value="123"
        itemnameinput.value="P"
        itemDescription.value="Pikachu"
        itemRegularPrice.value=30.00.toFixed(2);
        itemSalePrice.value=20.00.toFixed(2);
        imagechanged=true;
       

        //Act
        let result=addItemToStore();
        //Assert
        expect(result).toBe(false);
    });
    it('have numbers (should return false)', () => {
        //Arrange

        codeinput.value="123"
        itemnameinput.value="Pokemon"
        itemDescription.value="Pikachu"
        itemRegularPrice.value=30.00.toFixed(2);
        itemSalePrice.value=20.00.toFixed(2);
        imagechanged=true;
       

        //Act
        let result=addItemToStore();
        //Assert
        expect(result).toBe(false);
    });
 

});




describe('Check item image', () => {
    //test 1
    it('image not changed (should return false)', () => {
        //Arrange

        codeinput.value="123"
        itemnameinput.value="Pokemon"
        itemDescription.value="Pikachu"
        itemRegularPrice.value=30.00.toFixed(2);
        itemSalePrice.value=20.00.toFixed(2);
        imagechanged=false;
        //Act
        let result=addItemToStore();
        //Assert
        expect(result).toBe(false);
    });
});


describe('Check item description', () => {
    //test 1
    it('description less than 5 chars (should return false)', () => {
        //Arrange

        codeinput.value="123"
        itemnameinput.value="Pokemon"
        itemDescription.value="Pika"
        itemRegularPrice.value=30.00.toFixed(2);
        itemSalePrice.value=20.00.toFixed(2);
        imagechanged=true;
        //Act
        let result=addItemToStore();
        //Assert
        expect(result).toBe(false);
    });
});

describe('Check item price/saleprice', () => {
    //test 1
    it('price is not a decimal number (should return false)', () => {
        //Arrange

        codeinput.value="123"
        itemnameinput.value="Pokemon"
        itemDescription.value="Pikachu"
        itemRegularPrice.value=30.00;
        itemSalePrice.value=20.00.toFixed(2);
        imagechanged=true;
        //Act
        let result=addItemToStore();
        //Assert
        expect(result).toBe(false);
    });
    it('The sale price is not lower than the regular price (should return false)', () => {
        //Arrange

        codeinput.value="123"
        itemnameinput.value="Pokemon"
        itemDescription.value="Pikachu"
        itemRegularPrice.value=30.00.toFixed(2);
        itemSalePrice.value=40.00.toFixed(2);
        imagechanged=true;
        //Act
        let result=addItemToStore();
        //Assert
        expect(result).toBe(false);
    });
    it('The sale price is lower than the regular price (should return true)', () => {
        //Arrange

        codeinput.value="123"
        itemnameinput.value="Pokemon"
        itemDescription.value="Pikachu"
        itemRegularPrice.value=30.00.toFixed(2);
        itemSalePrice.value=20.00.toFixed(2);
        imagechanged=true;
        //Act
        let result=addItemToStore();
        //Assert
        expect(result).toBe(true);
    });
    it('The saleprice is zero (should return true)', () => {
        //Arrange

        codeinput.value="123"
        itemnameinput.value="Pokemon"
        itemDescription.value="Pikachu"
        itemRegularPrice.value=30.00.toFixed(2);
        itemSalePrice.value=0.00.toFixed(2);
        imagechanged=true;
        //Act
        let result=addItemToStore();
        //Assert
        expect(result).toBe(true);
    });
});

