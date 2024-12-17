const SelectBox = ({ options, defaultValue, onChange }) => (
    <select
      className="border border-gray-300 rounded-md p-2 w-full text-gray-700 focus:ring-2 focus:ring-blue-500"
      defaultValue={defaultValue}
      onChange={onChange}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
  
  export default SelectBox;
  