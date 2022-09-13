import { Button as MUITailwindButton } from "@material-tailwind/react";

const TransparentButton = ({ children, className, ...props }) => {
    return (
        <MUITailwindButton
            className={`bg-transparent border-2 border-hspurple shadow-none text-black hover:shadow-hspurple rounded-3xl max-w-none min-w-fit w-32 h-9 p-2 ${className}`}
            {...props}
        >
            {children}
        </MUITailwindButton>
    );
};

export default TransparentButton;
