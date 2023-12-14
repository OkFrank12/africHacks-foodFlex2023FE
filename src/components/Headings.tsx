const Headings = () => {
  return (
    <>
      <div className="w-full border-b-2 flex">
        <div className="h-[40px] border-r-2 w-[320px] flex items-center">
          <p className="font-semibold ml-2 h-5">Product Name</p>
        </div>
        <div className="h-[40px] border-r-2 w-[130px] flex items-center">
          <p className="font-semibold ml-2 h-5">Price</p>
        </div>
        <div className="h-[40px] border-r-2 w-[150px] flex items-center">
          <p className="font-semibold ml-2 h-5">Quantity</p>
        </div>
        <div className="h-[40px] border-r-2 w-[150px] flex items-center">
          <p className="font-semibold ml-2 h-5">Total</p>
        </div>
        <div className="h-[40px] flex items-center">
          <p className="font-semibold ml-2 h-5">Action</p>
        </div>
      </div>
    </>
  );
};

export default Headings;
