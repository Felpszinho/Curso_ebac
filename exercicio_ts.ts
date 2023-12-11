///funcao multiplica
function multiplica(n: number,x: number){
    return n*x
}
console.log(multiplica(5,4))


////// funcaçao Saudação
type ola = {
    nome: string


}
const luiz: ola = {
    nome: "luiz",
}

function dizoi(luiz: ola) {
    return (` ola ${luiz.nome}`)
}


console.log(dizoi(luiz))


