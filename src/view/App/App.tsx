import { BrowserRouter } from 'react-router-dom';
import { BirdsPage } from '@router/BirdsPage';
import './App.scss';
function App(): JSX.Element {
  return (
    <BrowserRouter>
      <BirdsPage />
    </BrowserRouter>
  );
}

export default App;
