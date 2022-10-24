import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/main.css';

function Main() {
  const navigate = useNavigate();

  const handleClick = (e) => {
    navigate(e.target.value);
  };
  return (
    <div className="main-content">
      <h1 className="main-title">NAVEGUE PARA O LANÇAMENTO QUE DESEJAR</h1>
      <div className="button-content">
        <button className="btn option" type="button" onClick={handleClick} value="/next">Próximo Lançamento</button>
        <button className="btn option" type="button" onClick={handleClick} value="/latest">Último Lançamento</button>
        <button className="btn option" type="button" onClick={handleClick} value="/upcoming">Próximos Lançamentos</button>
        <button className="btn option" type="button" onClick={handleClick} value="/past">Últimos Lançamentos</button>
      </div>
    </div>
  );
}

export default Main;
