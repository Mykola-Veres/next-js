import Footer from "./Footer";
import Header from "./Header";

export default function Heading({ children }) {
  return (
    <>
      <Header></Header>
      {children}
      <Footer></Footer>
    </>
  );
}
