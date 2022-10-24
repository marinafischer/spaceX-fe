import { React, useState, useEffect } from 'react';
import BigCard from '../components/bigCard';
import getLaunch from '../services/getLaunches';

function Latest() {
  const [launch, setLaunch] = useState({});
  const fetchInfo = async () => {
    const data = await getLaunch('/latest');
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
      <h1 className="main-title center-item">Último Lançamento</h1>
      {
        launch.id && <BigCard info={launch} />
      }
    </>
  );
}

export default Latest;
