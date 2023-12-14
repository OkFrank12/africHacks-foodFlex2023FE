import { AiFillBank } from "react-icons/ai";
import Logo from "../../static/Logo";
import { useDispatch, useSelector } from "react-redux";
import { onToggleState } from "../../global/reduxStates";
import SeekLoanScreen from "../../screens/SeekLoanScreen";

const Header = () => {
  const toggle = useSelector((state: any) => state.toggle);
  const dispatch = useDispatch();

  const onHandleToggleState = () => {
    dispatch(onToggleState(!toggle));
  };
  return (
    <>
      {toggle && <SeekLoanScreen handleToggle={onHandleToggleState} />}
      <div className="w-full h-[60px] flex items-center justify-center ">
        <div className="w-[85%] h-full flex items-center justify-between">
          <Logo clr="white" />
          <AiFillBank
            onClick={onHandleToggleState}
            color="white"
            size={40}
            className="cursor-pointer hidden S500:flex"
          />
          <button
            onClick={onHandleToggleState}
            className="px-10 py-3 S500:hidden rounded-full border-rose-500 border text-red-500 duration-500 hover:scale-[1.02] bg-white"
          >
            Request for loan
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
