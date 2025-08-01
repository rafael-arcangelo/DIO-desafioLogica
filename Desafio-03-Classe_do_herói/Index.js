class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }
    atacar() {
        let ataque;
        switch(this.tipo) {
            case "mago":
                ataque = "magia";
                break;
            case "guerreiro":
                ataque = "espada";
                break;
            case "monge":
                ataque = "artes marciais";
                break;
            case "ninja":
                ataque = "shuriken";
                break;
        }
        console.log(`O ${this.nome} atacou usando ${ataque}`);
    }
}

const heroi1 = new Heroi("Hideki", 30, "mago");
const heroi2 = new Heroi("Kai", 19, "guerreiro");
const heroi3 = new Heroi("Djou", 40, "monge");
const heroi4 = new Heroi("Ren", 27, "ninja");