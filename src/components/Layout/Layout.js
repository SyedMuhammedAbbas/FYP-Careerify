import Header from "../Common/Header";
import Sidebar from "../Common/Sidebar";
import Footer from "../Common/Footer";

export default function Layout({ children }) {
  return (
    <>
      <div>
        <Header />
        <Sidebar />
        {children}
        {/* <Footer /> */}
      </div>
    </>
  );
}
