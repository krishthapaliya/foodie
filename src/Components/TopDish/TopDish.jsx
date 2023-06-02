import React from 'react';

import {MdRestaurantMenu, MdOutlineFastfood} from 'react-icons/md';
import {GiChickenOven, GiFruitBowl, GiDrinkMe, GiCakeSlice, GiIceCreamCone, GiBowlOfRice } from 'react-icons/gi';
import {FaFish} from 'react-icons/fa';

const HotDish =[{
    
}]

export default function TopDish() {
  return (
    <div className=' mx-12 mt-24 mb-60 flex flex-col justify-center items-center '>
            <h1 className=' text-[24px] mb-10 '>Our Hot Dishes</h1>
            <div className=' flex flex-col gap-4 items-center px-4 py-5  bg-white shadow-lg border rounded-[8px] w-[100px] h-[115px] '>
                <div>
                    <MdRestaurantMenu  className=' p-2 bg-red-500 text-white rounded-full  text-[38px] '/>
                </div>
                <div>
                    Menu
                </div>

            </div>

    </div>
  )
}
