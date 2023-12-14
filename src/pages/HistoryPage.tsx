import { AiOutlineClose } from "react-icons/ai";
import DetailedProfile from "../components/DetailedProfile";
import Loans from "../components/Loans";
import { Link, useParams } from "react-router-dom";
import { useViewOneUser } from "../hooks/customHooks";

const HistoryPage = () => {
  const { id } = useParams();
  const { data } = useViewOneUser(id!);

  return (
    <>
      <div className="bg-[#e7f6ff] w-full h-[100vh] flex justify-center items-center">
        <div className="w-[450px] overflow-hidden min-h-[100px] bg-white rounded-lg shadow-lg">
          <DetailedProfile data={data} />
          <div className="w-full p-3">
            {/* */}
            <div className="flex text-gray-500 justify-between items-center ">
              <div className="font-semibold ">Loan History*</div>
              <Link to={`/home`}>
                <AiOutlineClose size={20} className="cursor-pointer" />
              </Link>
            </div>
            {/* */}
            <div className="w-full text-gray-500 text-[12px] S425:text-[9px] px-2 flex items-center  border h-[30px] rounded mt-1">
              <div className="w-[10%]">S/N</div>
              <div className="w-[20%]">NGN</div>
              <div className="w-[25%]">Status</div>
              <div className="w-[25%]">BIN</div>
              <div className="w-[25%]">Method</div>
            </div>
            <Loans />
          </div>
        </div>
      </div>
    </>
  );
};

export default HistoryPage;
