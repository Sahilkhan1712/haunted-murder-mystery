import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Ending.css";

function Ending() {
  const navigate = useNavigate();
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setRevealed(true);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="ending-page">

      <div className="ending-overlay"></div>

      <div className="ending-container">

        <p className="ending-case">
          CASE FILE #001
        </p>

        <h1 className="ending-title">
          CASE SOLVED
        </h1>

        <div className="ending-line"></div>

        <p className="ending-subtitle">
          THE TRUTH HAS FINALLY BEEN REVEALED...
        </p>

        {!revealed ? (
          <div className="reveal-loading">
            🔎 ANALYZING THE EVIDENCE...
          </div>
        ) : (
          <div className="killer-reveal">

            <div className="ghost-icon">
              🕵️
            </div>

            <h2>
              THE KILLER WAS
            </h2>

            <h3>
              THE STRANGER
            </h3>

            <div className="blood-line"></div>

            <p>
              The Stranger had no confirmed alibi.
            </p>

            <p>
              His footprints matched the mysterious footprints
              discovered inside Blackwood Manor.
            </p>

            <p>
              He was seen near the mansion shortly before
              the murder and disappeared immediately afterward.
            </p>

            <div className="final-message">
              <span>👻</span>
              <strong>
                "HE WAS HERE..."
              </strong>
              <span>👻</span>
            </div>

            <p className="truth-text">
              The ghost was warning you about him.
              You found the truth.
            </p>

          </div>
        )}

        {revealed && (
          <div className="ending-buttons">

            <button
              className="restart-btn"
              onClick={() => navigate("/")}
            >
              🔄 PLAY AGAIN
            </button>

            <button
              className="home-btn"
              onClick={() => navigate("/")}
            >
              🏠 RETURN HOME
            </button>

          </div>
        )}

        <p className="case-closed">
          🔪 BLACKWOOD MANOR • CASE #001 • CLOSED
        </p>

      </div>

    </div>
  );
}

export default Ending;