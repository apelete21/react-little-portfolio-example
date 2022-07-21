import './App.css';
import Awesso from './components/intro/Intro';
import About from './components/about/about'
import ProductList from './components/productList/productList';
import Contact from './components/contact/Contact';

import React from 'react'

const App = () => {
  return (
    <div>
      <Awesso />
      <About />
      <ProductList />
      <Contact />
    </div>
  )
}

export default App