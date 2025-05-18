import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

type Medicine = {
  id: number;
  name: string;
  description: string;
  symptoms: string[];
  treatment: string[];
  price: string;
  image: string;
};

const AllMedicineDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [medicine, setMedicine] = useState<Medicine | null>(null);

  useEffect(() => {
    fetch("/alloticemedicine.json")
      .then((res) => res.json())
      .then((data: Medicine[]) => {
        const found = data.find((med) => med.id === Number(id));
        setMedicine(found || null);
      });
  }, [id]);

  if (!medicine) {
    return (
      <div className="text-center mt-10 text-red-600 font-semibold">
        Medicine not found.
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 shadow-md border rounded-lg bg-white">
      <img
        src={medicine.image}
        alt={medicine.name}
        className="w-60 h-60 mx-auto object-contain mb-4"
      />
      <h1 className="text-2xl font-bold text-center mb-2">{medicine.name}</h1>
      <p className="text-gray-700 text-center mb-4">{medicine.description}</p>
      <p className="text-gray-800 text-xl font-bold mb-4 ">
        Price: <span className="text-emerald-500">{medicine.price}TK</span>
      </p>

      <div className="mb-4">
        <h2 className="text-lg font-semibold">commonCauses:</h2>
        <ul className="list-disc list-inside">
          {medicine.symptoms.map((commoncase, index) => (
            <li key={index}>{commoncase}</li>
          ))}
        </ul>
      </div>
      <div className="mb-4">
        <h2 className="text-lg font-semibold">Symptoms:</h2>
        <ul className="list-disc list-inside">
          {medicine.symptoms.map((symptom, index) => (
            <li key={index}>{symptom}</li>
          ))}
        </ul>
      </div>

      <div>
        <h2 className="text-lg font-semibold">Treatment:</h2>
        <ul className="list-disc list-inside">
          {medicine.treatment.map((treat, index) => (
            <li key={index}>{treat}</li>
          ))}
        </ul>
      </div>
      <div className="mt-auto">
        <Link to="/cart">
          <button className="btn btn-secondary w-full">Add-To-Cart</button>
        </Link>
      </div>
    </div>
  );
};

export default AllMedicineDetails;
