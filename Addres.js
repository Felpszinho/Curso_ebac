

class Addres {
    constructor(street,number, city, state){
        this.street=street;
        this.number=number;
        this.city=city;
        this.state=state;
    }
    fullAddress(){
        return `Rua ${this.street}.${this.number}.${this.city}.${this.state}.${this.state}`
    }
}
module.exports=Addres;