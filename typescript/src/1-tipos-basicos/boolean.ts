let estaAtivo: boolean;

// ..

estaAtivo = true;

function mapearStatusDeUsuario(status: boolean): string {
  if (status) {
    return `Usuário está ativo.`;
  } else {
    return `Usuário não está ativo.`;
  }
}

mapearStatusDeUsuario(true);
