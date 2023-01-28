import axios from 'axios';

export const TowerDefinitionAPI = {
  get: () => axios.get('/data/towerDefinition.json'),
};
