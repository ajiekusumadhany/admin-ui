import { useContext } from "react";
import { ThemeContext } from "../../../context/themeContext";
const Button = (props) => {
    const { children, variant, type } = props;
    const { theme } = useContext(ThemeContext);

    return (
      <button
        className={`h-12 rounded-md text-sm ${variant} ${theme.name}`}
        type={type}
      >
        {children}
      </button>
    );
  };
  
  export default Button;