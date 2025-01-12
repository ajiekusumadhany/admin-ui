import Navbar from "../fragments/Navbar";
import Header from "../fragments/Header";
import { ThemeContext } from "../../context/themeContext";
import { ModeContext } from "../../context/modeContext";
import { useContext } from "react";
import { NotifContext } from "../../context/notifContext";
import SimpleBackdrop from "../Elements/Backdrop";
import CustomizedSnackbars from "../Elements/SnackBar";

const MainLayout = (props) => {
  const { children } = props;
  const { msg, setMsg, open, setOpen, isLoading, setIsLoading } =
    useContext(NotifContext);

  const { theme } = useContext(ThemeContext);
  const { mode } = useContext(ModeContext);
  return (
    <div
      className={`flex bg-special-mainBg w-screen min-h-screen max-w-full ${theme.name} ${
    mode.name === "dark" ? "dark" : ""
  }`}
    >
      {/* navbar start*/}
      <Navbar />
      {/* navbar end*/}
      <div className="w-screen">
      {isLoading && (
          <SimpleBackdrop isLoading={isLoading} setIsLoading={setIsLoading} />
        )}
        {msg && (
          <CustomizedSnackbars
          severity={msg.severity}
          message={msg.desc}
          open={open}
          setOpen={setOpen}
          />
        )}
        {/* header start*/}
        <Header />
        {/* header end*/}
        {/* content start*/}
        <main className="px-6 py-4 bg">{children}</main>
        {/* content end*/}
      </div>
    </div>
  );
};

export default MainLayout;
