import Footer from "../footer";
import Header from "../header";
const AuthLayout = ({ children }) => {
  return (
    <div className="bg-black">
      <Header />
      <div className="container mx-auto px-4 mt-[103px]">{children}</div>
      <Footer />
    </div>
  );
};

export default AuthLayout;
