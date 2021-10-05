import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'

import MyNavbar from './components/MyNavbar'
import MyFooter from './components/MyFooter'
import Welcome from'./components/Welcome'
import LatestRelease from './components/LatestRelease'
import WarningSign from './components/WarningSign'


function App() {
  return (
    <div className="App">
      <MyNavbar />
      <Welcome />
      <WarningSign string="Latest Release"/>
      <LatestRelease />

      <MyFooter />
    </div>
  );
}

export default App;
