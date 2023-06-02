import React from 'react'
import AllData from "./AllData";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { motion } from 'framer-motion';


export default function AllDish() {
  return (
    <div>
        <div className=" bg-[#f5eee9] mb-20 px-1 py-3 rounded-sm flex flex-wrap mx-12 justify-center gap-4 items-center    ">
        {AllData.map(({ id, heading, text, price, image }) => {
          return (
            <motion.div whileTap={{ rotate: [0, -1, 1, -1, 0] }} key={id} className=" bg-white  my-10 rounded-sm  w-[310px] h-[235px]   ">
              <div className=" flex justify-between items-center px-4 ">
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ rotate: [0, -1, 1, -1, 0] }} >
                  <img src={image} alt="berries" className=" w-48 h-36 " />
                </motion.div>
                <motion.div whileHover={{ scale: 1.1 }}>
                  <MdOutlineAddShoppingCart className=" w-10 h-10 p-2 rounded-full bg-red-600 text-white " />
                </motion.div>
              </div>
              <div className=" flex flex-col gap-2 justify-end items-end  pb-3 pr-3  ">
                <p>{heading}</p>
                <span className=" text-gray-400 text-[14px] ">{text}</span>
                <div className=" flex gap-1 ">
                  <span className=" text-orange-500 ">$ </span>
                  <p>{price}</p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  )
}
