import React from "react";
import Header from "./components/header/Header";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Outlet,
} from "react-router-dom";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import routingElements from "./routes/routingElements";
const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Outlet />}>
            <Route index element={<Home />} />
            {routingElements.map((el, index) => {
              return <Route key={index} path={el.path} element={el.element} />;
            })}
          </Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
