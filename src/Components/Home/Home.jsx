import React from 'react';
import Navbar from '../Navbar/Navbar';
import Header from '../Header/Header';
import FruitsSection from '../Fruits/FruitsSection';
import TopDish from '../TopDish/TopDish';
import AllDish from '../AllDish/AllDish';



export default function Home() {
  return (
    <div  className=' container '>
      <div className='w-[104%] sticky top-0 z-10 '>
      <Navbar />

      </div>
      <div className=' container  sm:w-[90%] sm:mx-auto '>
      <Header />
       <FruitsSection />
      <TopDish />
      <AllDish />

      </div>
    </div>
  )
}
