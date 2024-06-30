import React from 'react'
import Navbar from '../Navbar'
import FirstPartMedicine from '../Medicine/FirstPartMedicine'
import Footer from '../Footer'
import MedicineDescription from './MedicineDescription'
import HomeDescription from '../HomeDescription'

function MedicineHome() {
  return (
    <>
    <Navbar/>
    <FirstPartMedicine/>
    <MedicineDescription/>
    <HomeDescription/>
    <Footer/>
    </>
  )
}

export default MedicineHome