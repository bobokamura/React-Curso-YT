import Item from "../components/Item"

function List() {
  return (
    <>
      <h1>My List</h1>
      <ul>
        <Item marca="Mazda" ano_lancamento={1990} />
        <Item marca="Mitsubishi" ano_lancamento={1995} />
        <Item marca="Honda" ano_lancamento={1998} />
        <Item marca="Toyota" ano_lancamento={2001} />
        <Item marca="Subaru" ano_lancamento={2005} />
        <Item marca="Suzuki" ano_lancamento={2003}/>
      </ul>
    </>
  );
}

export default List;
