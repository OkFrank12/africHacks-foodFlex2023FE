import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const apiURL: string = "https://afrihacks2023-foodflexbe.onrender.com/api";
const navigate = useNavigate();

export const requestLoanAPI = async (userID: string, data: any) => {
  try {
    return await axios
      .post(`${apiURL}/${userID}/request-loan`, data)
      .then((res: any) => {
        return res.data;
      });
  } catch (error: any) {
    console.error(error);
  }
};

const URL: string =
  "https://api.us-east-1-main.seon.io/SeonRestService/fraud-api/v2/";
console.log(typeof URL);

export const getApproved = async (data: any) => {
  try {
    return await axios.post(`${apiURL}/check-BIN`, data);
  } catch (error) {
    return error;
  }
};

export const checkUsersBINAPI = async (bin: number) => {
  try {
    const options = {
      method: "POST",
      url: "https://bin-ip-checker.p.rapidapi.com/",
      params: { bin },
      headers: {
        "content-type": "application/json",
        "X-RapidAPI-Key": "cca5e7ddc8mshc1c37a392aa5603p1145e4jsn2e7189e9e70f",
        "X-RapidAPI-Host": "bin-ip-checker.p.rapidapi.com",
      },
      data: { bin },
    };

    const response = await axios.request(options);
    console.log(response.data);
    if (response.data.success === true) {
      Swal.fire({
        icon: "success",
        title: `${bin} is valid`,
        timer: 3000,
        timerProgressBar: true,
        showConfirmButton: false,
      }).then(() => {
        navigate(`/BIN-page`);
      });
    } else {
      Swal.fire({
        icon: "error",
        title: `${bin} is not valid`,
        timer: 3000,
        timerProgressBar: true,
        showConfirmButton: false,
      });
    }
  } catch (error: any) {
    console.error(error);
  }
};
