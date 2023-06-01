import React from "react";
import { motion } from "framer-motion";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

// image here ===============>

import imageDelivery from "../../assets/img/delivery.png";
import image1 from "../../assets/hero-bg.png";
import image2 from "../../assets/i1.png";
import fruit from "../../assets/img/f1.png";
import chicken from "../../assets/img/c3.png";
import fish from "../../assets/img/fi3.png";

const DataShowCase = [
  {
    id: 1,
    heading: "Strawberries",
    text: "Fresh Strawberries",
    icons: "$",
    price: "10",
    dish: fruit,
  },

  {
    id: 2,
    heading: "Chicken",
    text: "Mixed Kebab",
    icons: "$",
    price: "20.09",
    dish: chicken,
  },

  {
    id: 3,
    heading: "Tilapia",
    text: "Roasted Tilapia",
    icons: "$",
    price: "15.25",
    dish: fish,
  },

  {
    id: 4,
    heading: "Ice cream",
    text: "Chocolate & Vanila",
    icons: "$",
    price: "5.25",
    dish: image2,
  },
];

export default function Header() {
  return (
    <>
      <div className=" flex justify-start mx-12 ">
        <div className=" grid gap-3 mt-16 justify-start  ">
          <div className="flex  p-1 px-2 bg-yellow-100 rounded-[10px] items-center gap-2  w-fit">
            <p className=" text-orange-600  font-bold text-[16px] ">
              Bike Delivery
            </p>
            <img
              src={imageDelivery}
              alt="deliveryman"
              className=" w-[30px] h-[30px]  rounded-full  bg-white "
            />
          </div>
          <h1 className=" font-bold text-[64px] w-[590px] ">
            The Fastest Food Delivery in{" "}
            <span className="bg-gradient-to-r from-orange-700 font-bold to-orange-500 text-transparent bg-clip-text ">
              Nepal
            </span>{" "}
          </h1>
          <p className=" w-[500px] text-[16px] text-gray-700 text-justify ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
            eius maxime debitis ad sed. Id eveniet itaque adipisci dolore esse,
            mollitia commodi temporibus provident officia sapiente aliquid
            repellat quasi.
          </p>
          <div>
            <motion.button
              whileHover={{ scale: 1.1 }}
              className=" p-1 px-2  text-[20px] text-black bg bg-gradient-to-r from-orange-300  rounded-[7px] to-orange-400 "
            >
              Order Now
            </motion.button>
          </div>
        </div>

        {/* for the foodshows case */}

        <div className="flex justify-between relative">
          <div className=" absolute right-[-20px] w-[350px]  ">
            <img src={image1} alt="background" className="  " />
          </div>

          <div className=" flex flex-wrap justify-center gap-8 mt-14 ml-36 ">
            {DataShowCase.map(({ id, heading, text, icons, price, dish }) => {
              return (
                <div
                  key={id}
                  className=" w-[200px]  h-[210px] backdrop-blur-2xl shadow-lg relative rounded-[15px] "
                >
                  <motion.img
                    src={dish}
                    whileHover={{ scale: 1.1 }}
                    alt="iceCream"
                    className=" absolute w-36  z-50 items-center right-[30px] top-[-50px] "
                  />
                  <div className=" flex flex-col gap-4 justify-center  items-center pt-24 ">
                    <h1 className=" font-semibold ">{heading}</h1>
                    <p className=" font-semibold text-gray-400 text-[18px] ">
                      {text}
                    </p>
                    <div className=" flex gap-2 ">
                      <span className=" text-orange-500 ">{icons}</span>
                      <p>{price}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className=" flex mx-12 mt-[70px] mb-[50px] justify-between items-center ">
        <p className=" text-[24px] ">Our Fresh & Healthy Fruits</p>
        <div className=" flex items-center gap-3 ">
          <span
            whileHover={{ scale: 1.1 }}
            className="  text-white p-2 bg-orange-400 hover:bg-orange-600  rounded-[5px] "
          >
            <AiOutlineLeft />
          </span>
          <span
            whileHover={{ scale: 1.1 }}
            className="  text-white p-2 bg-orange-400 hover:bg-orange-600 rounded-[5px] "
          >
            <AiOutlineRight />
          </span>
        </div>
      </div>
    </>
  );
}
