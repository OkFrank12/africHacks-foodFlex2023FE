import { BallTriangle } from "react-loader-spinner";

const Loader = () => {
  return (
    <>
      <div
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(57, 27, 27, 0.5)",
          position: "fixed",
          top: "0",
          left: "0",
        }}
      >
        <div className="z-[1008897453] flex justify-center top-0 left-0 items-center w-full h-full">
          <BallTriangle color="crimson" />
        </div>
      </div>
    </>
  );
};

export default Loader;
