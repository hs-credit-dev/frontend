import { Button as MUITailwindButton } from "@material-tailwind/react";

const Button = ({ children, className, onClick }) => {
  return (
    <MUITailwindButton
      onClick={onClick}
      className={`bg-hspurple shadow-none hover:shadow-hspurple rounded-2xl max-w-none min-w-fit w-52 h-11 ${className}`}
    >
      {children}
    </MUITailwindButton>
  );
};

export default Button;
