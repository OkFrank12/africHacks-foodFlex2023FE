import { FC, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import PrivateRouter from "../router/PrivateRouter";
import { checkUsersBINAPI } from "../api/loanAPI";

interface iToggle {
  handleToggle: any;
}

const SeekLoanScreen: FC<iToggle> = ({ handleToggle }) => {
  const validInput = (e: any) => {
    const input = e.target;
    const inputValue = input.value;

    input.value = inputValue.replace(/\D/g, "");
  };

  // const user = useSelector((state: any) => state.user);
  // const { data } = useViewOneUser(user);

  // const [ip, setIP] = useState<string>("");

  // const getData = async () => {
  //   const res = await axios.get("https://api.ipify.org/?format=json");
  //   setIP(res.data.ip);
  // };

  // useEffect(() => {
  //   getData();
  // }, []);

  const [bin, setBin]: any = useState<number>();
  return (
    <>
      <div
        style={{
          backgroundColor: "rgba(107, 34, 34, 0.5)",
        }}
        className="w-[100%] h-[100vh] top-0 fixed flex justify-center items-center"
      >
        <div
          className="absolute top left-0 w-full h-[100vh]"
          onClick={handleToggle}
        />
        <PrivateRouter>
          <div className="bg-white w-[450px] flex flex-col items-center justify-center relative min-h-[200px] rounded-lg p-5">
            <AiOutlineClose
              size={20}
              color="grey"
              onClick={handleToggle}
              className="absolute cursor-pointer top-3 right-3"
            />
            <div className="font-Bold text-[25px] text-red-500 ">
              BIN Checker
            </div>
            <div className="text-[11px] text-gray-500 font-medium text-center w-[80%] ">
              Our commitment to user safety reaches new heights <br /> as we
              implement this cutting-edge
              <br /> to verify user validity (Bank Identification Number).
            </div>
            <div className="mt-[15px] font-Bold text-gray-500 text-[13px] text-center">
              PLACE THE FIRST 6 DIGIT OF YOUR CARD
            </div>
            <input
              type="text"
              onInput={validInput}
              maxLength={6}
              value={bin}
              onChange={(e: any) => {
                setBin(e.target.value);
              }}
              className="w-[200px] text-center text-[30px] font-Bold text-gray-500 outline-none border rounded-md h-[40px] pl-3"
            />
            <div
              onClick={() => {
                checkUsersBINAPI(bin!).then((res: any) => {
                  JSON.stringify(
                    localStorage.setItem("BIN", JSON.stringify(res))
                  );
                });
              }}
              className="w-[200px] mt-[10px] h-[45px] text-[white] bg-red-500 rounded flex justify-center items-center font-light text-[13px] cursor-pointer hover:scale-[1.02] transition-all duration-700 overflow-hidden "
            >
              Check BIN
            </div>
          </div>
          ;
        </PrivateRouter>
      </div>
    </>
  );
};

export default SeekLoanScreen;
