import { FC, PropsWithChildren } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PrivateRouter: FC<PropsWithChildren> = ({ children }) => {
  const user = useSelector((state: any) => state.user);
  return <>{user ? <>{children}</> : <Navigate to={`/sign-in`} />}</>;
};

export default PrivateRouter;
