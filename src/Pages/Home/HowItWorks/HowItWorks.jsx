import freeShipping from "../../../assets/icons/free-sheeping.webp";
import moneyBack from "../../../assets/icons/money-back.webp";
import returns from "../../../assets/icons/returns.webp";
import support from "../../../assets/icons/support.webp";

const HowItWorks = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:p-16 p-10 bg-[#EBECF0] rounded-2xl my-20 text-center">
      <div>
        <div className="flex justify-center items-center">
          <img src={freeShipping} alt="Free Shipping Icon" />
        </div>
        <h2 className="text-2xl font-Nunito font-bold mt-4">Free Shipping</h2>
        <p className="text-lg font-Nunito mt-2 text-gray-400">
          On Order $23 - 7 Days A Week
        </p>
      </div>
      <div>
        <div className="flex justify-center items-center">
          <img src={moneyBack} alt="Free Shipping Icon" />
        </div>
        <h2 className="text-2xl font-Nunito font-bold mt-4">
          Money Back Guarantee
        </h2>
        <p className="text-lg font-Nunito mt-2 text-gray-400">
          Send Within 30 Days
        </p>
      </div>
      <div>
        <div className="flex justify-center items-center">
          <img src={returns} alt="Free Shipping Icon" />
        </div>
        <h2 className="text-2xl font-Nunito font-bold mt-4">Free Returns</h2>
        <p className="text-lg font-Nunito mt-2 text-gray-400">
          Free 90 Days Returns Policy
        </p>
      </div>
      <div>
        <div className="flex justify-center items-center">
          <img src={support} alt="Free Shipping Icon" />
        </div>
        <h2 className="text-2xl font-Nunito font-bold mt-4">
          24/7 Customer Service
        </h2>
        <p className="text-lg font-Nunito mt-2 text-gray-400">
          Call Us 24/7 At 000 -123 - 455
        </p>
      </div>
    </div>
  );
};

export default HowItWorks;
