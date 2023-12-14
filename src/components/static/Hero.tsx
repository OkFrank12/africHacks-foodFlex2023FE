import Header from "./Header";
import phone from "../../assets/image 1.png";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="w-full py-2 flex items-center min-h-[100vh] justify-center bg-gradient-blue-pink flex-col">
      <Header />
      <br />
      <br />
      <div className="w-[85%] h-full flex items-center justify-between S1000:flex-col">
        <div className="w-[70%] S1000:w-full S1000:text-center">
          <h1 className="text-[60px] leading-[90px] S670:leading-none font-bold text-white w-[60%] S1000:w-full S670:text-[40px] S670:font-semibold">
            Groceries and Food items.
          </h1>
          <p className="text-white text-[20px] S500:text-[13px]">
            Get instant loan for urgent purchases.
          </p>
          <div className="mt-5">
            <div className="flex justify-center">
              <Link to={`/register`} className="px-10 hidden S500:flex mr-5 S500:m-1 py-3 rounded-full  text-white duration-500 hover:scale-[1.02] bg-red-500">
                Join
              </Link>
            </div>
            <Link
              to={`/register`}
              className="px-10 S500:hidden mr-5 S500:m-1 py-3 rounded-full  text-white duration-500 hover:scale-[1.02] bg-red-500"
            >
              Register <span className="S500:hidden">Now</span>
            </Link>
            <Link
              to={`/sign-in`}
              className="px-10 py-3 rounded-full S500:hidden border-rose-500 border text-red-500 duration-500 hover:scale-[1.02] bg-white"
            >
              Login
            </Link>
          </div>
        </div>
        <div className="w-[50%] S1000:w-full ">
          <img src={phone} className="w-full" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
