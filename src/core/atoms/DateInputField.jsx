const DateInputField = ({ label, value, onChange }) => {
    return (
      <label className="block">
        <span className="text-gray-600">{label}:</span>
        <input
          type="date"
          value={value}
          onChange={onChange}
          className="w-full mt-1 border rounded-md p-2 focus:ring-2 focus:ring-blue-500"
        />
      </label>
    );
  };
  
  export default DateInputField;
  