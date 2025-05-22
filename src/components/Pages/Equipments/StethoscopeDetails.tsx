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

const StethoscopeDetails = () => {
  const { id } = useParams();
  const [equipment, setequipment] = useState<MedicalProduct | null>(null);

  useEffect(() => {
    fetch("/equipment.json")
      .then((res) => res.json())
      .then((data: MedicalProduct[]) => {
        const found = data.find((item) => item.id === Number(id));
        setequipment(found || null);
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
      <div className="flex flex-col lg:flex-row gap-6 justify-evenly mx-auto">
        {/* Image and SafetyAdvice */}
        <div className="flex-1 text-center">
          <img
            src={equipment.image}
            alt={equipment.name}
            className="w-60 h-60 mx-auto object-contain mb-4"
          />
          <SafetyAdvice />
        </div>

        {/* Product Details */}
        <div className="flex-1 bg-white shadow-md rounded-lg p-4">
          <div className="bg-gradient-to-bl from-violet-500 to-fuchsia-500 rounded-md p-2 mb-4">
            <span className="flex flex-col sm:flex-row gap-2 justify-center items-center text-white text-center">
              ব্যবসার জন্য পাইকারি দামে পণ্য কিনতে চাইলে{" "}
              <Link to="/register">
                <button className="btn btn-secondary">Register</button>
              </Link>
            </span>
          </div>

          <h1 className="text-2xl font-bold text-red-500 mb-2">
            {equipment.name}
          </h1>

          <div className="flex items-center gap-2 text-gray-700 font-bold mb-2">
            <img src={brandImage} alt="Brand" className="w-6 h-6" />
            <span className="text-emerald-500">{equipment.brand}</span>
          </div>

          <p className="text-gray-800 font-bold mb-2">
            Stock Quantity:{" "}
            <span className="text-emerald-500">{equipment.stock_quantity}</span>
          </p>

          <p className="text-gray-800 font-bold mb-2">
            Price:{" "}
            <span className="text-emerald-500">{equipment.price} TK</span>
          </p>

          <p className="text-gray-800 font-bold mb-2">
            Category:{" "}
            <span className="text-emerald-500">{equipment.category}</span>
          </p>

          <p className="text-gray-800 font-bold mb-4">
            Colour: <span className="text-emerald-500">{equipment.color}</span>
          </p>

          <Link to="/cart">
            <button className="btn bg-[#0E7673] text-white w-full">
              Add-To-Cart
            </button>
          </Link>

          {/* Additional Offer */}
          <div className="mt-4">
            <p className="font-bold mb-2">Additional Offer</p>
            <AdditionalOffer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StethoscopeDetails;
