class Usuario {
  public name;
  public age;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

class Player extends Usuario {
  public game;
  constructor(name: string, age: number, game: string) {
    super(name, age);
    this.game = game;
  }

  dizerOJogoAtual() {
    return `Estou jogando no momento ${this.game}`;
  }

  static queHorasSao() {
    return Date();
  }
}

const jogador = new Player("mario", 29, "Tibia");
// console.log(jogador.dizerOJogoAtual());
// console.log(Player.queHorasSao());

// private, protect, public
class Jogo {
  // private name;
  protected name;
  constructor(name: string) {
    this.name = name;
  }
  dizerNome() {
    return `O nome do jogo é: ${this.name}`;
  }
}

class JogoComDescricao extends Jogo {
  private descricao;

  constructor(nome: string, descricao: string) {
    super(nome);
    this.descricao = descricao;
  }

  dizerNomeComDescricao() {
    return `O nome do jogo é: ${this.name}`;
  }
}

const tibia = new JogoComDescricao("Tibia", "jogo antigo com mecanica maneira");
// tibia.name = "The Sims";
console.log(tibia.dizerNome());
