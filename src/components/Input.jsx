const Input = ({ name, type, label, placeholder }) => {
  return (
    <>
      {label && (
        <label htmlFor={name} className="mb-2">
          {label}
        </label>
      )}
      <input
        type={type || "text"}
        name={name}
        placeholder={placeholder}
        className="h-8  drop-shadow-lg"
      />
    </>
  );
};

export default Input;
