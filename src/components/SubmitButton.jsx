import Button from "./Button";

const SubmitButton = ({ name, className }) => {
  return (
    <>
      <input type="submit" name={name} className="hidden" />
      <Button
        type="submit"
        className={className}
      >
        {name}
      </Button>
    </>
  );
};

export default SubmitButton;
