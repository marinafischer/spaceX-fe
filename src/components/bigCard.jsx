/* eslint-disable react/prop-types */
import React from 'react';
import convertDate from '../services/helpers/convertDate';
// import PropTypes from 'prop-types';

function BigCard({ info }) {
  return (
    <>
      <h1>{info.name}</h1>
      <img src={info.image} alt="imagem do lançamento" />
      <p>Foguete:</p>
      <p>{info.rocket}</p>
      <h1>lançamento:</h1>
      <h1>{convertDate(info.date)}</h1>
    </>
  );
}

// BigCard.propTypes = {
//   info: PropTypes.shace({
//     name: PropTypes.string,
//   }).isRequired,
// };

export default BigCard;
