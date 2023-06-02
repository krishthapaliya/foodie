import React from 'react';
import Navbar from '../Navbar/Navbar';
import Header from '../Header/Header';
import FruitsSection from '../Fruits/FruitsSection';
import TopDish from '../TopDish/TopDish';
import AllDish from '../AllDish/AllDish';



export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <FruitsSection />
      <TopDish />
      <AllDish />
    </>
  )
}
