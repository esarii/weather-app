import './App.css';
import Weather from './components/Weather';
import { CityProvider } from './contexts/CityContext';

function App() {
  return (
    <>
      <CityProvider>
        <Weather />
      </CityProvider>
    </>
  );
}

export default App;
