//Declaring a Class

class Product{
    constructor(itemname , price , discount , itemCode){
    this.itemname=itemname;
    this.price=price;
    this.discount=discount;
    this.itemCode=itemCode;
    }
}
let pencil= new Product("Pencil " , 50 , 2 , "#P50");
console.log(pencil);

//With the help of Expresskion Creating a Object

const Product1= class Product{
    constructor(itemname , price , discount , itemCode){
        this.itemname=itemname;
        this.price=price;
        this.discount=discount;
        this.itemCode=itemCode;
        }

        get getDiscountValue(){
            return this.discount;
        }
        set setDiscountValue(value){
            this.discountValue =value;
        }

        discountValue(){
            return this.discount*this.price/100;
        }
        /*  // Now we made this a getter
        get discountValue(){
            return this.discount*this.price/100;
        }
        console.log(pen.discountValue) */
    };
let pen= new Product1("Pen " , 100 , 20 , "#P100");
console.log(pen);
/* console.log(pen.getDiscountValue); //5

pen.setDiscountValue = 20;
console.log(pen.getDiscountValue); //5
 */

console.log(pen.discountValue())


//Extending Class
/* can not do with the help of function
we can not do getter and setter in constructor and in factory function */

class Things{
    constructor(itemname ){
        console.log("Passed By a Furniture " + itemname )
    this.itemname=itemname;
    }
    getItemName(){
        return this.itemname  + " is a Things .";
    }
}
class Furniture extends Things{
    constructor(itemname){
        super(itemname);
        /* Super function calls the constructor of parent class */
    }
    getItemName(){
        return this.itemname  + " is a Furniture .";
    }
}

let table = new Things("Table " );
let chair = new Furniture("Chair ");

console.log(table);
console.log(chair);
console.log(table.getItemName());
console.log(chair.getItemName());