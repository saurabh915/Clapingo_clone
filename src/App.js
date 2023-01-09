import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar'
import Intro from './components/Intro/Intro';
import Stats from './components/Stats/Stats';
import Services from './components/Services/Services';
import Work from './components/Work/Work';
function App() {
  return (
    <div className="App">
    <Navbar/>
    <Intro/>
    <Stats/>
    <Services/>
    <Work/>
    </div>
  );
}

export default App;
