import TowerList from '../components/Tower/TowerList';

import { TowerDefinitionAPI } from '../Api/TowerDefinitionAPI';
import { useEffect, useState } from 'react';

const TowerListPage = () => {
  const [towerDefinition, setTowerDefinition] = useState();

  const fetchTowerDefinition = () => {
    TowerDefinitionAPI.get() //prettier sets then in same line if comment is not set?
      .then((res) => setTowerDefinition(res.data));
  };

  useEffect(() => {
    fetchTowerDefinition();
  }, []);

  return (
    <>
      <h1>Zelda Breath of the Wild - Tower Shrine/Koroks inventory app</h1>
      <TowerList towerListDefinition={towerDefinition} />
    </>
  );
};

export default TowerListPage;
