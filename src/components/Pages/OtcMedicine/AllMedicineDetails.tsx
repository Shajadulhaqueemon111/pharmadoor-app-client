import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

type Medicine = {
  id: number;
  name: string;
  brand: string;
  category: string;
  dosage: string;
  form: string;
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
      <h1 className="text-2xl font-bold text-center mb-2 text-red-500">
        {medicine.name}
      </h1>
      <p className="text-gray-700 font-bold mb-4">
        Brand: <span className="text-emerald-500">{medicine.brand}</span>
      </p>
      <p className="text-gray-800 text-xl font-bold mb-4 ">
        Price: <span className="text-emerald-500"> {medicine.price} TK</span>
      </p>

      <div className="mb-4">
        <p className="font-bold">
          Dosage: <span className="text-emerald-500">{medicine?.dosage}</span>
        </p>
      </div>
      <div className="mb-4"></div>
      <p className="font-bold">
        Form: <span className="text-emerald-500">{medicine?.form}</span>
      </p>

      <div className="mt-auto">
        <Link to="/cart">
          <button className="btn btn-secondary w-full">Add-To-Cart</button>
        </Link>
      </div>
    </div>
  );
};

export default AllMedicineDetails;
