const FilterOption = ({ options }) => {
    return (
      <div className="space-y-2">
        {options.map((option) => (
          <label key={option.id} className="flex items-center space-x-2">
            <input type="checkbox" className="w-4 h-4" />
            <span>{option.label}</span>
          </label>
        ))}
      </div>
    );
  };
  
  export default FilterOption;
  