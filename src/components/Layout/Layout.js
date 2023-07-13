import Header from "../Common/Header";
import Sidebar from "../Common/Sidebar";
import Footer from "../Common/Footer";

export default function Layout({ children }) {
  return (
    <>
      <div>
        <div className="flex justify-center">
          <Header />
        </div>
        <Sidebar />
        {children}
        {/* <Footer /> */}
      </div>
    </>
  );
}
