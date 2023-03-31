import { useState } from 'react'
import './App.css'

import Home from './screens/Home/Home';
import Services from './screens/Services/Services';
import Solutions from './screens/Solutions/Solutions';
import Story from './screens/Story/Story';
import Performance from './screens/Performance/Performance';
import Newsletter from './screens/Newsletter/Newsletter';
import Footer from './screens/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Users from './screens/Users/Users';

const App = () => {

  return (
    <div className="app">
     <Navbar/>
     <Home />
     <Users />
     <Solutions />
     <Services />
     <Story />
     <Performance />
     <Newsletter />
     <Footer />
    </div>
  )
}

export default App
