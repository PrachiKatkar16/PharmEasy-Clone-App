import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Box} from '@chakra-ui/react'
import HomePage from './components/Home/HomePage'
import { Route, Routes,Navigate  } from 'react-router-dom';
import MedicineHome from './components/Home/Medicine/MedicineHome'


function App() {

  return (
    <Box >
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/medicine" element={<MedicineHome/>} />
        

      </Routes>
    </Box>
  )
}

export default App