import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CrimeScene.css";

function CrimeScene() {
  const navigate = useNavigate();

  const [foundEvidence, setFoundEvidence] = useState([]);
  const [showGhost, setShowGhost] = useState(false);
  const [message, setMessage] = useState("");
  const [selectedEvidence, setSelectedEvidence] = useState(null);

  const evidence = [
    {
      id: 1,
      name: "Murder Weapon",
      icon: "🔪",
      description:
        "A blood-stained knife was found near the victim. Someone tried to wipe the fingerprints."
    },
    {
      id: 2,
      name: "Bloody Footprints",
      icon: "👣",
      description:
        "Two different footprints were found near the library door. One belongs to the victim... the other doesn't match anyone in the house."
    },
    {
      id: 3,
      name: "Secret Note",
      icon: "📜",
      description:
        "The note says: 'HE WAS HERE AT 11:30 PM.' The handwriting appears to be written by someone who knew the victim."
    },
    {
      id: 4,
      name: "Broken Watch",
      icon: "⌚",
      description:
        "A broken watch stopped exactly at 11:47 PM — the estimated time of death."
    }
  ];

  const collectEvidence = (item) => {
    if (foundEvidence.includes(item.id)) {
      setSelectedEvidence(item);
      return;
    }

    const updatedEvidence = [
      ...foundEvidence,
      item.id
    ];

    setFoundEvidence(updatedEvidence);

    setSelectedEvidence(item);

    setMessage(
      `Evidence Found: ${item.name}`
    );

    // Ghost appears after 3rd evidence
    if (updatedEvidence.length === 3) {
      setTimeout(() => {
        setShowGhost(true);
      }, 1000);
    }
  };

  const closeGhost = () => {
    setShowGhost(false);
    setMessage(
      "Something was watching you..."
    );
  };

  return (
    <div className="crime-page">

      <div className="crime-overlay"></div>

      {/* HEADER */}

      <div className="crime-header">

        <p>CASE FILE #001</p>

        <h1>BLACKWOOD MANOR</h1>

        <span>
          CRIME SCENE — LIBRARY
        </span>

      </div>

      {/* CRIME ROOM */}

      <div className="crime-room">

        <div className="victim">

          <div className="victim-body"></div>

          <div className="victim-label">
            VICTIM
          </div>

        </div>

        {/* KNIFE */}

        <button
          className={`evidence evidence-knife ${
            foundEvidence.includes(1)
              ? "found"
              : ""
          }`}
          onClick={() =>
            collectEvidence(evidence[0])
          }
        >
          🔪
        </button>

        {/* FOOTPRINTS */}

        <button
          className={`evidence evidence-footprints ${
            foundEvidence.includes(2)
              ? "found"
              : ""
          }`}
          onClick={() =>
            collectEvidence(evidence[1])
          }
        >
          👣
        </button>

        {/* NOTE */}

        <button
          className={`evidence evidence-note ${
            foundEvidence.includes(3)
              ? "found"
              : ""
          }`}
          onClick={() =>
            collectEvidence(evidence[2])
          }
        >
          📜
        </button>

        {/* WATCH */}

        <button
          className={`evidence evidence-watch ${
            foundEvidence.includes(4)
              ? "found"
              : ""
          }`}
          onClick={() =>
            collectEvidence(evidence[3])
          }
        >
          ⌚
        </button>

      </div>

      {/* INVESTIGATION PANEL */}

      <div className="investigation-panel">

        <h2>
          🔎 INVESTIGATE THE CRIME SCENE
        </h2>

        <p>
          Search the room carefully.
          Click on anything that looks suspicious.
        </p>

        <div className="evidence-counter">

          Evidence Found:
          {" "}
          {foundEvidence.length} / 4

        </div>

        {/* MESSAGE */}

        {message && (
          <div className="evidence-message">
            🩸 {message}
          </div>
        )}

        {/* SELECTED EVIDENCE */}

        {selectedEvidence && (
          <div className="evidence-details">

            <h3>
              {selectedEvidence.icon}{" "}
              {selectedEvidence.name}
            </h3>

            <p>
              {selectedEvidence.description}
            </p>

          </div>
        )}

        {/* CONTINUE */}

        {foundEvidence.length === 4 && (
          <button
            className="continue-btn"
            onClick={() =>
              navigate("/evidence")
            }
          >
            VIEW ALL EVIDENCE →
          </button>
        )}

      </div>

      {/* GHOST EVENT */}

      {showGhost && (

        <div className="ghost-event">

          <div className="ghost">
            👻
          </div>

          <div className="ghost-message">

            <h2>
              YOU ARE NOT ALONE...
            </h2>

            <p>
              "He was here..."
            </p>

            <small>
              Something moved behind you.
            </small>

          </div>

          <button
            onClick={closeGhost}
          >
            CONTINUE INVESTIGATION
          </button>

        </div>

      )}

    </div>
  );
}

export default CrimeScene;