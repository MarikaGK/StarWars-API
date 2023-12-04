import React from "react";
import SharedLayout from "./components/shared/SharedLayout.jsx";
import Home from "./pages/Home/Home.jsx";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";

const App = () => {
  return (
    <SharedLayout>
      <Header />
      <Home />
      <Footer />
    </SharedLayout>
  );
};

export default App;
