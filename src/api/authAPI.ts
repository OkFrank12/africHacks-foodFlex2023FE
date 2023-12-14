import axios from "axios";

const apiURL: string = "https://afrihacks2023-foodflexbe.onrender.com/api";

export const registerUserAPI = async (data: any) => {
  try {
    return await axios.post(`${apiURL}/register`, data).then((res: any) => {
      return res.data;
    });
  } catch (error: any) {
    console.error(error);
  }
};

export const verifyUser = async (token: string) => {
  try {
    return await axios.patch(`${apiURL}/${token}/verify`).then((res: any) => {
      return res.data;
    });
  } catch (error: any) {
    console.error(error);
  }
};

export const signInUser = async (data: any) => {
  try {
    return await axios.post(`${apiURL}/sign-in`, data).then((res: any) => {
      return res.data;
    });
  } catch (error: any) {
    console.error(error);
  }
};

export const viewOneUser = async (userID: string) => {
  try {
    return await axios
      .get(`${apiURL}/${userID}/view-one-user`)
      .then((res: any) => {
        return res.data.data;
      });
  } catch (error: any) {
    console.error(error);
  }
};
