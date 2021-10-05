import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'

import MyNavbar from './components/MyNavbar'
import MyFooter from './components/MyFooter'
import Welcome from'./components/Welcome'
import LatestRelease from './components/LatestRelease'
import WarningSign from './components/WarningSign'
import BadgeComponent from './components/MyBadge'
import SingleBook from './components/SingleBook'
import FantasyBook from './fantasy.json'


function App() {
  return (
    <div className="App">
      <MyNavbar />
      <Welcome />
      <WarningSign string="Latest Release"/>
      <BadgeComponent variant="danger" text="New"/>
      <LatestRelease />

      <SingleBook books={FantasyBook[0]}/>

      <MyFooter />
    </div>
  );
}

export default App;
