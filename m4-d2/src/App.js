import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'

import MyNavbar from './components/MyNavbar'
import MyFooter from './components/MyFooter'
import Welcome from'./components/Welcome'
import LatestRelease from './components/LatestRelease'
import WarningSign from './components/WarningSign'
import BadgeComponent from './components/MyBadge'


function App() {
  return (
    <div className="App">
      <MyNavbar />
      <Welcome />
      <WarningSign string="Latest Release"/>
      <BadgeComponent variant="danger" text="New"/>
      <LatestRelease />

      <MyFooter />
    </div>
  );
}

export default App;
