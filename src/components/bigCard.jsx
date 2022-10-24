import React from 'react';
import '../styles/card.css';
import { PropTypes } from 'prop-types';
import convertDate from '../services/helpers/convertDate';

function BigCard({ info }) {
  return (
    <div className="card-content">
      <h1 className="main-title">{info.name}</h1>
      <img src={info.image} alt="imagem do lançamento" />
      <div className="info-content">
        <p>Foguete:&nbsp;</p>
        <p>{info.rocket}</p>
      </div>
      <div className="info-content">
        <h2>Lançamento:&nbsp;</h2>
        <h2>{convertDate(info.date)}</h2>
      </div>
    </div>
  );
}

BigCard.propTypes = {
  info: PropTypes.shape({
    name: PropTypes.string,
    rocket: PropTypes.string,
    image: PropTypes.string,
    date: PropTypes.string,
  }).isRequired,
};

export default BigCard;
