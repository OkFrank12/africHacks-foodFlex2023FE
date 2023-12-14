import { FC } from "react";
import { Link } from "react-router-dom";

interface iLogo {
  clr: string;
}
const Logo: FC<iLogo> = ({ clr }) => {
  return (
    <>
      <Link
        to={"/"}
        className={`font-Bold text-${clr}-500 text-[${clr}] text-[30px] `}
      >
        FOODFLEX
      </Link>
    </>
  );
};

export default Logo;
