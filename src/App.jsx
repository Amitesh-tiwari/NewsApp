import './App.css'
import React, { useState } from 'react'
import Navbar from './Components/Navbar'
//import Header from './Components/Header'
import NewsBoard from './Components/NewsBoard'
import NewsItem from './Components/NewsItem'

function App() {
  const [category, setCategory] = useState('general')
  return (
    <div>
      <Navbar setCategory = {setCategory} />
      <NewsBoard category = {category} />
      
    </div>
      
       
    
  )
}

export default App
