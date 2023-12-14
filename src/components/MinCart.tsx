import { FaRegArrowAltCircleUp } from "react-icons/fa";
import { RiDeleteBin5Line } from "react-icons/ri";
import { FC, useState } from "react";
import { deleteCart } from "../api/cartAPI";
import Swal from "sweetalert2";

interface iCart {
  el: any;
}
const MinCart: FC<iCart> = ({ el }) => {
  const [num, setNum] = useState<number>(1);
  return (
    <>
      {" "}
      <div className="border S900:flex-col S900:flex hidden w-[300px] min-h-[150px] p-3 m-5 rounded-md">
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
              Only <span className="text-red-500 font-Bold">{el?.inStock}</span>{" "}
              left in stock
            </div>
          </div>
        </div>
        <div className="font-Bold mb-2 text-[30px] flex justify-center items-center text-gray-500">
          ₦ {el?.cost.toLocaleString()}.00
          <div
            className="w-[40px] ml-8 h-[40px] bg-slate-100 cursor-pointer flex justify-center items-center rounded "
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
          >
            <RiDeleteBin5Line color="red" size={20} />
          </div>
        </div>

        <div className="flex items-center w-full justify-center">
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
            <div className="w-[30px] h-[30px] bg-slate-100 cursor-pointer flex justify-center items-center rounded rotate-180" />
          ) : (
            <div
              onClick={() => setNum((els) => els - 1)}
              className="w-[30px] h-[30px] bg-slate-100 cursor-pointer flex justify-center items-center rounded rotate-180"
            >
              <FaRegArrowAltCircleUp color="red" size={20} />
            </div>
          )}
        </div>
        <div className="font-Bold text-[30px] text-center text-red-500">
          ₦ {(el?.cost * num).toLocaleString()}.00
        </div>
      </div>
    </>
  );
};

export default MinCart;
