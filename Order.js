const Person = require("./Person");

class Order {
 
    constructor(productname){
        this.productname=productname;
       this.instock=0
     

    }
   addInStock(qtd){
    this.instock += qtd;
   }
   fullOrder(){
    return `Produto: ${this.productname}, quantidade: ${this.instock}`
   }
 
}
module.exports=Order