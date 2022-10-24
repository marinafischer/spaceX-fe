import { React, useState } from 'react';
import PropTypes from 'prop-types';
import convertDate from '../services/helpers/convertDate';
import rocketImg from '../images/rocket.png';
import '../styles/card.css';

function SmallCard({ info }) {
  const [details, setDetails] = useState({});
  const [buttonTxt, setButtonTxt] = useState('Ver detalhes');
  const handleClick = () => {
    if (!details.id) {
      setDetails(info);
      setButtonTxt('Ver menos');
    } else {
      setDetails({});
      setButtonTxt('Ver detalhes');
    }
  };

  return (
    <div className="card-content">
      <h1 className="main-title">{info.name}</h1>
      <div className="info-content">
        <h1>Lançamento:&nbsp;</h1>
        <h1>{convertDate(info.date)}</h1>
      </div>
      <button className="btn details" type="button" onClick={handleClick}>{buttonTxt}</button>
      {
        details.id && (
          <>
            <img src={(details.image ? details.image : rocketImg)} alt="imagem do lançamento" />
            <div className="info-content">
              <p>Foguete:&nbsp;</p>
              <p>{details.rocket}</p>
            </div>
          </>
        )
      }
    </div>
  );
}

SmallCard.propTypes = {
  info: PropTypes.shape({
    name: PropTypes.string,
    rocket: PropTypes.string,
    image: PropTypes.string,
    date: PropTypes.string,
  }).isRequired,
};

export default SmallCard;
