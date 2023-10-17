import Hero from "../components/Hero";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Features from "../components/Features";

function App() {
  return (
    <div className="w-full bg-slate-800 h-screen">
      <Header />
      <Hero />
      <Features />
      <Footer />
    </div>
  );
}

export default App;
