import { Button as MUITailwindButton } from "@material-tailwind/react";

const Button = ({ children, className, ...props }) => {
  return (
    <MUITailwindButton
      className={`bg-hspurple shadow-none hover:shadow-hspurple rounded-2xl max-w-none min-w-fit w-52 h-12 ${className}`}
      {...props}
    >
      {children}
    </MUITailwindButton>
  );
};

export default Button;
