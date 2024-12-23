import { useState } from "react";

const SortingDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block text-left">
      <button
        className="flex items-center text-blue-700 font-medium focus:outline-none"
        onClick={toggleDropdown}
        aria-expanded={isOpen}
      >
        By Relevance
        <span
          className={`ml-2 transition-transform ${
            isOpen ? "-rotate-180" : "rotate-0"
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 15l7-7 7 7"
            />
          </svg>
        </span>
      </button>

      {isOpen && (
        <div
          className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10"
        >
          <ul className="py-1">
            <li>
              <button
                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                onClick={() => alert("Sort by Relevance")}
              >
                By Relevance
              </button>
            </li>
            <li>
              <button
                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                onClick={() => alert("Sort by Date")}
              >
                By Date
              </button>
            </li>
            <li>
              <button
                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                onClick={() => alert("Sort by Name")}
              >
                By Name
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default SortingDropdown;
