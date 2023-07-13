import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar'
import Intro from './components/Intro/Intro';
import Stats from './components/Stats/Stats';
import Services from './components/Services/Services';
import Work from './components/Work/Work';
import { BrowserRouter as Router, Routes, Route } from"react-router-dom"; 
import React  from 'react'

import Form from './components/Login/Form';
import Welcome from './components/Welcome/Welcome';

function App() {
 
  return (
    <div className="App">
       <Router>
      
 <Navbar/>

    
      <Routes>
<Route exact path = "/" element={ <Intro/>}>
</Route>
      </Routes>
      <Routes>
<Route exact path = "/" element={ <Stats/>}>
</Route>
      </Routes>
      <Routes>
<Route exact path = "/" element={ <Services/> }>
</Route>
      </Routes>
      <Routes>
<Route exact path = "/" element={<Work/> }>
</Route>
      </Routes>
    
    
    <Routes>
<Route exact path = "/login" element={ <Form/>}></Route>
      </Routes>
      <Routes>
<Route exact path = "/welcome" element={ <Welcome/>}></Route>
      </Routes>
      </Router>
     
    </div>
  );
}

export default App;
