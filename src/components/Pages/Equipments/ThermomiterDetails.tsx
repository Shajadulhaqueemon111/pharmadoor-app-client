import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import brandImage from "../../../assets/brand1.png";
import SafetyAdvice from "../OtcMedicine/SafetyAdvice";
import AdditionalOffer from "../OtcMedicine/AdditionalOffer";

type MedicalProduct = {
  id: number;
  name: string;
  brand: string;
  category: string;
  price: string;
  stock_quantity: number;
  rating: number;
  color: string;
  image: string;
};

const ThermomiterDetails = () => {
  const { id } = useParams();
  const [equipment, setEquipment] = useState<MedicalProduct | null>(null);

  useEffect(() => {
    fetch("/equipment.json")
      .then((res) => res.json())
      .then((data: MedicalProduct[]) => {
        const found = data.find((item) => item.id === Number(id));
        setEquipment(found || null);
      })
      .catch((err) => console.error("Failed to load details:", err));
  }, [id]);

  if (!equipment) {
    return (
      <div className="text-center mt-10 text-red-600">Loading or Not Found</div>
    );
  }

  return (
    <div className="mt-4 px-4 md:px-10 lg:px-20">
      <div className="flex flex-col md:flex-row justify-center items-start gap-6 max-w-6xl mx-auto">
        {/* Left: Image and SafetyAdvice */}
        <div className="flex flex-col items-center w-full md:w-1/2">
          <img
            src={equipment.image}
            alt={equipment.name}
            className="w-60 h-60 object-contain mb-4"
          />
          <SafetyAdvice />
        </div>

        {/* Right: Details */}
        <div className="w-full md:w-1/2 bg-white space-y-4">
          <div className="h-12 bg-gradient-to-bl from-violet-500 to-fuchsia-500 flex items-center px-2">
            <span className="flex flex-wrap gap-4 text-white">
              ব্যবসার জন্য পাইকারি দামে পণ্য কিনতে চাইলে{" "}
              <Link to="/register">
                <button className="btn btn-secondary">Register</button>
              </Link>
            </span>
          </div>

          <h1 className="text-2xl font-bold text-red-500">{equipment.name}</h1>

          <p className="text-gray-700 font-bold flex items-center gap-2">
            <img src={brandImage} alt="Brand" className="w-6 h-6" />
            <span className="text-emerald-500">{equipment.brand}</span>
          </p>

          <p className="text-gray-800 font-bold">
            Stock Quantity:{" "}
            <span className="text-emerald-500 font-bold">
              {equipment.stock_quantity}
            </span>
          </p>

          <p className="text-gray-800 font-bold">
            Price:{" "}
            <span className="text-emerald-500">{equipment.price} TK</span>
          </p>

          <p className="font-bold">
            Category:{" "}
            <span className="text-emerald-500">{equipment.category}</span>
          </p>

          <p className="font-bold">
            Colour: <span className="text-emerald-500">{equipment.color}</span>
          </p>

          <div>
            <Link to="/cart">
              <button className="btn bg-[#0E7673] text-white w-full">
                Add-To-Cart
              </button>
            </Link>
          </div>

          <div>
            <p className="font-bold mb-2">Additional Offer</p>
            <AdditionalOffer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThermomiterDetails;
