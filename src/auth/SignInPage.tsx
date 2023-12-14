import { Link, useNavigate, useParams } from "react-router-dom";
import Logo from "../static/Logo";
import { useEffect, useState } from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { signInUser, verifyUser } from "../api/authAPI";
import Swal from "sweetalert2";
import Loader from "../static/Loader";
import { useDispatch } from "react-redux";
import { onUserState } from "../global/reduxStates";
import { jwtDecode } from "jwt-decode";

const SignInPage = () => {
  const { token } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState<boolean>(false);
  const schema = yup.object({
    email: yup.string().email().trim().lowercase().required(),
    password: yup.string().required(),
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
    signInUser(data).then((res: any) => {
      if (res) {
        Swal.fire({
          icon: "success",
          title: `${res.message}`,
          text: "Hello User",
          timer: 3000,
          timerProgressBar: true,
          showConfirmButton: false,
        }).then(() => {
          setLoading(false);
          const decode: any = jwtDecode(res.data);
          dispatch(onUserState(decode.id));
          navigate("/home");
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

  useEffect(() => {
    verifyUser(token!).then((res: any) => {
      Swal.fire({
        icon: "success",
        title: `${res.message}`,
        text: "Sign into your account",
        timer: 3000,
        timerProgressBar: true,
        showConfirmButton: false,
      });
    });
  }, []);
  return (
    <>
      {loading && <Loader />}
      <div className="bg-[#f0f1f7] w-[100%] min-h-[100vh] flex justify-center flex-col items-center ">
        <Logo clr="red" />
        <form
          onSubmit={onHandleSubmit}
          className="w-[400px] S425:w-[300px] min-h-[200px] bg-[white] mt-[20px] rounded p-6 "
        >
          <div className="text-[16px] mt-[10px] text-center font-semibold text-[#1E1E1E]">
            Sign In
          </div>
          <div className="text-[10px] text-gray-500 text-center ">
            Welcome Back...
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
          <button
            type="submit"
            className="w-[100%] h-[50px] text-[white] bg-red-500 rounded flex justify-center items-center font-medium text-[15px] mt-[15px] cursor-pointer hover:scale-[1.02] transition-all duration-700 overflow-hidden "
          >
            Sign In
          </button>
          <div className=" w-[100%] mt-[5px] flex justify-center items-center gap-2  ">
            <div className="text-[10px] text-gray-500 text-center">
              Don't have an account?
            </div>
            <Link to="/register">
              <div className="text-[13px] text-red-600 font-semibold">
                Register
              </div>
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default SignInPage;
