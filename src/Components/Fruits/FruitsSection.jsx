import React from "react";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { motion } from "framer-motion";

//fruits import here ===================>
import f1 from "../../assets/img/f7.png";
import f2 from "../../assets/img/f2.png";
import f6 from "../../assets/img/f6.png";

import f4 from "../../assets/img/f3.png";

const FruitsSection3 = [
  {
    id: 1,
    heading: "Blueberries",
    text: "Blue Berries",
    price: "12.25",
    image: f4,
  },
  {
    id: 1,
    heading: "Pinneapple",
    image: f1,
    price: "6.25",
  },
  {
    id: 1,
    heading: "Raspberry",
    text: "Cascade Delight",
    price: "12.25",
    image: f2,
  },
  {
    id: 1,
    heading: "Pomegranate",
    image: f6,
    price: "12.25",
  },
];

export default function FruitsSection() {
  return (
    <div className=" ">
      <div className=" bg-[#f5eee9] mb-20 px-1 py-3 flex mx-12 justify-center gap-4 items-center    ">
        {FruitsSection3.map(({ id, heading, text, price, image }) => {
          return (
            <div key={id} className=" bg-white  w-[310px] h-[235px]  ">
              <div className=" flex justify-between items-center px-4 ">
                <motion.div whileHover={{ scale: 1.1 }}>
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
            </div>
          );
        })}
      </div>
    </div>
  );
}
