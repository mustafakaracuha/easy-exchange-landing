import { useState } from "react";
import Header from "./components/layout/Header";
import Hero from "./components/sections/Hero";
import Features from "./components/sections/Features";
import ConvertFund from "./components/sections/ConvertFund";
import Footer from "./components/layout/Footer";
import LoginModal from "./components/layout/LoginModal";
import BackToTop from "./components/layout/BackToTop";

function App() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  return (
    <>
      <Header onLoginClick={() => setIsLoginOpen(true)} />
      <main>
        <Hero />
        <Features />
        <ConvertFund />
      </main>
      <Footer />
      <LoginModal open={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
      <BackToTop />
    </>
  );
}

export default App;
