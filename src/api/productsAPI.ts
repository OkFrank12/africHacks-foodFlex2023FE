import axios from "axios";

const apiURL: string = "https://afrihacks2023-foodflexbe.onrender.com/api";

export const viewAllProducts = async () => {
  try {
    return await axios.get(`${apiURL}/view-all-products`).then((res: any) => {
      return res.data.data;
    });
  } catch (error: any) {
    console.error(error);
  }
};

export const viewOneProduct = async (productsID: string) => {
  try {
    return await axios
      .get(`${apiURL}/${productsID}/view-one-product`)
      .then((res: any) => {
        return res.data.data;
      });
  } catch (error: any) {
    console.error(error);
  }
};

export const deleteProduct = async (productsID: string) => {
  try {
    return await axios
      .delete(`${apiURL}/${productsID}/delete-product`)
      .then((res: any) => {
        return res.data;
      });
  } catch (error: any) {
    console.error(error);
  }
};
