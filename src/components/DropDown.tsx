import { FC } from "react";
import { IoMdCart, IoMdLogOut } from "react-icons/io";
import { Link } from "react-router-dom";
import { onLogOutState } from "../global/reduxStates";

interface iData {
  data: any;
  dispatch: any;
}

const DropDown: FC<iData> = ({ data, dispatch }) => {
  return (
    <>
      <Link
        to={`/history-page/${data?._id}`}
        className="flex items-center cursor-pointer"
      >
        <div className="text-[20px] font-bold mr-2 w-[20px] h-[20px] bg-red-600 p-4 flex justify-center items-center rounded-full text-green-300">
          {data?.userName?.charAt(0)}
        </div>
        <div className="text-[13px]">{data?.userName}</div>
      </Link>
      <div className="flex mt-3 items-center w-full justify-center gap-5">
        <Link to={`/cart-page`} className="cursor-pointer">
          <IoMdCart size={20} />
        </Link>
        <div
          onClick={() => {
            dispatch(onLogOutState());
          }}
          className="cursor-pointer"
        >
          <IoMdLogOut size={20} />
        </div>
      </div>
    </>
  );
};

export default DropDown;
