import React from "react";
import pagebody from "../img/HP_Rotating_VivoV30_19June24_qp3nih.webp";
export default function Page1() {
  return (
    <>
      {/* <div
        style={{ height: "70%" }}
        className="flex w-full overflow-hidden bg-slate-900"
      >
        <img
          style={{ height: "90%" }}
          className=" w-full top-0"
          src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1718722865/Croma%20Assets/CMS/Homepage%20Banners/HP%20Rotating/2024/June/19062024/Desktop/HP_Rotating_VivoV30_19June24_qp3nih.jpg"
          alt="bgimg"
        />
      </div> */}
      <div className="flex items-center justify-center h-screen w-full overflow-hidden">
        <img
          className="object-cover h-full w-full"
          src={pagebody}
          alt="bgimg"
        />
      </div>
    </>
  );
}
