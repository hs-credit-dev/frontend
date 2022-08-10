const Input = ({
  name,
  type,
  label,
  placeholder,
  className,
  labelClassName,
  onChange,
  autoComplete,
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
        onChange={onChange}
        autoComplete={autoComplete}
      />
    </>
  );
};

export default Input;
