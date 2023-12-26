import React from 'react';
import { Brand, CTA, Feature, Navbar } from './components';
import { Block, Footer, Header, Possibility, WhatGPT3} from './containers';


const App = () => {
  return (
    <div className='App'>
        <div className='gradient__bg'>
            <Navbar/>
            <Header/>
        </div>
        <Brand/>
        <WhatGPT3/>
        <Feature/>
        <Possibility/>
        <CTA/>
        <Block/>
        <Footer/>
    </div>
  )
}

export default App
