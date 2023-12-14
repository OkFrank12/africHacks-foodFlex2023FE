import { Link } from "react-router-dom";
import ProductCard from "../ProductCard";
import { useViewAllProducts } from "../../hooks/customHooks";

const ProductScreen = () => {
  const { data } = useViewAllProducts();
  const datas = data?.slice(0, 4);
  return (
    <div className="w-full flex bg-[#f0f1f7] min-h-[560px] py-5 items-center justify-center ">
      <div className="w-[90%] ">
        <center className="text-[30px] font-semibold text-gray-500">
          <span>about</span>{" "}
          <span className="text-red-500 font-Bold">Products</span>
        </center>
        <div className="w-full flex justify-center flex-wrap">
          {datas?.map((props: any) => (
            <ProductCard props={props} key={props?._id} />
          ))}
        </div>
        <br />
        <center className="">
          <Link
            to={`/home`}
            className="px-10 py-3 bg-red-500 w-[200px] rounded-full text-white"
          >
            View All
          </Link>
        </center>
      </div>
    </div>
  );
};

export default ProductScreen;
