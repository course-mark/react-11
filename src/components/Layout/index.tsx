import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Layout = () => {
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
        <Outlet/>
      </div>
      <Footer />
    </div>
  );
};

export { Layout };
