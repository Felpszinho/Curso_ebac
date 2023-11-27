const Addres = require("./Addres");
const Person = require("./Person");
const Order = require("./Order");




const addr = new Addres("ipiranga", 99, "centro", "São Paulo", "SP")

const order = new Order("relogio", 5)
const felipe = new Person("Felipe", addr, order,15,28);
console.log(felipe.fullPerson())


console.log(felipe.addres.fullAddress())

felipe.order.addInStock(15)
console.log(felipe.order.fullOrder())

