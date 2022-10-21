import { React, useState, useEffect } from 'react';
import BigCard from '../components/bigCard';
import getLaunch from '../services/getLaunches';

function Next() {
  const [launch, setLaunch] = useState({});
  const fetchInfo = async () => {
    const data = await getLaunch('/next');
    setLaunch(data);
  };

  useEffect(() => {
    async function fetchAPI() {
      await fetchInfo();
    }
    fetchAPI();
  }, []);

  return (
    <>
      <h1>Tudo sobre o próximo lançamento</h1>
      {
        launch.id && <BigCard info={launch} />
      }
    </>
  );
}

export default Next;
