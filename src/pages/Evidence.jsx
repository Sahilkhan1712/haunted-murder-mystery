import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Evidence.css";

function Evidence() {
  const navigate = useNavigate();
  const [selectedEvidence, setSelectedEvidence] = useState(null);

  const evidenceList = [
    {
      icon: "🔪",
      title: "Murder Weapon",
      time: "Found at 11:52 PM",
      description:
        "A blood-stained knife was discovered near the victim. Most fingerprints were wiped away, but one partial fingerprint remains.",
      clue:
        "The partial fingerprint could belong to someone who knew the victim."
    },
    {
      icon: "👣",
      title: "Bloody Footprints",
      time: "Found near the library door",
      description:
        "Two different sets of footprints were discovered. One appears to belong to a large male shoe.",
      clue:
        "The unknown footprints do not match the victim or the household staff."
    },
    {
      icon: "📜",
      title: "Secret Note",
      time: "Found on the desk",
      description:
        "The note contains a disturbing message: 'HE WAS HERE AT 11:30 PM.'",
      clue:
        "Someone was inside the mansion 17 minutes before the estimated murder."
    },
    {
      icon: "⌚",
      title: "Broken Watch",
      time: "Stopped at 11:47 PM",
      description:
        "The victim's broken watch stopped at exactly 11:47 PM, matching the estimated time of death.",
      clue:
        "The time confirms the murder happened between 11:30 PM and 11:47 PM."
    }
  ];

  const openEvidence = (item) => {
    setSelectedEvidence(item);
  };

  const closeEvidence = () => {
    setSelectedEvidence(null);
  };

  return (
    <div className="evidence-page">

      <div className="evidence-container">

        <p className="evidence-label">
          CASE FILE #001
        </p>

        <h1>EVIDENCE ROOM</h1>

        <p className="evidence-subtitle">
          Everything you discovered at Blackwood Manor
        </p>

        {/* Evidence Cards */}

        <div className="evidence-grid">

          {evidenceList.map((item, index) => (

            <button
              className="evidence-card"
              key={index}
              onClick={() => openEvidence(item)}
            >

              <div className="evidence-icon">
                {item.icon}
              </div>

              <div className="evidence-info">

                <h2>
                  {item.title}
                </h2>

                <span>
                  {item.time}
                </span>

                <p>
                  {item.description}
                </p>

                <small>
                  🔍 CLICK TO ANALYZE
                </small>

              </div>

            </button>

          ))}

        </div>

        {/* Important Clue */}

        <div className="important-clue">

          <h2>
            ⚠️ IMPORTANT DISCOVERY
          </h2>

          <p>
            The ghost's message said:
          </p>

          <strong>
            "HE WAS HERE..."
          </strong>

          <p>
            Someone was inside the mansion before the murder.
            One of the suspects may be lying.
          </p>

        </div>

        {/* Navigation */}

        <button
          className="suspect-btn"
          onClick={() => navigate("/suspects")}
        >
          INTERVIEW SUSPECTS →
        </button>

        <button
          className="back-btn"
          onClick={() => navigate("/crime-scene")}
        >
          ← BACK TO CRIME SCENE
        </button>

      </div>

      {/* Evidence Detail Popup */}

      {selectedEvidence && (

        <div className="evidence-modal">

          <div className="evidence-modal-box">

            <div className="modal-icon">
              {selectedEvidence.icon}
            </div>

            <h2>
              {selectedEvidence.title}
            </h2>

            <span>
              {selectedEvidence.time}
            </span>

            <p>
              {selectedEvidence.description}
            </p>

            <div className="hidden-clue">

              <h3>
                🔎 INVESTIGATOR'S CLUE
              </h3>

              <p>
                {selectedEvidence.clue}
              </p>

            </div>

            <button
              onClick={closeEvidence}
            >
              CLOSE EVIDENCE
            </button>

          </div>

        </div>

      )}

    </div>
  );
}

export default Evidence;