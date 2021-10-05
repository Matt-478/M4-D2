import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'

import MyNavbar from './components/MyNavbar'
import MyFooter from './components/MyFooter'
import Welcome from'./components/Welcome'
import LatestRelease from './components/LatestRelease'
import WarningSign from './components/WarningSign'
import BadgeComponent from './components/MyBadge'
import FantasyBook from './fantasy.json'
import BookList from './components/BookList'
import SingleBook from './components/SingleBook'


function App() {
  return (
    <div className="App">
      <MyNavbar />
      {/* <Welcome /> */}
      {/* <WarningSign string="Latest Release"/> */}
      {/* <BadgeComponent variant="danger" text="New"/> */}
      {/* <LatestRelease /> */}
      {/* <SingleBook book={FantasyBook[0]}/> */}
      <BookList books={FantasyBook} />


      <MyFooter />
    </div>
  );
}

export default App;
