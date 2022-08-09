import './App.css';
import Weather from "./components/Weather"
import Dashboard from './components/Dashboard';
import { WeatherProvider } from './context/WeatherContext';

function App() {
  return <WeatherProvider>
    <Weather></Weather>
    <Dashboard></Dashboard>
  </WeatherProvider>
}

export default App;
