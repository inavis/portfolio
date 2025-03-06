import Header from "./Components/Header/Header";
import Banner from "./Components/Banner/Banner";
import About from "./Components/About/About";
import Skills from "./Components/Skills/Skills";
import Work from "./Components/Work/Work";
import CTA from "./Components/CTA/CTA";
import CV from "./Components/CV/CV";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import StateProvider from "./Context";

function App() {
  return (
    <StateProvider>
      <BrowserRouter>
        <div className="App">
          <Header />
          <Banner />
          <About />
          <Skills />
          <Work />
          <CTA />
          <CV />
        </div>
      </BrowserRouter>
    </StateProvider>
  );
}

export default App;
