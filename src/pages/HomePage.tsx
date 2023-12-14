import ProductCard from "../components/ProductCard";
import ProfileHeader from "../components/ProfileHeader";
import { useViewAllProducts } from "../hooks/customHooks";

const HomePage = () => {
  const { data } = useViewAllProducts();
  return (
    <div className="bg-[#f0f1f7] flex-col items-center w-[100%] min-h-[100vh] flex">
      <ProfileHeader />
      <div className="my-[30px] flex justify-center flex-wrap w-[95%] S670:w-[100%]">
        {data?.map((props: any) => {
          return <ProductCard key={props?._id} props={props} />;
        })}
      </div>
    </div>
  );
};

export default HomePage;
