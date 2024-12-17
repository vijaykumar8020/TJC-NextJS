const InputField = ({ placeholder, ...props }) => (
    <input
      type="text"
      placeholder={placeholder}
      className="w-full border p-2 rounded-md"
      {...props}
    />
  );
  
  export default InputField;
  