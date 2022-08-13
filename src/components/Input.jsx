const Input = ({ name, label, labelClassName, className, ...props }) => {
  return (
    <>
      {label && (
        <label htmlFor={name} className={`mb-2 ${labelClassName}`}>
          {label}
        </label>
      )}
      <input
        type={props.type || "text"}
        name={name}
        className={`h-8  drop-shadow-lg ${className}`}
        {...props}
      />
    </>
  );
};

export default Input;
