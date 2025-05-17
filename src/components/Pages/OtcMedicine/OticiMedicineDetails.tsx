import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

type Medicine = {
  id: number;
  name: string;
  description: string;
  symptoms: string[];
  treatment: string[];
  image: string;
};

const OtciMedicineDetails = () => {
  const { name } = useParams<{ name: string }>();
  const [medicines, setMedicines] = useState<Medicine[]>([]);

  useEffect(() => {
    fetch("/alloticemedicine.json")
      .then((res) => res.json())
      .then((data: Medicine[]) => {
        const filtered = data.filter(
          (med) => med.name.toLowerCase() === name?.toLowerCase()
        );
        setMedicines(filtered);
      });
  }, [name]);

  if (medicines.length === 0) {
    return (
      <p className="text-center mt-10 text-red-500">Medicine not found.</p>
    );
  }

  return (
    <div className="mx-auto p-5">
      <h1 className="text-center text-xl font-bold">Medicine-{name}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-6 mt-3">
        {medicines.map((medicine) => (
          <div
            key={medicine.id}
            className="border rounded-lg bg-white shadow-lg p-6  flex flex-col h-full"
          >
            <img
              src={medicine.image}
              alt={medicine.name}
              className="w-full h-48 object-contain mb-4"
            />
            <h2 className="text-2xl font-bold text-center mb-2 text-blue-600">
              {medicine.name}
            </h2>
            <p className="text-gray-700 mb-3 flex-grow">
              {medicine.description}
            </p>

            <div className="mt-auto">
              <Link to={`/allmedicineDetails/${medicine.id}`}>
                <button className="btn btn-secondary w-full">
                  View Details
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OtciMedicineDetails;
