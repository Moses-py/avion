import React, { useState, ChangeEvent } from "react";

const CheckboxList: React.FC<ProductListingProps> = ({ category }) => {
  const [checkedItems, setCheckedItems] = useState<string[]>([]);

  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = event.target;
    if (checked) {
      setCheckedItems([...checkedItems, value]);
    } else {
      setCheckedItems(checkedItems.filter((item) => item !== value));
    }
  };

  return (
    <>
      {category.map((filter, index) => {
        return (
          <div key={index}>
            <h4 className="font-serif text-body-medium font-medium">
              {filter.category}
            </h4>
            <div className="flex flex-col my-[1.5rem]">
              <div className="space-y-[1rem]">
                {filter.items.map((item, index) => {
                  return (
                    <label className="flex items-center" key={index}>
                      <input
                        type="checkbox"
                        value={item}
                        checked={checkedItems.includes(item)}
                        onChange={handleCheckboxChange}
                        className="form-checkbox h-4 w-4 border-gray-300 focus:ring-indigo-500 rounded-lg"
                      />
                      <span className="ml-4 text-dark-primary text-body-medium font-sans">
                        {item}
                      </span>
                    </label>
                  );
                })}
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default CheckboxList;
