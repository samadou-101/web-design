import { useState } from "react";

const ProductsFilter = () => {
  const categories = ["Chair", "Beds", "Sofa", "Lamp"];
  const [selected, setSelected] = useState("Chair");

  return (
    <div className="bg-filter flex h-14 w-fit items-center gap-4 rounded-[2.75rem] p-4">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => setSelected(category)}
          className={`text-text cursor-pointer rounded-full px-4 py-2 text-sm font-medium transition-colors ${
            selected === category
              ? "bg-white text-gray-900 shadow-sm"
              : "bg-transparent text-gray-600 hover:text-gray-900"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default ProductsFilter;
