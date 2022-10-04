import { useState } from 'react';
import Button from "./Button";
import TransparentButton from './TransparentButton';
import Small from 'components/Small';

const YesNoButtons = ({ name, props }) => {
  const classname = `grow p-2 drop-shadow-lg rounded-3xl w-16 h-12`;

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

const Input = ({ name, label, small, type, className, inputClassName, children, ...props }) => {
  const classname = `p-2 drop-shadow-lg rounded-md`;

  return (
    <span className={`flex flex-col gap-2 ${className}`}>
      {label &&
        <label htmlFor={name} className="mb-2 font-bold flex items-center gap-2">
          {label}
        </label>
      }
      {(() => {
        switch (type) {
          case "textarea":
            return (
              <textarea
                aria-label={name}
                name={name}
                className={`resize-none ${classname} ${inputClassName}`}
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
                className={`${classname} ${inputClassName}`}
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
                className={`${classname} ${inputClassName}`}
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
                className={`${classname} ${inputClassName}`}
                {...props}
              />
            );
        }
      })()}
      {small && <Small>{small}</Small>}
    </span>
  );
};

export default Input;
