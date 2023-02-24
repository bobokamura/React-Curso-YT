function OtherList({ itens }) {
  return (
    <>
      <h1>List Things</h1>
      {itens.length > 0 ? (
        itens.map((item, index) => <p key={index}>{item}</p>)
      ) : (
        <p>There's no itens!!!</p>
      )}
    </>
  );
}

export default OtherList;
