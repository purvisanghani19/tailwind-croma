import { ChevronDown, ChevronUp } from "lucide-react";
import React, { useState } from "react";
const Footer = () => {
  const [usefulLinksOpen, setUsefulLinksOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

  const toggleUsefulLinks = () => {
    setUsefulLinksOpen(!usefulLinksOpen);
  };

  const toggleProducts = () => {
    setProductsOpen(!productsOpen);
  };
  return (
    <>
      <div className="px-5 py-16 h-auto grid grid-cols-1 md:grid-cols-6 lg:grid-cols-6  bg-[#1f1f1f] text-white text-start font-open font-semibold xl:font-bold divide-y lg:divide-y-0 lg:divide-x xl:px-36  ">
        {/*----------- 1 div------------ */}
        <div className="py-4 md:col-start-2 md:col-span-4 lg:col-start-1 lg:col-span-2">
          <h4 className="py-2 text-lg ps-2">CONNECT WITH US</h4>
          <div className="flex justify-start items-center py-2  ">
            <div className="p-2 md:p-3">
              <i className="fa-brands fa-youtube fa-lg text-[24px] md:text-[28px]"></i>
            </div>
            <div className="p-2 md:p-3">
              <i className="fa-brands fa-facebook fa-lg text-[24px] md:text-[28px]"></i>
            </div>
            <div className="p-2 md:p-3">
              <i className="fa-brands fa-instagram fa-lg text-[24px] md:text-[28px]"></i>
            </div>
            <div className="p-2 md:p-3">
              <i className="fa-brands fa-linkedin-in fa-lg text-[24px] md:text-[28px]"></i>
            </div>
            <div className="p-2 md:p-3">
              <i className="fa-brands fa-x-twitter fa-lg text-[24px] md:text-[28px]"></i>
            </div>
          </div>

          <h5 className="pt-2 md:pt-5 md:text-lg ps-2 md:font-bold font  font-normal text-sm ">
            © Copyright 2023 Croma. All rights reserved
          </h5>
        </div>

        {/*----------- 2 div------------ */}

        <div className="py-2 md:col-start-1 md:col-end-4  lg:col-start-3 lg:col-end-5  lg:py-0 lg:flex lg:justify-center lg:items-start">
          <div className="lg:px-4 xl:px-2 flex flex-col">
            <div
              onClick={toggleUsefulLinks}
              className="pt-3 flex flex-row justify-between md:justify-center lg:justify-start"
            >
              <h5 className="px-2 lg:px-0 lg:pt-6 lg:text-xl">USEFUL LINKS </h5>
              {usefulLinksOpen ? (
                <ChevronUp className="md:hidden" />
              ) : (
                <ChevronDown className="md:hidden" />
              )}
            </div>

            <div className=" flex justify-around lg:justify-center ">
              <div
                className={`openlinks ${
                  usefulLinksOpen ? "block" : "hidden"
                } md:block  `}
              >
                <h5 className="pt-2 text-sm md:text-base md:pt-3 md:text-normal  lg:pt-4  lg:text-[18px]">
                  Help And Support
                </h5>
                <h5 className="pt-2 text-sm md:text-base md:pt-3 md:text-normal lg:pt-4 lg:text-[18px]">
                  FAQs
                </h5>
                <h5 className="pt-2 text-sm md:text-base md:pt-3 md:text-normal lg:pt-4  lg:text-[18px]">
                  Buying Guide
                </h5>
                <h5 className="pt-2 text-sm md:text-base md:pt-3 md:text-normal lg:pt-4  lg:text-[18px]">
                  Return Policy
                </h5>
                <h5 className="pt-2 text-sm md:text-base md:pt-3 md:text-normal lg:pt-4  lg:text-[18px]">
                  B2B Orders
                </h5>
                <h5 className="pt-2 text-sm md:text-base md:pt-3 md:text-normal lg:pt-4  lg:text-[18px]">
                  Store Locator
                </h5>
                <h5 className="pt-2 text-sm md:text-base md:pt-3 md:text-normal lg:pt-4  lg:text-[18px]">
                  E-Waste
                </h5>
                <h5 className="pt-2 text-sm md:text-base md:pt-3 md:text-normal lg:pt-4  lg:text-[18px]">
                  Franchise Opportunity
                </h5>
              </div>
              <div
                className={`openlinks ${
                  usefulLinksOpen ? "block" : "hidden"
                } md:block ps-3`}
              >
                <h5 className="pt-2 text-sm md:text-base md:pt-3 md:text-normal  lg:pt-4  lg:text-[18px]">
                  Site Map
                </h5>
                <h5 className="pt-2 text-sm md:text-base md:pt-3 md:text-normal  lg:pt-4  lg:text-[18px]">
                  Careers At Croma
                </h5>
                <h5 className="pt-2 text-sm md:text-base md:pt-3 md:text-normal  lg:pt-4  lg:text-[18px]">
                  Terms Of Use
                </h5>
                <h5 className="pt-2 text-sm md:text-base md:pt-3 md:text-normal  lg:pt-4  lg:text-[18px]">
                  Disclaimer
                </h5>
                <h5 className="pt-2 text-sm md:text-base md:pt-3 md:text-normal  lg:pt-4  lg:text-[18px]">
                  Privacy Policy
                </h5>
                <h5 className="pt-2 text-sm md:text-base md:pt-3 md:text-normal  lg:pt-4  lg:text-[18px]">
                  Unboxed
                </h5>
                <h5 className="pt-2 text-sm md:text-base md:pt-3 md:text-normal  lg:pt-4  lg:text-[18px]">
                  Gift Card
                </h5>
                <h5 className="pt-2 text-sm md:text-base md:pt-3 md:text-normal  lg:pt-4  lg:text-[18px]">
                  Croma E-Star
                </h5>
              </div>
            </div>
          </div>
        </div>
        {/*----------- 3 div ---------*/}
        <div className="py-0 md:col-start-4 md:col-end-7  lg:col-start-5 lg:col-end-7  lg:py-0 lg:flex lg:justify-center lg:items-start">
          <div className="lg:px-4 xl:px-4 flex flex-col">
            <div
              onClick={toggleProducts}
              className="pt-3 flex flex-row justify-between md:justify-center lg:justify-start"
            >
              <h5 className=" px-2 md:px-0 md:pt-6 md:text-xl">PRODUCTS </h5>
              {productsOpen ? (
                <ChevronUp className="md:hidden" />
              ) : (
                <ChevronDown className="md:hidden" />
              )}
            </div>

            <div className="flex justify-around ">
              <div
                className={`openlinks ${
                  productsOpen ? "block" : "hidden"
                } md:block  `}
              >
                <h5 className="pt-2 text-sm md:text-base md:pt-3 md:text-normal  lg:pt-4  lg:text-[18px]">
                  Televisions & <br /> Accessories
                </h5>
                <h5 className="pt-2 text-sm md:text-base md:pt-3 md:text-normal  lg:pt-4  lg:text-[18px]">
                  Home Appliances
                </h5>
                <h5 className="pt-2 text-sm md:text-base md:pt-3 md:text-normal  lg:pt-4  lg:text-[18px]">
                  Phones & Wearables
                </h5>
                <h5 className="pt-2 text-sm md:text-base md:pt-3 md:text-normal  lg:pt-4  lg:text-[18px]">
                  Computers & Tablets
                </h5>
                <h5 className="pt-2 text-sm md:text-base md:pt-3 md:text-normal  lg:pt-4  lg:text-[18px]">
                  Kitchen Appliances
                </h5>
                <h5 className="pt-2 text-sm md:text-base md:pt-3 md:text-normal  lg:pt-4  lg:text-[18px]">
                  Audio & Video
                </h5>
                <h5 className="pt-2 text-sm md:text-base md:pt-3 md:text-normal  lg:pt-4  lg:text-[18px]">
                  Health & Fitness
                </h5>
              </div>
              <div
                className={`openlinks ${
                  productsOpen ? "block" : "hidden"
                } md:block ps-3`}
              >
                <h5 className="pt-2 text-sm md:text-base md:pt-3 md:text-normal  lg:pt-4  lg:text-[18px]">
                  Grooming & <br /> Personal Care
                </h5>
                <h5 className="pt-2 text-sm md:text-base md:pt-3 md:text-normal  lg:pt-4  lg:text-[18px]">
                  Cameras & Accessories
                </h5>
                <h5 className="pt-2 text-sm md:text-base md:pt-3 md:text-normal  lg:pt-4  lg:text-[18px]">
                  Smart Devices
                </h5>
                <h5 className="pt-2 text-sm md:text-base md:pt-3 md:text-normal  lg:pt-4  lg:text-[18px]">
                  Gaming
                </h5>
                <h5 className="pt-2 text-sm md:text-base md:pt-3 md:text-normal  lg:pt-4  lg:text-[18px]">
                  Accessories
                </h5>
                <h5 className="pt-2 text-sm md:text-base md:pt-3 md:text-normal  lg:pt-4  lg:text-[18px]">
                  Top Brands
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*----------------------- grid practice(THIS IS IMPORTANT ....PERIOD) --------------------- */}

      {/* <div class="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-6  gap-2">
        <div class="md:col-start-2 md:col-span-4 lg:col-start-1 lg:col-span-2  bg-midnight">
          01
        </div>
        <div class="md:col-start-1 md:col-end-4  lg:col-start-3 lg:col-end-5  bg-gray-600">
          02
        </div>
        <div class="md:col-start-4 md:col-end-7  lg:col-start-5 lg:col-end-7 bg-red-900">
          03
        </div>
      </div> */}
    </>
  );
};

export default Footer;
