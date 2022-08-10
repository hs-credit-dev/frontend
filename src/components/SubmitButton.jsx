const MUITailwindButtonStyle =
  "middle none font-sans font-bold center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-blue-500 text-white shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none";

const SubmitButton = ({ name, className }) => {
  return (
    <input
      type="submit"
      value={name}
      className={`${MUITailwindButtonStyle} bg-hspurple shadow-none hover:shadow-hspurple text-center rounded-2xl max-w-none min-w-fit w-52 h-11 ${className}`}
      style={{ position: "relative", overflow: "hidden" }}
    />
  );
};

export default SubmitButton;
