import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div>
      <Header />
      <div className="container mx-auto min-h-screen">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export { Layout };
