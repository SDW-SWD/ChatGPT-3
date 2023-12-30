import React from 'react';
import { Brand, CTA, Navbar } from './components';
import { Block, Footer, Header, Possibility, WhatGPT3,Features} from './containers';

import './App.css'
const App = () => {
  return (
    <div className='App'>
        <div className='gradient__bg'>
            <Navbar/>
            <Header/>
        </div>
        <Brand/>
        <WhatGPT3/>
        <Features/>
        <Possibility/>
        <CTA/>
        <Block/>
        <Footer/>
    </div>
  )
}

export default App
