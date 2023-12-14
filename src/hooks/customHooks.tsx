import useSwr from "swr";
import { viewOneUser } from "../api/authAPI";
import { viewAllProducts, viewOneProduct } from "../api/productsAPI";
import { populateCart } from "../api/cartAPI";

export const useViewOneUser = (userID: string) => {
  const { data, isLoading } = useSwr(`/${userID}/view-one-user`, () =>
    viewOneUser(userID)
  );
  return { data, isLoading };
};

export const useViewAllProducts = () => {
  const { data, isLoading } = useSwr(`/view-all-products`, viewAllProducts);
  return { data, isLoading };
};

export const useViewOneProduct = (productsID: string) => {
  const { data, isLoading } = useSwr(`/${productsID}/view-one-product`, () =>
    viewOneProduct(productsID)
  );
  return { data, isLoading };
};

export const usePopulateUsersCart = (userID: string) => {
  const { data, isLoading } = useSwr(
    `/${userID}/populate-cart`,
    () => populateCart(userID),
    { refreshInterval: 100 }
  );
  return { data, isLoading };
};
