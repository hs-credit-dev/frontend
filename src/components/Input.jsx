import { useState } from 'react';
import Button from "./Button";
import TransparentButton from './TransparentButton';

const YesNoButtons = ({ name, props }) => {
  const classname = `grow w-32 h-10 p-2 drop-shadow-lg rounded-3xl`;

  const [isYes, setIsYes] = useState(false);

  const YesButtonType = isYes ? Button : TransparentButton;
  const NoButtonType = isYes ? TransparentButton : Button;

  return (
    <>
      <span className="flex items-center gap-4">
        <YesButtonType
          aria-label={`${name}-yes`}
          name={`${name}-yes`}
          className={classname}
          {...props}
          onClick={() => {
            setIsYes(true);
          }}
        >
          Yes
        </YesButtonType>
        <NoButtonType
          aria-label={`${name}-no`}
          name={`${name}-no`}
          className={classname}
          {...props}
          onClick={() => {
            setIsYes(false);
          }}
        >
          No
        </NoButtonType>
      </span>
    </>
  );
};

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
      case "file":
        return (
          <Button
            aria-label={name}
            name={name}
            className={`${classname}`}
            {...props}>
            {children}
          </Button>
        );
      case "y/n":
        return (
          <YesNoButtons name={name} {...props} />
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
