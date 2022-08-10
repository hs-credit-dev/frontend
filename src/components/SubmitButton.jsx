import { useRef } from "react";
import Button from "./Button";

const SubmitButton = ({ name, className }) => {
  const submitBtn = useRef(null);

  return (
    <>
      <input ref={submitBtn} type="submit" name={name} className="hidden" />
      <Button
        type="submit"
        className={className}
        onClick={() => {
          submitBtn.current.click();
        }}
      >
        {name}
      </Button>
    </>
  );
};

export default SubmitButton;
