import { MdOutlineStar } from "react-icons/md";
import { FC } from "react";
import { Link } from "react-router-dom";

interface iProps {
  props: any;
}

const ProductCard: FC<iProps> = ({ props }) => {
  return (
    <>
      <div className="w-[280px] h-[350px] bg-[white] m-4 overflow-hidden rounded-[10px]">
        <div className="p-5 flex flex-col justify-between h-[87%]">
          <div className="bg-[#f0f1f7] w-[100%] flex justify-center items-center h-[210px] rounded-[10px]">
            <img src={props?.image} alt="" className="w-[80%]" />
          </div>
          <div className="w-[100%] mt-3 flex justify-between items-center ">
            <div className="text-[15px] font-semibold">{props?.title}</div>
            <div className="flex justify-center items-center">
              <div className=" text-[13px]">3</div>
              <div className="text-red-600 ">
                <MdOutlineStar size={15} />
              </div>
            </div>
          </div>
          <div className="w-[100%] flex justify-between items-center ">
            <div className=" font-Bold text-[20px] text-gray-400">
              ₦ {props?.cost.toLocaleString()}.00
            </div>
            <div className="flex justify-center items-center text-[13px] font-semibold">
              <div>qty:</div>
              <div>{props?.inStock}</div>
            </div>
          </div>
        </div>
        <Link
          to={`/detailed-page/${props?._id}`}
          className="w-[100%] h-[45px] text-[white] bg-red-500 flex justify-center items-center text-[15px] cursor-pointer hover:scale-[1.05] transition-all duration-700 overflow-hidden "
        >
          <div>Buy</div>
        </Link>
      </div>
    </>
  );
};

export default ProductCard;
