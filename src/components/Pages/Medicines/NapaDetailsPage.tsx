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
    <div className="mt-4 px-4 md:px-10 lg:px-20">
      <div className="flex flex-col md:flex-row justify-center items-start gap-6 max-w-6xl mx-auto">
        {/* Left: Image and SafetyAdvice */}
        <div className="flex flex-col items-center w-full md:w-1/2">
          <img
            src={medicine.image}
            alt={medicine.name}
            className="w-60 h-60 object-contain mb-4"
          />
          <SafetyAdvice />
        </div>

        {/* Right: Medicine Details */}
        <div className="w-full md:w-1/2 bg-white space-y-4">
          <div className="h-12 bg-gradient-to-bl from-violet-500 to-fuchsia-500 flex items-center p-2 px-2">
            <span className="flex flex-wrap gap-4 text-white">
              ব্যবসার জন্য পাইকারি দামে পণ্য কিনতে চাইলে{" "}
              <Link to="/register">
                <button className="btn btn-secondary">Register</button>
              </Link>
            </span>
          </div>

          <h1 className="text-2xl font-bold text-red-500">{medicine.name}</h1>

          <div className="text-gray-700 font-bold flex items-center gap-2">
            <img src={brandImage} alt="Brand" className="w-6 h-6" />
            <span className="text-emerald-500">{medicine.manufacturer}</span>
          </div>

          <p className="text-gray-800 font-bold">
            Generic:{" "}
            <span className="text-emerald-500">{medicine.generic}</span>
          </p>

          <p className="text-gray-800 font-bold">
            Price: <span className="text-emerald-500">{medicine.price} TK</span>
          </p>

          <p className="text-gray-800 font-bold">
            Category:{" "}
            <span className="text-emerald-500">{medicine.category}</span>
          </p>

          <p className="text-gray-800 font-bold">
            Form: <span className="text-emerald-500">{medicine.form}</span>
          </p>

          <Link to="/cart">
            <button className="btn bg-[#0E7673] text-white w-full">
              Add-To-Cart
            </button>
          </Link>

          <div>
            <p className="font-bold mb-2">Additional Offer</p>
            <AdditionalOffer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NapaDetailsPage;
