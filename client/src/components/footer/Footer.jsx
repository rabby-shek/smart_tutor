import React from "react";
import FooterTop from "./FooterTop";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer style={styles.footer}>
      <FooterTop />
      <div style={styles.container}>
        <h1 style={styles.logo}>Smart Tutor</h1>
        <p style={styles.text}>© {currentYear} MRP Tech</p>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: "#333",
    color: "#fff",
    padding: "20px 0",
    textAlign: "center",
  },
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 20px", // Add padding to the sides for better spacing on smaller screens
    boxSizing: "border-box",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap", // Allow items to wrap to the next line on smaller screens
  },
  logo: {
    fontSize: "24px",
    fontWeight: "bold",
    margin: "10px 0", // Add margin to separate logo from other content
  },
  text: {
    fontSize: "14px",
    margin: "10px 0", // Add margin to separate text from other content
  },
};

export default Footer;
