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

      <div style={{overflow: 'hidden', minHeight: '100%', width: '100%', backgroundColor: darkTheme?'#555':'#eee',
      			position: 'fixed',
			    top: '0',
			    left: '0',
			    zIndex: '-4444'
      }}>
      </div>
    </div>
  );
}

export default App;
