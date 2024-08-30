import React from "react";

const Home = () => {
  return (
    <>
      <div className="h-screen bg-[#a18c8c]">
        <div className="flex justify-between align-middle  px-20 py-8">
          <div className="flex flex-col justify-center text-center text-orange-700 flex-1  ">
            <div className="font-cormorant text-7xl font-thin">AQUA</div>
            <div className="font-cormorant text-4xl font-thin">furniture</div>
          </div>
          <div className="flex-1">
            <img
              src="https://plus.unsplash.com/premium_photo-1674730952112-965c8e4decf4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aW50ZXJpb3IlMjBkZXNpZ258ZW58MHx8MHx8fDA%3D"
              alt="img"
              className="rounded-3xl h-full"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
