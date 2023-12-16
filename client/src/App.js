import React, { useState } from "react";
import Header from "./components/header/Header";
import { BrowserRouter as Router, Route, Routes, Outlet } from "react-router-dom";
import { IoIosArrowUp } from "react-icons/io";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import routingElements from "./routes/routingElements";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";

const App = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    // You can adjust the value based on when you want to show the button
    const showThreshold = 300;

    if (scrollY > showThreshold) {
      setShowBackToTop(true);
    } else {
      setShowBackToTop(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Attach scroll event listener when the component mounts
  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    // Remove the event listener when the component is unmounted
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Outlet />}>
            <Route index element={<Home />} />
            {routingElements.map((el, index) => (
              <Route key={index} path={el.path} element={el.element} />
            ))}
          </Route>
          <Route path="/register"  element={<Register />}/>
        <Route path="/login"  element={<Login />}/>
        </Routes>
        <Footer />
        {showBackToTop && (
          <button style={styles.backToTopButton} onClick={scrollToTop}>
            <IoIosArrowUp />
          </button>
        )}

      
      </Router>
    </div>
  );
};

const styles = {
  backToTopButton: {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    padding: "10px",
    background: "#3498db",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default App;

