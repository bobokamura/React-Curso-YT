function YourUser({ setNome }) {
  return (
    <div>
      <p>Campo nome: </p>
      <input
        type="text"
        placeholder="Digite seu nome"
        onChange={(e) => setNome(e.target.value)}
      />
    </div>
  );
}

export default YourUser;
