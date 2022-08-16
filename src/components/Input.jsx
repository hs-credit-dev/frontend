const Input = ({ name, label, small, type, className, children, ...props }) => {
  const classname = `grow p-2 drop-shadow-lg rounded-md`;

  const input = () => {
    switch (type) {
      case "textarea":
        return (
          <textarea
            aria-label={name}
            name={name}
            className={`resize-none ${classname}`}
            {...props}
          >
            {children}
          </textarea>
        );
      case "select":
        return (
          <select
            aria-label={name}
            name={name}
            className={classname}
            {...props}
          >
            {children}
          </select>
        );
      default:
        return (
          <input
            type={type || "text"}
            name={name}
            className={classname}
            {...props}
          />
        );
    }
  };

  return (
    <>
      <span className={`flex flex-col gap-2 h-10 ${className}`}>
        {label && (
          <>
            <label
              htmlFor={name}
              className="mb-2 font-bold flex items-center gap-2"
            >
              {label}
            </label>
          </>
        )}
        {input()}
        {small && (
          <>
            <p className="text-sm text-gray-900 font-semibold italic">
              {small}
            </p>
          </>
        )}
      </span>
    </>
  );
};

export default Input;
