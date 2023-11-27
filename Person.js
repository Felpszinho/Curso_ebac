class Person{
    constructor(name,addres,order,id,idade){
        this.name=name;
        this.addres=addres;
        this.order=order;
        this.id=id;
        this.idade=idade;
    }
    fullPerson(){
        return ` nome:${this.name} , id: ${this.id}, idade:${this.idade}`
    }
}

module.exports=Person;