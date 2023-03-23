export default class Items{
    productId;
    Name;
    RegularPrice;
    SalePrice;
    descripition;
    category;
    img;

    constructor(productId,Name,RegularPrice,SalePrice,descripition,category,img)
    {
        this.SetProductId(productId);
        this.SetName(Name);
        this.SetRegularPrice(RegularPrice);
        this.SetSalePrice(SalePrice);
        this.SetDescripition(descripition);
        this.SetCategory(category);
        this.SetImg(img);
    }

    SetImg(img)
    {
        this.img = img;
    }

    SetProductId(productId) {
        this.productId = productId;
    }

    SetName(Name){
        this.Name = Name;
    }

    SetRegularPrice(RegularPrice){
        this.RegularPrice = RegularPrice;
    }

    SetSalePrice(SalePrice){
        this.SalePrice = SalePrice;
    }

    SetDescripition(descripition){
        this.descripition = descripition;
    }

    SetCategory(category){
        this.category = category;
    }

} 