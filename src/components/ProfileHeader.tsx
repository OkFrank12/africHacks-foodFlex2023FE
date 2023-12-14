import { IoMdLogOut, IoMdCart } from "react-icons/io";
import Logo from "../static/Logo";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import DropDown from "./DropDown";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useViewOneUser } from "../hooks/customHooks";
import { Link } from "react-router-dom";
import { onLogOutState } from "../global/reduxStates";

const ProfileHeader = () => {
  const user = useSelector((state: any) => state.user);
  const { data, isLoading } = useViewOneUser(user);
  const dispatch = useDispatch();
  const [show, setShow] = useState<boolean>(false);
  return (
    <>
      <div className="bg-red-500 w-[100%] text-white h-[70px] flex justify-center ">
        <div className="w-[85%]  flex justify-between items-center ">
          <Logo clr="white" />
          <div className="relative">
            {show ? (
              <AiOutlineClose
                size={40}
                onClick={() => setShow(!show)}
                className="hidden S500:flex cursor-pointer"
              />
            ) : (
              <AiOutlineMenu
                size={40}
                onClick={() => setShow(!show)}
                className="hidden S500:flex cursor-pointer"
              />
            )}

            {show && (
              <div className="absolute p-5 bg-white S500:flex hidden text-red-500 w-[200px] min-h-[100px] top-[60px] rounded-lg shadow-md right-0 flex-col">
                <DropDown data={data} dispatch={dispatch} />
              </div>
            )}
          </div>
          <div className="flex justify-center S500:hidden items-center gap-3">
            {!isLoading ? (
              <Link
                to={`/history-page/${data?._id}`}
                className="flex items-center cursor-pointer"
              >
                <div className="text-[20px] font-bold mr-2 w-[20px] h-[20px] bg-red-600 p-4 flex justify-center items-center rounded-full">
                  {data?.userName?.charAt(0)}
                </div>
                <div className="text-[13px]">{data?.userName}</div>
              </Link>
            ) : (
              "...."
            )}
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
        </div>
      </div>
    </>
  );
};

export default ProfileHeader;
