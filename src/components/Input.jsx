const Input = ({
  name,
  type,
  label,
  placeholder,
  className,
  labelClassName,
}) => {
  return (
    <>
      {label && (
        <label htmlFor={name} className={`mb-2 ${labelClassName}`}>
          {label}
        </label>
      )}
      <input
        type={type || "text"}
        name={name}
        placeholder={placeholder}
        className={`h-8  drop-shadow-lg ${className}`}
      />
    </>
  );
};

export default Input;
