import React from 'react'
import Navbar from '../Navbar/Navbar'
import PricingSection from '../../components/Pricing/PricingPlan'
import FAQSection from '../../components/Pricing/Faq'

const index = () => {
  return (
    <>
     <Navbar />
     <PricingSection />
     <FAQSection />
    </>
  )
}

export default index