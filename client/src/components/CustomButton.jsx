/* eslint-disable react/prop-types */
import { useSnapshot } from "valtio";
import state from "../store";

const CustomButton = ({ title, type, handleClick, customStyle }) => {
  const snap = useSnapshot(state);

  const generateStyle = (type) => {
    if (type === "filled") {
      return {
        backgroundColor: snap.color,
        color: "#fff",
      };
    }
  };
  return (
    <button
      style={generateStyle(type)}
      className={`px-2 py-1.5 flex-1 rounded-md ${customStyle}`}
      onClick={handleClick}
    >
      {title}
    </button>
  );
};

export default CustomButton;
