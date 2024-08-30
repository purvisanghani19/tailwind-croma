import React from "react";
import img1 from "../img/carousel/img1.webp";
import img2 from "../img/carousel/img2.webp";
import img3 from "../img/carousel/img3.webp";
import img4 from "../img/carousel/img4.webp";
import img5 from "../img/carousel/img5.webp";
import img6 from "../img/carousel/img6.webp";
import img7 from "../img/carousel/img7.webp";
import img8 from "../img/carousel/img8.webp";
import img9 from "../img/carousel/img9.webp";
import img10 from "../img/carousel/img10.webp";
import discount2 from "../img/discount/discount2.webp";
import discount1 from "../img/discount/discouunt1.jpeg";
import dismd1 from "../img/discount/dismd1.webp";
import dismd2 from "../img/discount/dismd2.webp";
import noworry from "../img/noworry.png";
import noworrysm from "../img/noworrysm.webp";
import new1 from "../img/what's new/new1.webp";
import new2 from "../img/what's new/new2.webp";
import new3 from "../img/what's new/new3.webp";
import new4 from "../img/what's new/new4.webp";
import collections1 from "../img/Collections/collections1.webp";
import collections2 from "../img/Collections/collections2.jpg";
import collections_sm1 from "../img/Collections/collections_sm1.jpg";
// import collections_sm2 from "../img/Collections/collections_sm2.jpg";

const Page2 = () => {
  return (
    <>
      <div className="h-auto bg-dark-gray ">
        <div className="object-contain flex flex-wrap gap-2 justify-center items-center py-9 px-8 ">
          <img className="h-44" src={img1} alt="" />
          <img className="h-44" src={img2} alt="" />
          <img className="h-44" src={img3} alt="" />
          <img className="h-44" src={img4} alt="" />
          <img className="h-44" src={img5} alt="" />
          <img className="h-44" src={img6} alt="" />
          <img className="h-44" src={img7} alt="" />
          <img className="h-44" src={img8} alt="" />
          <img className="h-44" src={img9} alt="" />
          <img className="h-44" src={img10} alt="" />
        </div>
        {/*----------------discount img------------- */}
        <div className=" flex gap-2 m-0  justify-center items-center xs:gap-3  mediumsmall:py-9 ">
          <div className="h-44 xs:h-56 mediumsmall:h-60 md:h-56">
            <img
              className="rounded-xl h-full w-full object-cover lg:hidden"
              src={dismd1}
              alt="Discount 1"
            />
            <img
              className=" hidden lg:block md:rounded-xl md:h-20 lg:h-32 xl:h-40 xl:w-full md:object-cover "
              src={discount1}
              alt="Discount 1"
            />
          </div>
          <div className="h-44 xs:h-56 mediumsmall:h-60 md:h-56 ">
            <img
              className="rounded-xl h-full w-full object-cover lg:hidden"
              src={dismd2}
              alt="Discount 2"
            />
            <img
              className=" hidden lg:block md:rounded-xl md:h-20 lg:h-32 xl:h-40 xl:w-full md:object-cover "
              src={discount2}
              alt="Discount 1"
            />
          </div>
        </div>
        {/*----------------discount2 img------------- */}
        <div className="px-4 sm:px-6 md:px-14 xl:px-40  py-8">
          <div className="flex flex-col justify-center items-start w-full ">
            <h2 className=" text-white text-base sm:text-2xl lg:text-3xl font-semibold font-open ">
              No More Worrying About Your Appliances
            </h2>
            <div className="h-full pt-5">
              <img
                className="hidden lg:block lg:w-lvw "
                src={noworry}
                alt="discount img"
              />
              <img
                className="w-full lg:hidden"
                src={noworrysm}
                alt="discount img"
              />
            </div>
          </div>
        </div>
        {/* --------------What’s Hot-----------------*/}
        <div className="px-3 sm:px-6 md:px-7 xl:px-40  py-8">
          {/* <div className="flex flex-col justify-center items-start w-full "> */}
          <h2 className=" px-1 text-white text-xl sm:text-2xl lg:text-3xl font-semibold font-open ">
            What’s Hot
          </h2>
          <div className=" grid grid-cols-2 object-cover md:grid-cols-4 justify-center gap-3 items-center pt-5">
            <img
              className="h-[270px]  md:h-[270px] md:w-[420px] lg:h-[450px]   rounded-xl"
              src={new1}
            />
            <img
              className="h-[270px]  md:h-[270px] md:w-[420px] lg:h-[450px] rounded-xl"
              src={new2}
            />
            <img
              className="h-[270px]  md:h-[270px] md:w-[420px] lg:h-[450px] rounded-xl"
              src={new3}
            />
            <img
              className="h-[270px]  md:h-[270px] md:w-[420px] lg:h-[450px] rounded-xl"
              src={new4}
            />
          </div>
          {/* </div> */}
        </div>

        {/* --------------Croma Collections-----------------*/}
        <div className="px-3 sm:px-6 md:px-7 xl:px-40  py-8">
          <h2 className=" px-1 text-white text-xl sm:text-2xl lg:text-3xl font-semibold font-open ">
            Croma Collections
          </h2>
          <div className="flex gap-2 m-0  justify-center items-center xs:gap-3  mediumsmall:py-9 ">
            <div className="">
              <img
                className="rounded-xl h-full w-full object-cover md:hidden"
                src={collections_sm1}
                alt="Discount 1"
              />
              <img
                className=" hidden md:block l  md:rounded-xl "
                src={collections1}
                alt="Discount 1"
              />
            </div>
            <div className="">
              <img
                className="rounded-xl object-cover md:hidden"
                src={collections_sm1}
                alt="Discount 1"
              />
              <img
                className=" hidden md:block md:rounded-xl "
                src={collections2}
                alt="Discount 1"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page2;
