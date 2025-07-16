import Contact from "./ContactHeader";
import Footer from "./Footer";
import LogoHeader from "./LogoHeader";
import Navbar from "./Navbar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Contact />
      <LogoHeader />
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
