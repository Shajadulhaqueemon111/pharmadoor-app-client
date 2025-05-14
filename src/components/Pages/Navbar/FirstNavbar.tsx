import { Search } from "lucide-react";
import image1 from "../../../assets/Image2.png";
const FirstNavbar = () => {
  return (
    <div>
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
      <div className="flex items-center border border-amber-200 rounded-md overflow-hidden w-full max-w-md">
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
    </div>
  );
};

export default FirstNavbar;
