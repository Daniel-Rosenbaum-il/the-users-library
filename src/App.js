import "./assets/styles/main.scss";
import { Home } from "./pages/Home";
import { Header } from "./cmps/Header";
import { Footer } from "./cmps/Footer";
function App() {
  return (
    <>
      <Header />
      <Home />
      <Footer />
    </>
  );
}

export default App;
