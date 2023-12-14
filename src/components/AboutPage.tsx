import rec_1 from "../assets/Rectangle 8.png";
import rec_2 from "../assets/Rectangle 9.png";
import rec_3 from "../assets/Rectangle 10.png";
import Logo from "../static/Logo";

const AboutPage = () => {
  return (
    <div className="w-full py-2  min-h-[400px] flex items-center justify-center">
      <div className="w-[90%] S1000:flex-col h-full flex items-center justify-between ">
        <div className="w-[53%] S1000:w-full h-full flex justify-between">
          <img
            src={rec_1}
            className="w-[50%] object-cover h-full rounded-l-3xl"
          />
          <div className="flex w-[47%] flex-col justify-between">
            <img
              src={rec_2}
              className="w-full h-[47%] object-cover rounded-tr-3xl"
            />
            <img
              src={rec_3}
              className="w-full h-[47%] object-cover rounded-br-3xl"
            />
          </div>
        </div>
        <div className="w-[40%] h-full S1000:w-full">
          <div className="text-[30px] font-semibold text-gray-500">
            <span>about</span> <Logo clr="red" />
          </div>
          <div className="leading-8 text-gray-500 S670:text-[13px] S670:leading-5">
            Our Groceries and Food Items Web App with Purchase Financing not
            only simplifies the grocery shopping experience but also introduces
            a groundbreaking approach to making essential items accessible to a
            broader audience through innovative financing options. Designed to
            cater to the diverse needs of users while prioritizing convenience,
            transparency, and financial flexibility.
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
