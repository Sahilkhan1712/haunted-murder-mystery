import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

function Home() {
  const navigate = useNavigate();

  const startInvestigation = () => {
    navigate("/case");
  };

  return (
    <div className="home-page">

      <div className="dark-overlay"></div>

      <div className="home-content">

        <p className="warning">
          ⚠️ WARNING: ENTER AT YOUR OWN RISK
        </p>

        <h1>HAUNTED</h1>

        <h2>MURDER MYSTERY</h2>

        <p className="tagline">
          Every murder has a secret...
          <br />
          Every ghost has a story.
        </p>

        <button
          className="start-btn"
          onClick={startInvestigation}
        >
          🩸 ENTER THE CASE
        </button>

        <p className="footer-text">
          🔪 Investigate • 👻 Survive • 🩸 Discover the Truth
        </p>

      </div>

    </div>
  );
}

export default Home;