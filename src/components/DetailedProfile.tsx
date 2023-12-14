import { FC } from "react";

interface iUser {
  data: any;
}
const DetailedProfile: FC<iUser> = ({ data }) => {
  return (
    <>
      <div className="w-full h-[125px] flex p-3 bg-red-500">
        <div className="w-[60px] h-[60px] rounded-full flex justify-center items-center text-red-500 font-semibold text-[50px] bg-white">
          {data?.userName?.charAt(0)}
        </div>
        <div className="w-[80%] h-full text-white ml-3">
          <div className="flex justify-between">
            <div className="capitalize font-semibold text-[20px] S425:text-[18px]">
              {data?.userName}
            </div>
            <div className="text-[12px] text-red-500 bg-white rounded-md px-5 py-2 font-semibold cursor-default">
              {data?.verified === true ? "Verified" : "Not Verified"}
            </div>
          </div>
          <div className="text-[11.3px] leading-3 S425:text-[8px]">
            {data?.email}
          </div>
          <div className="text-[11.3px] leading-5">{data?.phoneNo}</div>
          <div className="flex text-center">
            <div className="mr-10">
              <div className="text-[20px] font-semibold S425:text-[15px]">
                ₦{data?.wallet?.toLocaleString()}.00
              </div>
              <div className="text-[10px]">Wallet Balance</div>
            </div>
            <div>
              <div className="text-[20px] font-semibold S425:text-[15px]">
                {data?.loan?.toLocaleString()}.00
              </div>
              <div className="text-[10px]">Loaned Amount</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailedProfile;
