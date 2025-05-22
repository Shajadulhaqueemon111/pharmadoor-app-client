import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import SafetyAdvice from "../OtcMedicine/SafetyAdvice";
import AdditionalOffer from "../OtcMedicine/AdditionalOffer";
import brandImage from "../../../assets/brand1.png";

type NapaMedicine = {
  id: number;
  name: string;
  generic: string;
  strength: string;
  form: string;
  manufacturer: string;
  uses: string[];
  price: string;
  image: string;
  category: string;
};

const NapaDetailsPage = () => {
  const { id } = useParams();
  const [medicine, setMedicine] = useState<NapaMedicine | null>(null);

  useEffect(() => {
    fetch("/napa-secloallmedicine.json")
      .then((res) => res.json())
      .then((data: NapaMedicine[]) => {
        const found = data.find((item) => item.id === Number(id));
        setMedicine(found || null);
      })
      .catch((err) => console.error("Failed to load details:", err));
  }, [id]);

  if (!medicine) {
    return (
      <div className="text-center mt-10 text-red-600">Loading or Not Found</div>
    );
  }

  return (
    <div className="mt-6 px-4 md:px-10 lg:px-20  mx-auto">
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Image & Advice Section */}
        <div className="w-full lg:w-1/3 flex flex-col items-center">
          <img
            src={medicine.image}
            alt={medicine.name}
            className="w-64 h-64 object-contain mb-4"
          />
          <SafetyAdvice />
        </div>

        {/* Medicine Info */}
        <div className="w-full lg:w-2/3 bg-white shadow-lg p-6 rounded-xl">
          <div className="bg-gradient-to-bl from-violet-500 to-fuchsia-500 text-white rounded-lg p-4 mb-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-center sm:text-left">
              ব্যবসার জন্য পাইকারি দামে পণ্য কিনতে চাইলে
            </span>
            <Link to="/register">
              <button className="btn btn-secondary">Register</button>
            </Link>
          </div>

          <h1 className="text-2xl font-bold text-red-500 mb-3">
            {medicine.name}
          </h1>

          <div className="flex items-center gap-2 text-gray-800 font-semibold mb-4">
            <img src={brandImage} alt="brand" className="w-6 h-6" />
            <span className="text-emerald-600">{medicine.manufacturer}</span>
          </div>

          <div className="space-y-2 text-gray-700 font-medium">
            <p>
              <strong>Generic:</strong>{" "}
              <span className="text-emerald-600">{medicine.generic}</span>
            </p>
            <p>
              <strong>Price:</strong>{" "}
              <span className="text-emerald-600">{medicine.price} TK</span>
            </p>
            <p>
              <strong>Category:</strong>{" "}
              <span className="text-emerald-600">{medicine.category}</span>
            </p>
            <p>
              <strong>Form:</strong>{" "}
              <span className="text-emerald-600">{medicine.form}</span>
            </p>
          </div>

          <div className="mt-6">
            <Link to="/cart">
              <button className="btn bg-[#0E7673] text-white w-full">
                Add To Cart
              </button>
            </Link>
          </div>

          <div className="mt-6">
            <h2 className="font-bold mb-2">Additional Offer</h2>
            <AdditionalOffer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NapaDetailsPage;
