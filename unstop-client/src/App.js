import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Overview from './components/Overview';
import Assesment from './components/Assesment';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Overview />
      <Assesment />
    </div>
  );
}

export default App;
