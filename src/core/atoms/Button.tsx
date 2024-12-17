const Button = ({ label, className, ...props }) => (
  <button
    className={`px-4 py-2 rounded-md text-white ${className}`}
    {...props}
  >
    {label}
  </button>
);

export default Button;
