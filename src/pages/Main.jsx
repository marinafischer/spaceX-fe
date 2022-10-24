import React from 'react';
import { useNavigate } from 'react-router-dom';

function Main() {
  const navigate = useNavigate();

  const handleClick = (e) => {
    navigate(e.target.value);
  };
  return (
    <>
      <h1>Para onde você desejar ir?</h1>
      <button type="button" onClick={handleClick} value="/next">Próximo Lançamento</button>
      <button type="button" onClick={handleClick} value="/latest">Último Lançamento</button>
      <button type="button" onClick={handleClick} value="/upcoming">Próximos Lançamentos</button>
      <button type="button" onClick={handleClick} value="/past">Últimos Lançamentos</button>
    </>
  );
}

export default Main;
