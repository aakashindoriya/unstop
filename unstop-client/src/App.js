import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Overview from './components/Overview';
import Assesment from './components/Assesment';
import Navbar2 from './components/Navbar2';
import Sidebar from './components/Sidebar';


function App() {
  return (
    <div className="App">
      <div style={{ display: 'flex' }}>
        <div>
          <Sidebar />
        </div>
        <div>
          <Navbar />
          <Navbar2 />

          <Overview />
          <Assesment />
        </div>
      </div>
    </div>
  );
}

export default App;
