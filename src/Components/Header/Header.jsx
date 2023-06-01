import React from 'react';
import image1 from "../../assets/hero-bg.png";
import image2 from "../../assets/i1.png";

export default function Header() {
  return (
    <div className="relative">
        <img
          src={image1}
          alt="coverPhoto"
          className=" absolute right-0 w-[350px] top-4 "
        />
        <div className="flex justify-between">
          <div className="p">lo</div>
          <div className=" w-[200px] mx-52 my-10 h-[210px] backdrop-blur-2xl shadow-lg relative rounded-[15px] ">
            <img
              src={image2}
              alt="iceCream"
              className=" absolute items-center justify-center top-[-100px] "
            />
            <div className=" flex flex-col gap-4 justify-center  items-center pt-20 ">
              <h1 className=" font-semibold ">Strawberries</h1>
              <p className=" font-semibold text-gray-500 " >Fresh Strawberries</p>
              <div className=" flex gap-2 ">
                <span>lo</span>
                <p>7.25</p>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}
