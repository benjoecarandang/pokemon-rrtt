import { Outlet } from "react-router-dom";
import Backdrop from "../ui/Backdrop";
import Navbar from "../ui/Navbar";
import Footer from "../ui/Footer";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-white bg-opacity-100 min-h-screen flex flex-col relative overflow-hidden">
      <Backdrop />

      <Navbar />

      {/* <main className="w-full flex-col mt-auto"> */}
      <main className="w-full flex-col">
        {children}
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default MainLayout;
