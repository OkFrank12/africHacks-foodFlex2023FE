import axios from "axios";

const apiURL: string = "https://afrihacks2023-foodflexbe.onrender.com/api";

export const createCartAPI = async (
  userID: string,
  productsID: string,
  data: any
) => {
  try {
    return await axios
      .post(`${apiURL}/${userID}/${productsID}/create-carts`, data)
      .then((res: any) => {
        return res.data.data;
      });
  } catch (error: any) {
    console.error(error);
  }
};

export const populateCart = async (userID: string) => {
  try {
    return await axios.get(`${apiURL}/${userID}/populate-cart`).then((res) => {
      return res.data.data;
    });
  } catch (error: any) {
    console.error(error);
  }
};

export const deleteCart = async (cartID: string) => {
  try {
    return await axios
      .delete(`${apiURL}/${cartID}/delete-cart`)
      .then((res: any) => {
        return res.data;
      });
  } catch (error: any) {
    console.error(error);
  }
};
