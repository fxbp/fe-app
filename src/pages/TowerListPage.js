import TowerList from '../components/TowerList';

import { towerListDefinition } from '../data/botwtowerdefinition';

const TowerListPage = () => {
  return (
    <>
      <h1>Zelda Breath of the Wild - Tower Shrine/Koroks inventory app</h1>
      <TowerList towerListDefinition={towerListDefinition} />
    </>
  );
};

export default TowerListPage;
