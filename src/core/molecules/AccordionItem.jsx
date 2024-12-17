import { useState } from "react";

const AccordionItem = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="border-b border-gray-300">
      <div
        className="flex justify-between items-center p-3 cursor-pointer bg-gray-100 hover:bg-gray-200"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-semibold text-gray-800">{title}</span>
        <span className="text-gray-600">{isOpen ? "-" : "+"}</span>
      </div>
      {isOpen && <div className="p-3 bg-white">{children}</div>}
    </div>
  );
};

export default AccordionItem;
