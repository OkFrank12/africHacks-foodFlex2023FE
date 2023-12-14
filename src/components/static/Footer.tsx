import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterCircle,
} from "react-icons/ai";
import Logo from "../../static/Logo";

const Footer = () => {
  return (
    <div className="w-full h-[300px] flex flex-col items-center text-white bg-[#424242] justify-center rounded-t-[50px]">
      <div className="flex flex-col items-center">
        <Logo clr="white" />
        <p className="text-[13px]">Lagos, Nigeria</p>
        <p className="w-[70%] text-center mt-3">
          Your gateway to stress-free grocery shopping with instant loans. Enjoy
          the freedom to purchase quality groceries without the financial
          constraints.
        </p>
        <div className="flex mt-5">
          <AiFillInstagram
            className="mx-5 cursor-pointer hover:scale-[1.02] duration-500"
            size={40}
          />
          <AiFillFacebook
            className="mx-5 cursor-pointer hover:scale-[1.02] duration-500"
            size={40}
          />
          <AiFillTwitterCircle
            className="mx-5 cursor-pointer hover:scale-[1.02] duration-500"
            size={40}
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
