import About from "./component/About";
import Footer from "./component/Footer";
import Hero from "./component/Hero";
import Service from "./component/Service";
import Tour from "./component/Tour";
import Navbar from "./component/navbar";

function App() {
  return (
    <div>
      <>
        <Navbar />
        <Hero />
        <About />
        <Service />
        <Tour />
        <Footer />
      </>
    </div>
  );
}

export default App;
