import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Investigation.css";

function Investigation() {
  const navigate = useNavigate();

  const [selected, setSelected] = useState("");
  const [message, setMessage] = useState("");
  const [attempts, setAttempts] = useState(0);

  const suspects = [
    {
      name: "Victor Black",
      icon: "👨🏻",
      clue: "He was seen leaving his room at 11:25 PM.",
    },
    {
      name: "Sarah Miller",
      icon: "👩🏻",
      clue: "Her fingerprints were found on the library door.",
    },
    {
      name: "Daniel Gray",
      icon: "👨🏻‍🦱",
      clue: "His car was still outside at midnight.",
    },
    {
      name: "The Stranger",
      icon: "🕵️",
      clue: "No alibi and matching footprints were found.",
    },
  ];

  const investigate = () => {
    if (!selected) {
      setMessage("⚠️ SELECT A SUSPECT FIRST");
      return;
    }

    setAttempts((prev) => prev + 1);

    if (selected === "The Stranger") {
      setMessage(
        "🩸 CORRECT! THE EVIDENCE POINTS TO THE STRANGER..."
      );

      setTimeout(() => {
        navigate("/ending");
      }, 1800);
    } else {
      setMessage(
        "❌ WRONG ACCUSATION! Something doesn't match the evidence..."
      );
    }
  };

  return (
    <div className="investigation-page">

      <div className="investigation-overlay"></div>

      <div className="investigation-container">

        <p className="case-label">
          CASE FILE #001
        </p>

        <h1>FINAL INVESTIGATION</h1>

        <p className="subtitle">
          One final decision will reveal the truth...
        </p>

        {/* FINAL CLUES */}

        <div className="clue-box">

          <h2>🔎 FINAL CLUES</h2>

          <div className="clue">
            🕐
            <span>
              Murder happened at exactly <strong>11:47 PM</strong>.
            </span>
          </div>

          <div className="clue">
            👻
            <span>
              Someone was inside the mansion before the murder.
            </span>
          </div>

          <div className="clue">
            👣
            <span>
              Two different footprints were discovered.
            </span>
          </div>

          <div className="clue">
            🕵️
            <span>
              One suspect has <strong>no confirmed alibi</strong>.
            </span>
          </div>

        </div>

        {/* ATTEMPTS */}

        <div className="attempt-counter">
          INVESTIGATION ATTEMPTS: {attempts}
        </div>

        <h2 className="question">
          WHO IS THE KILLER?
        </h2>

        {/* SUSPECTS */}

        <div className="killer-grid">

          {suspects.map((suspect) => (

            <button
              key={suspect.name}
              className={
                selected === suspect.name
                  ? "killer-card selected"
                  : "killer-card"
              }
              onClick={() => {
                setSelected(suspect.name);
                setMessage("");
              }}
            >

              <div className="killer-icon">
                {suspect.icon}
              </div>

              <h3>
                {suspect.name}
              </h3>

              <p>
                {suspect.clue}
              </p>

              {selected === suspect.name && (
                <span className="selected-text">
                  ✓ SELECTED
                </span>
              )}

            </button>

          ))}

        </div>

        {/* MESSAGE */}

        {message && (
          <div
            className={
              selected === "The Stranger"
                ? "investigation-message correct"
                : "investigation-message wrong"
            }
          >
            {message}
          </div>
        )}

        {/* ACCUSE */}

        <button
          className="solve-btn"
          onClick={investigate}
        >
          🩸 ACCUSE SUSPECT
        </button>

        {/* BACK */}

        <button
          className="back-btn"
          onClick={() => navigate("/suspects")}
        >
          ← BACK TO SUSPECTS
        </button>

      </div>

    </div>
  );
}

export default Investigation;