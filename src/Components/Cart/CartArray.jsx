import React from "react";
import { MdDelete } from "react-icons/md";
import { motion } from "framer-motion";

const CartArray = ({ cartItemsObject, addToCart }) => {
  if (!cartItemsObject || cartItemsObject.length === 0) {
    return <div>No items in the cart.</div>;
  }

  

  return (
    <div>
      {cartItemsObject.map(({ id, heading, price, image }) => (
        <div
          key={id}
          className="flex items-center mx-6 rounded-md bg-[#2e3033] text-sm justify-between"
        >
          <div className="flex items-center text-white gap-2 ml-5">
            <img src={image} alt="ice-cream" className="w-20" />
            <div className="flex flex-col">
              <p>{heading}</p>
              <p>
                <span className="text-[#e80013]">$</span> {price}
              </p>
            </div>
          </div>
          <div className="text-white flex gap-3 items-center mr-5 cursor-default">
            <motion.span whileTap={{ scale: 0.8 }}>-</motion.span>
            <motion.span whileTap={{ scale: 0.8 }}>1</motion.span>
            <motion.span whileTap={{ scale: 0.8 }}>+</motion.span>
            <motion.span
              whileTap={{ scale: 0.8 }}
              className="bg-[#e80013] py-[2px] px-[2px] rounded-md"
              
            >
              <MdDelete />
            </motion.span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartArray;
