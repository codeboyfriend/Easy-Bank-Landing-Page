import Navbar from "./components/utils/Navbar";
import Hero from "./components/Hero";
import Section from "./components/Section";
import Article from "./components/Article";
import Footer from "./components/utils/FooTer";

function App() {
  return (
    <div className="container relative m-auto" >
      <Navbar />
      <Hero />
      <Section />
      <Article />
      <Footer />
    </div>
  )
}

export default App
