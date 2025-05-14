import { Search, ShoppingCart } from "lucide-react";
import image1 from "../../../assets/Image2.png";
import image2 from "../../../assets/Image (1).png";
import { FcBusinessman } from "react-icons/fc";
import SecondNavbar from "./SecondNavbar";
const FirstNavbar = () => {
  return (
    <div>
      <div className="flex  justify-evenly items-center bg-cyan-200 p-4">
        {/* pharmadoor text stylling */}
        <div>
          <p className="flex items-center font-bold text-2xl text-[#469498]">
            PharmaD{" "}
            <span>
              <img src={image1} alt="image" />
            </span>{" "}
            <span>
              <img src={image1} alt="image" />
            </span>{" "}
            r
          </p>
        </div>
        {/* searchbar  */}
        <div className="flex items-center border border-b-zinc-300 rounded-md overflow-hidden w-full max-w-md">
          {/* Search Icon */}
          <div className="px-3 text-gray-500">
            <Search size={20} />
          </div>

          {/* Input Field */}
          <input
            type="text"
            placeholder="Find Your Medicine..."
            className="flex-1 p-3 outline-none"
          />

          {/* Search Button */}
          <button className="bg-[#00B8A2] hover:bg-amber-600 text-white px-4 py-2">
            Search
          </button>
        </div>
        {/* delivary Image */}
        <div>
          <div className="flex items-center">
            <img src={image2} alt="" />
            <p>Your Order</p>
          </div>
        </div>
        <div>
          <div className="flex items-center gap-2">
            <ShoppingCart className="text-[#00B8A2]" /> <p>cart</p>
          </div>
        </div>
        |
        <div className="flex items-center gap-3">
          {/* Register Button */}
          <button className="btn btn-success">Register</button>

          {/* Profile Avatar */}
          <div className="w-10 h-10 rounded-full border-2 border-gray-300 overflow-hidden flex items-center justify-center bg-gray-100">
            {/* <img src="" alt="Profile" className="w-full h-full object-cover" /> */}
            <FcBusinessman />
          </div>
        </div>
      </div>
      <div>
        <SecondNavbar />
      </div>
    </div>
  );
};

export default FirstNavbar;
