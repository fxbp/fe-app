
import './App.css';

import { ThemeProvider } from "@mui/material"
import TowerListPage from './pages/TowerListPage';

import { themeOptions } from './themes/theme'

function App() {
  return (
    <ThemeProvider theme={themeOptions}>
      <TowerListPage />
    </ThemeProvider>
    
  );
}

export default App;
