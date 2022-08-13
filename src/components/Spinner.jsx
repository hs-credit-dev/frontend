import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

const Spinner = ({ className, ...props }) => {
  return (
    <FontAwesomeIcon
      icon={faSpinner}
      className={`animate-spin fa-3x ${className}`}
      {...props}
    />
  );
};

export default Spinner;
