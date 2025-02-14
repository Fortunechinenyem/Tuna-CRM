import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div className="">
      <Navbar />
      <main className="flex-grow w-full max-w-7xl mx-auto px-6 md:px-10">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
