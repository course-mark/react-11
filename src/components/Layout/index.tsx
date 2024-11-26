import { Outlet, useNavigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { useEventListener } from "usehooks-ts";

const Layout = () => {
  const navigate = useNavigate();
  useEventListener("keydown", (e) => {
    console.log("keybooard key down", e.key);
    if (e.key === "q") {
      navigate("/about-us");
    }
    if (e.key === "k") {
      navigate("/karan-aujla");
    }
  });
  return (
    <div>
      <Header />
      <div className="container mx-auto min-h-screen">
        {/* Outlet is dynamic. it will depend on browser url */}
        {/* <KaranAujla />
        <AboutUs />
        <Home />
        <RanjitBawa />
        <HarbhajanMaan />
        <UseEffectHook />
        <Events />
        <StateManagement />
        <Children /> */}
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export { Layout };
