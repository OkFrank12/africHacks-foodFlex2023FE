import { RiDeleteBin5Line } from "react-icons/ri";
import { FaRegArrowAltCircleUp } from "react-icons/fa";
import { FC, useState } from "react";
import { deleteCart } from "../api/cartAPI";
import Swal from "sweetalert2";

interface iEl {
  el: any;
}

const Carts: FC<iEl> = ({ el }) => {
  const [num, setNum] = useState<number>(1);

  return (
    <>
      <div className="w-full border-b-2 flex">
        <div className="border-r-2 w-[320px] flex items-center">
          <div className="w-full p-3 flex">
            <div className="w-[60px] h-[60px] rounded-md bg-slate-100">
              <img src={el?.image} />
            </div>
            <div className="ml-2 w-[80%]">
              <p className="font-semibold">{el?.title}</p>
              <div className="text-[8px] leading-3">
                {el?.description.substring(0, 100)}...
              </div>
              <div className="text-[10px]">
                Only{" "}
                <span className="text-red-500 font-semibold">
                  {el?.inStock}
                </span>{" "}
                left in stock
              </div>
            </div>
          </div>
        </div>
        <div className="border-r-2 w-[130px] flex items-center">
          <p className="font-Bold ml-2 h-5 text-gray-500">
            ₦ {el?.cost.toLocaleString()}.00
          </p>
        </div>
        <div className="border-r-2 pl-2 w-[150px] flex items-center ">
          {num === el?.inStock ? (
            <div className="w-[30px] h-[30px] bg-slate-100 cursor-pointer flex justify-center items-center rounded " />
          ) : (
            <div
              onClick={() => setNum((els) => els + 1)}
              className="w-[30px] h-[30px] bg-slate-100 cursor-pointer flex justify-center items-center rounded "
            >
              <FaRegArrowAltCircleUp color="red" size={20} />
            </div>
          )}
          <span className="font-Bold text-[20px] mx-5">{num}</span>
          {num === 1 ? (
            <div className="w-[30px] h-[30px] bg-slate-100 cursor-pointer flex justify-center items-center rounded " />
          ) : (
            <div
              onClick={() => setNum((els) => els - 1)}
              className="w-[30px] h-[30px] bg-slate-100 cursor-pointer flex justify-center items-center rounded rotate-180"
            >
              <FaRegArrowAltCircleUp color="red" size={20} />
            </div>
          )}
        </div>
        <div className="border-r-2 w-[150px] flex items-center">
          <p className="font-Bold ml-2 h-5 text-gray-500">
            ₦ {(el?.cost * num).toLocaleString()}.00
          </p>
        </div>
        <div className="flex items-center">
          <div
            onClick={() => {
              deleteCart(el?._id).then((res: any) => {
                Swal.fire({
                  icon: "success",
                  title: `${res.message}`,
                  timer: 3000,
                  timerProgressBar: true,
                  showConfirmButton: false,
                });
              });
            }}
            className="w-[40px] ml-8 h-[40px] bg-slate-100 cursor-pointer flex justify-center items-center rounded "
          >
            <RiDeleteBin5Line color="red" size={20} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Carts;
