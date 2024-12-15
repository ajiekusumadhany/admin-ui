import Navbar from "../fragments/Navbar";
import Header from "../fragments/Header";
import { useContext } from "react";
import { ThemeContext } from "../../context/themeContext";

const MainLayout = (props) => {
  const { children } = props;
const { theme } = useContext(ThemeContext);
return (
  <div className={`flex bg-special-mainBg w-screen min-h-screen max-w-full ${theme.name}`}>
    {/* Your content goes here */}

      {/* navbar start*/}
      <Navbar />
      {/* navbar end*/}
      <div className="w-screen">
        {/* header start*/}
        <Header />
        {/* header end*/}
        {/* content start*/}
        <main className="px-6 py-4">{children}</main>
        {/* content end*/}
      </div>
    </div>
  );
};

export default MainLayout;
