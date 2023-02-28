function Saudacao({ nome }) {
  function recebeNome(recebeNome) {
    return `hey ${recebeNome}...`;
  }
  return <>{nome && <p>{recebeNome(nome)}</p>}</>;
}

export default Saudacao;
