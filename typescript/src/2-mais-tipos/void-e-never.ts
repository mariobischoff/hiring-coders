function principal(): void {
  console.log("executando");
}

principal();

// laços de repetições infinitos
// ou funções que disparam erros
function funcaoQueNuncaRetorna(): never {
  throw new Error("ola");
}

const a = funcaoQueNuncaRetorna();
