function Saudacao({ nome }) {
  function gerarSaudacao(recebeNome) {
    return `Olá ${nome}, tudo bem?`
  }

  return (
    <div>
      {nome && <p>{gerarSaudacao(nome)}</p>}
    </div>
  );
}

export default Saudacao;
