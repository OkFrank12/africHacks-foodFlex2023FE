import { Link, useNavigate } from "react-router-dom";
import Logo from "../static/Logo";
import { useState } from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerUserAPI } from "../api/authAPI";
import Swal from "sweetalert2";
import Loader from "../static/Loader";

const RegisterPage = () => {
  const BVNInput = (e: any) => {
    const input = e.target;
    const inputValue = input.value;

    input.value = inputValue.replace(/\D/g, "");
  };

  const validateInput = (e: any) => {
    const input = e.target;
    let inputValue = input.value;
    inputValue = inputValue.replace(/\D/g, "");

    inputValue = inputValue.replace(/^0+/, "");

    input.value = inputValue;
  };

  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);
  const schema = yup.object({
    userName: yup.string().required(),
    email: yup.string().email().trim().lowercase().required(),
    password: yup.string().required(),
    confirm: yup.string().oneOf([yup.ref("password")]),
    phoneNo: yup.string().required(),
    BVN: yup.string().required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onHandleSubmit = handleSubmit(async (data: any) => {
    setLoading(true);
    registerUserAPI(data).then((res: any) => {
      if (res) {
        Swal.fire({
          icon: "success",
          title: `${res.message}`,
          text: "A mail has been sent to you...",
          timer: 3000,
          timerProgressBar: true,
          showConfirmButton: false,
        }).then(() => {
          setLoading(false);
          navigate("/sign-in");
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "An Error occured",
          text: "Check your credentials or internet connections",
          timer: 3000,
          timerProgressBar: true,
          showConfirmButton: false,
        }).then(() => {
          setLoading(false);
        });
      }
    });
  });
  return (
    <>
      {loading && <Loader />}
      <div className="bg-[#f0f1f7] w-[100%] min-h-[100vh] py-5 flex justify-center flex-col items-center ">
        <Logo clr="red" />
        <form
          onSubmit={onHandleSubmit}
          className="w-[400px] S425:w-[300px] min-h-[500px] bg-[white] mt-[20px] rounded p-6 "
        >
          <div className="text-[16px] mt-[10px] text-center font-semibold text-[#1E1E1E]">
            Register
          </div>
          <div className="text-[10px] text-gray-500 text-center ">
            Welcome and Join us by creating a free account
          </div>

          <div className=" mt-[20px] ">
            <div className=" text-[12px] font-semibold text-[#1E1E1E] ">
              User Name
            </div>
            <input
              className="w-[100%] text-[12px] mt-[3px]  h-[50px]  p-5 outline-none border rounded "
              placeholder="Tender Jecinta"
              type="text"
              {...register("userName")}
            />
            {errors.userName?.message && (
              <div className="text-red-500 text-[12px]">UserName Required</div>
            )}
          </div>
          <div className=" mt-[15px] ">
            <div className=" text-[12px] font-semibold text-[#1E1E1E] ">
              Email Address
            </div>
            <input
              className="w-[100%] text-[12px] mt-[3px] h-[50px]  p-5 outline-none border rounded "
              placeholder="tenderjecinta@gmail.com"
              type="text"
              {...register("email")}
            />
            {errors.email?.message && (
              <div className="text-red-500 text-[12px]">
                Email Address Required
              </div>
            )}
          </div>
          <div className="mt-[15px] ">
            <div className=" text-[12px] font-semibold text-[#1E1E1E] ">
              Password
            </div>
            <input
              className="w-[100%] text-[12px] mt-[3px] h-[50px]  p-5 outline-none border rounded "
              placeholder="******************"
              type="password"
              {...register("password")}
            />
            {errors.password?.message && (
              <div className="text-red-500 text-[12px]">Password Required</div>
            )}
          </div>
          <div className="mt-[15px] ">
            <div className=" text-[12px] font-semibold text-[#1E1E1E] ">
              Confirm Password
            </div>
            <input
              className="w-[100%] text-[12px] mt-[3px] h-[50px]  p-5 outline-none border rounded "
              placeholder="******************"
              type="password"
              {...register("confirm")}
            />
            {errors.confirm?.message && (
              <div className="text-red-500 text-[12px]">
                Must match with Password
              </div>
            )}
          </div>
          <div className="mt-[15px] ">
            <div className=" text-[12px] font-semibold text-[#1E1E1E]">BVN</div>
            <input
              className="w-[100%] text-[12px] mt-[3px] h-[50px]  p-5 outline-none border rounded "
              placeholder="90263164223648294712"
              type="text"
              onInput={BVNInput}
              {...register("BVN")}
            />
            {errors.BVN?.message && (
              <div className="text-red-500 text-[12px]">Place your BVN</div>
            )}
          </div>
          <div className="mt-[15px] ">
            <div className=" text-[12px] font-semibold text-[#1E1E1E] ">
              Phone Number
            </div>
            <input
              className="w-[100%] text-[12px] mt-[3px] h-[50px]  p-5 outline-none border rounded "
              placeholder="+2349123456789 "
              type="text"
              onInput={validateInput}
              {...register("phoneNo")}
            />
            {errors.phoneNo?.message && (
              <div className="text-red-500 text-[12px]">
                Phone Number Required
              </div>
            )}
          </div>
          <button
            type="submit"
            className="w-[100%] h-[50px] text-[white] bg-red-500 rounded flex justify-center items-center font-medium text-[15px] mt-[15px] cursor-pointer hover:scale-[1.02] transition-all duration-700 overflow-hidden "
          >
            Register
          </button>
          <div className=" w-[100%] mt-[5px] flex justify-center items-center gap-2  ">
            <div className="text-[10px] text-gray-500 text-center">
              Already have an account
            </div>
            <Link to="/sign-in">
              <div className="text-[13px] text-red-600 font-semibold">
                Sign in
              </div>
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default RegisterPage;
