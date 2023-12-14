import { IoMdBatteryCharging } from "react-icons/io";
import images from "../assets/download-removebg-preview (4) 2.png";
import { Link } from "react-router-dom";
import { MdVisibility } from "react-icons/md";

const ProductCard2 = () => {

  return (
    <>
      <div className="border rounded relative cursor-pointer py-2 w-[250px] max-md:w-[300px] flex flex-col items-center">
        <div className="w-[90%] h-[250px] bg-[#d8d4d4] rounded-md relative">
            <div className="absolute transition-all duration-700 z-20 hover:opacity-100 flex justify-center items-center opacity-0 w-full h-full left-0 bg-[rgba(99,60,42,0.27)] ">
          <div className="w-full h-[50px] justify-center flex">
            <div className="w-[40px] mx-1 rounded text-yellow-600 h-[40px] bg-white flex justify-center items-center">
              <IoMdBatteryCharging size={30} />
            </div>
            <Link
              to={`/id/detail`}
              className="w-[40px] mx-1 rounded text-yellow-600 h-[40px] bg-white flex justify-center items-center"
            >
              <MdVisibility size={30} />
            </Link>
          </div>
        </div>
            <img src={images} alt="" />
        </div>

        <div className="flex flex-col items-center mt-2 w-full"> 
            <p className="font-bold text-[15px]">Roman Tomato</p>
            <p className="font-bold text-[14px] text-[#000000bc]">₦ 400.00</p>
            <button className="w-[90%] cursor-pointer hover:text-white transition-all duration-500  rounded-md py-2 bg-[#fc4457] mt-2">Details</button>
        </div>
      </div>
    </>
  );
};

export default ProductCard2;
