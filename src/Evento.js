import Button from "./evento/Button";

function Evento() {
  function primeiroEvento() {
    console.log(`Evento 1`);
  }

  function segundoEvento() {
    console.log(`Evento 2`);
  }

  return (
    <div>
      <p>Clique para disparar um evento:</p>
      <Button event={primeiroEvento} text="Primeiro evento" />
      <Button event={segundoEvento} text="Segundo evento" />
    </div>
  );
}

export default Evento;
