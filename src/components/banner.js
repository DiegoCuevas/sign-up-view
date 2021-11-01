import logoBetter from "../assets/img/logos/banner/logoBetter.png";
import bonsai from "../assets/img/logos/banner/bonsai.png";
import coffeeMeet from "../assets/img/logos/banner/coffeeMeet.png";
import doximity from "../assets/img/logos/banner/doximity.png";
import tala from "../assets/img/logos/banner/tala.png";
import webflow from "../assets/img/logos/banner/webflow.png";
export default function banner(){
  return (
    <div className="flex flex-col lg:m-6 m-4 justify-start w-2/5 lg:h-2xl h-1/5">
      <div className="flex items-center ml-24 lg:mb-4 mb-2 lg:gap-5 gap-2 justify-center">
        <div className="lg:w-1/2 w-16">
          <img src={coffeeMeet} alt="" />
        </div>
        <div className="lg:w-1/3 w-16">
          <img src={webflow} alt="" />
        </div>
        <div className="lg:w-1/3 w-16">
          <img src={doximity} alt="" />
        </div>
      </div>
      <div className="flex items-center ml-24 justify-center lg:gap-10 gap-5">
        <div className="lg:w-1/3 w-16">
          <img src={logoBetter} alt="" />
        </div>
        <div className="lg:w-1/3 w-16">
          <img src={tala} alt="" />
        </div>
        <div className="lg:w-1/3 w-16">
          <img src={bonsai} alt="" />
        </div>
      </div>
    </div>
  );
}