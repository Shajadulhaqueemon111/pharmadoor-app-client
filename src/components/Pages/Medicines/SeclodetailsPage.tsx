import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

type SecloMedicine = {
  id: number;
  name: string;
  generic: string;
  strength: string;
  form: string;
  manufacturer: string;
  uses: string[];
  price: string;
  image: string;
};

const SeclodetailsPage = () => {
  const { id } = useParams();
  const [medicine, setMedicine] = useState<SecloMedicine | null>(null);

  useEffect(() => {
    fetch("/seclomedicines.json")
      .then((res) => res.json())
      .then((data: SecloMedicine[]) => {
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
    <div className="max-w-2xl mx-auto p-4 bg-white shadow rounded-lg mt-10">
      <img
        src={medicine.image}
        alt={medicine.name}
        className="w-full h-60 object-cover rounded"
      />
      <h1 className="text-2xl font-bold mt-4">{medicine.name}</h1>
      <p>
        <strong>Generic:</strong> {medicine.generic}
      </p>
      <p>
        <strong>Strength:</strong> {medicine.strength}
      </p>
      <p>
        <strong>Form:</strong> {medicine.form}
      </p>
      <p>
        <strong>Manufacturer:</strong> {medicine.manufacturer}
      </p>
      <p>
        <strong>Uses:</strong> {medicine.uses.join(", ")}
      </p>
      <p className="text-lg font-semibold text-green-600 mt-2">
        {medicine.price}Tk
      </p>
      <Link to="">
        <button className="btn btn-secondary w-full">Add Cart</button>
      </Link>
    </div>
  );
};

export default SeclodetailsPage;
