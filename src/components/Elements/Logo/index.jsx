import { useContext } from "react";
import { ThemeContext } from "../../../context/themeContext";
const Logo = (props) => {
  const { variant = "text-primary text-4xl" } = props;
  const { theme } = useContext(ThemeContext);


  return (
    <div
      className={`flex justify-center font-poppins tracking-wide animate-bounce ${variant} ${theme.name} text-primary`}
    >
      <span className="font-bold ">FINE</span>bank
      <span className="font-bold">.IO</span>
    </div>
  );
};

export default Logo;
