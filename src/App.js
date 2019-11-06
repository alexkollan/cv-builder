import React from 'react';
import './App.scss';
import './Components/sections/LeftSection';
import './Components/sections/RightSection';
import './Components/sections/sections.scss';
import LeftSection from './Components/sections/LeftSection';
import RightSection from './Components/sections/RightSection';


function App() {
  return (
    <div className="App">
     <LeftSection/>
     <RightSection/>
    </div>
  );
}

export default App;
