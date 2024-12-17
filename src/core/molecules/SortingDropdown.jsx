const SortingDropdown = ({ onSortChange }) => {
    const sortOptions = [
      { value: "recent", label: "Most Recent (Date Based)" },
      { value: "alphabetical", label: "Alphabetical Order (A to Z)" },
      { value: "relevance", label: "Results by Relevance" },
    ];
  
    return (
      <div className="flex items-center space-x-3">
        <label className="text-gray-700 font-medium" htmlFor="sort">
          Sort By:
        </label>
        <select
          id="sort"
          className="border border-gray-300 rounded-md p-2 text-gray-700 focus:ring-2 focus:ring-blue-500"
          onChange={(e) => onSortChange(e.target.value)}
        >
          {sortOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    );
  };
  
  export default SortingDropdown;
  