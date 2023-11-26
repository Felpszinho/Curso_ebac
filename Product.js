class Product {
    constructor(name, description, price) {
        this.name = name
        this.description = description
        this.price = price

        this.inStock = 0
    }
    get name() {
        return this._name
    }
    set name(value) {
      
        this._name = value
    }

    get price() {
        return this._price
    }
    set price(value) {
        if (value <= 0) {
            throw new Error("Valor inválido")
        }
        this._price = value
    }
    get description() {
        return this._description
    }
    set description(value) {
      
        this._description = value
    }


    addinStock(qtd) {
        this.inStock += qtd
    }
    calculateDiscount(discount) {
        return this.price * ((100 - discount) / 100)
    }
}
const wacth = new Product("Relogio de pulso", "..",80)
wacth.addinStock(99)


console.log(wacth)
console.log(wacth.calculateDiscount(15))



