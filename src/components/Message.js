import points from "../assets/img/logos/points.svg"
import photo from "../assets/img/logos/photo.jpg"
function Message() {
  return (
    <div className="lg:h-message h-1/4 w-1/3 lg:w-message bg-quotes bg-no-repeat bg-t-rigth text-white py-6">
      <p className="w-full lg:text-lg text-sm font-Karla tracking-wider text-center">
        CloudForecast succinctly <br /> highlights spikes in cost and areas{" "}
        <br /> which I should act upon right now <br /> in order to save money.
      </p>
      <div className="flex items-center px-4 ">
        <img src={photo} className=" rounded-full" alt="profile" />
        <div className="ml-2">
          <p className="lg:text-lg text-sm">Bruno Miranda</p>
          <p className="lg:text-sm text-xs text-gray-300">VP of Engineering, Doximity</p>
        </div>
      </div>
      <div className="lg:w-3/4 w-full flex justify-center">
        <img src={points} alt="" />
      </div>
    </div>
  );
}
export default Message;