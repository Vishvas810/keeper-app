import React from "react";

function Footer() {
  return (
    <footer>
      <p>
        Made with <i className="fas fa-heart" style={{ color: "#ef4444" }}></i>{" "}
        by{" "}
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          Vishvas
        </a>
      </p>
      <p style={{ marginTop: "0.5rem", fontSize: "0.75rem" }}>
        <i className="fas fa-code"></i> Built with React & Vite
      </p>
    </footer>
  );
}

export default Footer;
