import React from "react";
import { IoMdBasket } from "react-icons/io";
import { FiLogIn } from "react-icons/fi";
import { motion } from "framer-motion";
// import { HiOutlineBars3BottomLeft } from "react-icons/hi";

import { HiBars3BottomLeft } from "react-icons/hi2";

export default function Navbar() {
  return (
    <div className=" container flex justify-between p-3  sm:p-6 backdrop-blur-lg items-center  sm:mb-4  sticky top-0  z-10">
      <motion.div
        initial={{ opacity: 0, x: 200 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 200 }}
        className=" text-[34px] px-2  sm:px-0  sm:hidden"
      >
        <motion.div whileHover={{ scale: 1.1 }} >

        <HiBars3BottomLeft  />
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 200 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 200 }}
        className="flex gap-2  items-center cursor-pointer "
      >
        <span className=" w-9 "></span>
        <motion.h1
          whileHover={{ scale: 1.1 }}
          className=" font-semibold text-[24px]  bg-gradient-to-r from-red-700 to-red-500 text-transparent bg-clip-text "
        >
          Foodie
        </motion.h1>
      </motion.div>

      <div className="flex gap-5 list-none items-center ">
        <motion.ul
          initial={{ opacity: 0, x: 200 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 200 }}
          className={`xl:flex items-center hidden  gap-8 `}
        >
          <motion.li
            whileHover={{ scale: 1.1 }}
            className="lg:text-sm lg:text-md text-base text-textColor cursor-pointer hover:text-headingColor duration-100 transition-all ease-in-out"
          >
            <p>Home</p>
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.1 }}
            className="lg:text-sm lg:text-md text-base text-textColor cursor-pointer hover:text-headingColor duration-100 transition-all ease-in-out"
          >
            <p>Menu</p>
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.1 }}
            className="lg:text-sm lg:text-md text-base text-textColor cursor-pointer hover:text-headingColor duration-100 transition-all ease-in-out"
          >
            <p>Services</p>
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.1 }}
            className="lg:text-sm lg:text-md text-base text-textColor cursor-pointer hover:text-headingColor duration-100 transition-all ease-in-out"
          >
            <p>About us</p>
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.1 }}
            className="lg:text-sm lg:text-md text-base font text-textColor cursor-pointer hover:text-headingColor duration-100 transition-all ease-in-out"
          >
            Contact us
          </motion.li>

          <motion.li
            whileHover={{ scale: 1.1 }}
            className="lg:text-sm lg:text-[20px] text-base text-textColor cursor-pointer hover:text-headingColor duration-100 transition-all ease-in-out"
          >
            <div className=" flex items-center relative ">
              <IoMdBasket className=" text-[24px] " />
              <p className=" flex items-center absolute  right-[-4px] top-[-4px] justify-center p-2 bg-red-600 rounded-[100px] text-white text-[14px] h-4 w-4 ">
                0
              </p>
            </div>
          </motion.li>
        </motion.ul>
      </div>

      <motion.div
        initial={{ opacity: 0, x: 200 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 200 }}
      >
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="flex gap-3 border p-1 px-2 rounded-[5px] cursor-pointer items-center "
        >
          <span>
            <FiLogIn className=" text-[20px] sm:text-lg " />
          </span>
          <p className=" hidden sm:flex ">Login</p>
        </motion.div>
      </motion.div>
    </div>
  );
}
