import React from "react";
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

import { useTranslation } from "react-i18next";

function App() {
  const { t, i18n } = useTranslation();
  return (
    <StateProvider>
      <BrowserRouter>
        <div className="App">
          <Header translate={t} i18n={i18n} />
          <Banner translate={t} />
          <About translate={t} />
          <Skills translate={t} />
          <Work translate={t} />
          <CTA translate={t} />
          <CV translate={t} />
        </div>
      </BrowserRouter>
    </StateProvider>
  );
}

export default App;
