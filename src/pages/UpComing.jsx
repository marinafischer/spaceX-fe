import { React, useState, useEffect } from 'react';
import SmallCard from '../components/smallCard';
import getLaunch from '../services/getLaunches';

function UpComing() {
  const [launches, setLaunches] = useState({});
  const fetchInfo = async () => {
    const data = await getLaunch('/upcoming');
    setLaunches(data);
  };

  useEffect(() => {
    async function fetchAPI() {
      await fetchInfo();
    }
    fetchAPI();
  }, []);

  return (
    <>
      <h1>Tudo sobre os próximos lançamentos</h1>
      {
        launches.length
        && launches.map((launch) => (<SmallCard info={launch} key={launch.id} />))

      }
    </>
  );
}

export default UpComing;
