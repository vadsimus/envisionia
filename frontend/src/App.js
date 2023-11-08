import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import NavBar from './components/Navbar';
import React, { useState } from 'react';


function App() {
  const [darkTheme , setDarkTheme] = useState(true)

  const toggleTheme = () => {setDarkTheme(!darkTheme)}

  return (
    <div>
      <NavBar
        darkTheme={darkTheme}
        toggleTheme={toggleTheme}
      ></NavBar>

      <div style={{height: '100vh', width: '100vw', backgroundColor: darkTheme?'#555':'#fff'}}>


      </div>
    </div>
  );
}

export default App;
