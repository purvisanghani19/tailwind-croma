import { CircleUser, MapPin, ShoppingCart } from "lucide-react";
import React from "react";
import cromalogo from "../img/croma_logo.svg";

const Header = () => {
  return (
    <>
      <div className="w-full  sticky top-0 bg-black h-28 text-white flex md:justify-between items-center">
        <div className="sm:container sm:flex sm:justify-between">
          <div className="">
            <img
              className="md:h-7 lg:h-9 xl:h-10 h-5 ps-5"
              src={cromalogo}
              alt="logo"
            />
          </div>

          <div className="hidden sm:flex sm:pe-5 sm:flex-row sm:gap-4 md:gap-7 lg:gap-9 md:items-center">
            <div className="flex flex-row items-center">
              <MapPin size={28} color="#ffffff" />
              <div className="ps-2  font-open font-medium text-base">
                Surat, 309401
              </div>
            </div>
            <div>
              <CircleUser size={28} color="#ffffff" />
            </div>
            <div>
              <ShoppingCart size={28} color="#ffffff" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
