//escrevendo as classes de um jogo

class identidadeHeroi{
    constructor(nome, idade, tipo, ataque){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
        this.ataque = ataque
    }

    atacar(){
        console.log(`O héroi ${this.nome} tem ${this.idade} se formou no curso de ${this.tipo} e passou a atacar usando ${this.ataque}`)
    }
}

let mago = new identidadeHeroi("Ryze", "400 anos", "mago", "magia")
let guerreiro = new identidadeHeroi("Garen", "100 anos", "guerreiro", "espada")
let monge = new identidadeHeroi("Lee sin", "32 anos", "monge", "artes marciais")
let ninja = new identidadeHeroi("Zed", "600 anos", "ninja", "shuriken")

mago.atacar()
guerreiro.atacar()
monge.atacar()
ninja.atacar()