import React from "react";
import Image from "next/image";
const page = () => {
  return (
    <div className="bg-gray-100">
      <header className="bg-white w-[100%]  p-[10px] ">
        <button>Back</button>
        <Image
          src="/images/logo_tapi_aubergine.svg"
          width={200}
          height={50}
          alt="Logo"
          className="h-[40px] w-auto"
        />
      </header>
      <div className=" mx-[300px] my-[100px] bg-white rounded-md p-[30px]">
        <h1 className="text-center text-gray-600 text-[25px] font-bold">
          Book a Free Home Visit
        </h1>
        <p>Our flooring expert will help you find your dream floor.</p>
        <ul className="my-[30px] text-gray-600">
          <li>
            We'll bring our flooring collection to your door, so you can browse
            in the comfort of your own home.
          </li>
          <li>We'll give you friendly, personalised advice.</li>
          <li>
            We'll measure up, plan, and give you a free, no obligation quote.
          </li>
        </ul>
        <div>
          <h3 className="text-gray-600 font-bold text-[20px]">Your Details</h3>
          <hr className="text-yellow-400 font-bold" />
          <div className="text-center my-[20px] ">
            <p>
              Email<span className="text-red-600">*</span>:{" "}
              <input
                type="email"
                name=""
                id=""
                className="border bg-gray-200 border-gray-200 rounded-md"
              />{" "}
            </p>
            <button type="submit" className="my-[20px] bg-yellow-600 px-[200px] py-[5px] rounded-md cursor-pointer text-gray-600">Continue</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
