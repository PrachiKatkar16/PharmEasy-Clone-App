import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import SearchFirstPartCombo from './SearchFirstPartCombo'
import ImageCarousel from './ImageCarousel'
import ImageCarousel1 from './ImageCarousal1'
import ImageCarousel2 from './ImageCarousal2'
import OrderWithPrescriptionBox from './OrderWithPrescriptionBox'
import ImageCarousal3 from './ImageCarousal3'
import ImageCarousal4 from './ImageCarousal4'
import ImageCarousal5 from './ImageCarousal5'
import Banner from './Banner'
import LabTests from './LabTests'
import CustomerReviews from './CustomerReviews'
import WhyChooseUs from './WhyChooseUs'
import Banner2 from './Banner2'
import HomeDescription from './HomeDescription'

function HomePage() {
  return (
    <>
        
      <Navbar/>
      <SearchFirstPartCombo/>
      <ImageCarousel/>
      <ImageCarousel1/>
      <ImageCarousel2/>
      <OrderWithPrescriptionBox/>
      <ImageCarousal3/>
      <ImageCarousal4/>
      <ImageCarousal5/>
      <Banner/>
      <LabTests/>
      <WhyChooseUs/>
      <Banner2/>
      <CustomerReviews/>
      <HomeDescription/>
      <Footer/>
    </>
  )
}

export default HomePage