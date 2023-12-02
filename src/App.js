import React, { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import SharedLayout from "./components/shared/SharedLayout.jsx";
import NotFound from "./pages/NotFound/NotFound.jsx";
import Home from "./pages/Home/Home.jsx";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
// const Home = lazy(() => import("./pages/Home/Home.jsx"));

const App = () => {
  //   return (
  //     <Routes>
  //       <Route path="/" element={<SharedLayout />}>
  //         <Route index element={<Home />} />
  //         <Route path="*" element={<NotFound />} />
  //       </Route>
  //     </Routes>
  //   );
  return (
    <SharedLayout>
      <Header />
      <Home />
      <Footer />
    </SharedLayout>
  );
};

export default App;
