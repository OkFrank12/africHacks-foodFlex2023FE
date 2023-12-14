import { IoArrowDownCircleOutline } from "react-icons/io5";
import { BiSolidCartDownload } from "react-icons/bi";
import { Link, useParams } from "react-router-dom";
import { useViewOneProduct } from "../hooks/customHooks";
import { BallTriangle } from "react-loader-spinner";
import { createCartAPI } from "../api/cartAPI";
import { useDispatch, useSelector } from "react-redux";
import { onCountState } from "../global/reduxStates";
import { AiOutlineClose } from "react-icons/ai";

const DetailedPage = () => {
  const { id } = useParams();
  const { data, isLoading } = useViewOneProduct(id!);
  const user = useSelector((state: any) => state.user);
  const count: any = useSelector((state: any) => state.count);
  const dispatch = useDispatch();

  const addCount = () => {
    dispatch(onCountState(count + 1));
  };

  const minusCount = () => {
    dispatch(onCountState(count - 1));
  };
  return (
    <>
      <div className="w-full min-h-[100vh] bg-[#f0f1f7] flex justify-center items-center">
        <div className="w-[95%] h-[95%] py-10 S1200:flex-col bg-white flex pl-20 S530:pl-5 justify-between items-center S670:items-start">
          {isLoading ? (
            <BallTriangle color="red" />
          ) : (
            <>
              <div className="w-[35%] S1200:w-[400px] flex justify-center items-center h-[500px] rotate-6 rounded bg-slate-100 S670:rotate-0 S670:hidden">
                <img src={data?.image} className="object-cover" />
              </div>
              <img src={data?.image} className="hidden w-[80%] S670:flex" />
              <div className="w-[60%] S1200:w-full">
                <p className="font-Bold flex text-[50px] uppercase text-gray-500 S670:text-[30px]">
                  {data?.title}
                  <Link to={`/home`}>
                    {" "}
                    <AiOutlineClose className="absolute right-10" />
                  </Link>
                </p>
                <p className="text-gray-500">
                  Only{" "}
                  <span className="text-[20px] text-red-500 font-Bold">
                    {data?.inStock}
                  </span>{" "}
                  left in stock
                </p>
                <p className="font-Bold text-[40px] text-red-500">
                  ₦ {data?.cost.toLocaleString()}.00
                </p>
                <p className="text-gray-700 text-[20px] font-bold">
                  Description
                </p>
                <p className="w-[80%] leading-8 my-3 text-gray-500 S530:text-[13px] S530:w-[95%] S530:leading-5">
                  {data?.description}
                </p>
                <p className="text-gray-700 text-[20px] font-bold">Quantity</p>
                <div className="flex mt-3 items-center">
                  {count === data?.inStock ? (
                    <div className="w-[50px] cursor-pointer h-[50px] bg-gray-100 rounded flex justify-center items-center" />
                  ) : (
                    <div
                      onClick={addCount}
                      className="w-[50px] cursor-pointer h-[50px] bg-gray-100 rounded flex justify-center items-center"
                    >
                      <IoArrowDownCircleOutline className="rotate-180 text-[30px] text-red-500" />
                    </div>
                  )}
                  <p className="font-Bold cursor-default mx-5 text-[30px]">
                    {count}
                  </p>
                  {count === 1 ? (
                    <div className="w-[50px] cursor-pointer h-[50px] bg-gray-100 rounded flex justify-center items-center" />
                  ) : (
                    <div
                      onClick={minusCount}
                      className="w-[50px] cursor-pointer h-[50px] bg-gray-100 rounded flex justify-center items-center"
                    >
                      <IoArrowDownCircleOutline className="text-[30px] text-red-500" />
                    </div>
                  )}
                  <Link
                    to={`/cart-page`}
                    onClick={() => {
                      createCartAPI(user, id!, {
                        title: data?.title,
                        inStock: data?.inStock,
                        cost: data?.cost,
                        description: data?.description,
                        image: data?.image,
                      });
                    }}
                    className="px-10 py-3 S530:p-3 cursor-pointer bg-red-500 ml-5 flex items-center text-white rounded-lg"
                  >
                    <BiSolidCartDownload className="text-[30px] mr-3" />
                    <span className="S530:hidden">Add To Cart</span>
                  </Link>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default DetailedPage;
