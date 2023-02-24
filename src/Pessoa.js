function Pessoa({ nome, idade, foto }) {
  return (
    <div>
      <p>Name: {nome}</p>
      <p>Age: {idade}</p>
      <img src={foto} alt="foto" />
    </div>
  );
}

export default Pessoa;
