/* eslint-disable react/prop-types */
import { React, useState } from 'react';
import convertDate from '../services/helpers/convertDate';
import rocketImg from '../images/rocket.png';
// import PropTypes from 'prop-types';

function SmallCard({ info }) {
  const [details, setDetails] = useState({});
  const handleClick = () => {
    setDetails(info);
  };
  return (
    <div>
      <h1>{info.name}</h1>
      <h1>lançamento:</h1>
      <h1>{convertDate(info.date)}</h1>
      <button type="button" onClick={handleClick}>Ver detalhes</button>
      {
        details.id && (
          <>
            <img src={(details.image ? details.image : rocketImg)} alt="imagem do lançamento" />
            <p>Foguete:</p>
            <p>{details.rocket}</p>
          </>
        )
      }
    </div>
  );
}

// SmallCard.propTypes = {
//   info: PropTypes.shace({
//     name: PropTypes.string,
//   }).isRequired,
// };

export default SmallCard;
