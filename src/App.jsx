import Header from "./components/Header.jsx";
import Main from "./components/Main.jsx";
import Footer from "./components/Footer.jsx";
import { BrowserRouter } from "react-router-dom";
import CartProvider from "./components/CartProvider.jsx";

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Header />
        <Main />
        <Footer />
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
