import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Suspects.css";

function Suspects() {
  const navigate = useNavigate();
  const [selectedSuspect, setSelectedSuspect] = useState(null);

  const suspects = [
    {
      id: 1,
      name: "Victor Black",
      role: "Mansion Owner",
      icon: "👨🏻",
      description:
        "The owner of Blackwood Manor. He claims he was asleep when the murder happened.",
      alibi:
        "Victor says he was in his bedroom from 11:00 PM until midnight.",
      suspicious:
        "A security camera shows Victor leaving his room at 11:25 PM."
    },
    {
      id: 2,
      name: "Sarah Miller",
      role: "Housekeeper",
      icon: "👩🏻",
      description:
        "Sarah has worked at the mansion for five years and knew the victim personally.",
      alibi:
        "She claims she was cleaning the kitchen at the time of the murder.",
      suspicious:
        "Her fingerprints were found on the library door."
    },
    {
      id: 3,
      name: "Daniel Gray",
      role: "Victim's Brother",
      icon: "👨🏻‍🦱",
      description:
        "Daniel had a serious argument with Elena earlier that evening.",
      alibi:
        "Daniel claims he left the mansion at 11:15 PM.",
      suspicious:
        "His car was still parked outside the mansion at midnight."
    },
    {
      id: 4,
      name: "The Stranger",
      role: "Unknown Person",
      icon: "🕵️",
      description:
        "An unidentified person was seen near Blackwood Manor on the night of the murder.",
      alibi:
        "No confirmed alibi.",
      suspicious:
        "The unknown footprints found at the crime scene may belong to this person."
    }
  ];

  const selectSuspect = (suspect) => {
    setSelectedSuspect(suspect);
  };

  const closeSuspect = () => {
    setSelectedSuspect(null);
  };

  return (
    <div className="suspects-page">

      <div className="suspects-overlay"></div>

      <div className="suspects-container">

        <p className="case-label">
          CASE FILE #001
        </p>

        <h1>THE SUSPECTS</h1>

        <p className="subtitle">
          Everyone has a secret. Find out who is lying.
        </p>

        <div className="suspects-grid">

          {suspects.map((suspect) => (

            <button
              className="suspect-card"
              key={suspect.id}
              onClick={() => selectSuspect(suspect)}
            >

              <div className="suspect-icon">
                {suspect.icon}
              </div>

              <h2>
                {suspect.name}
              </h2>

              <span>
                {suspect.role}
              </span>

              <p>
                {suspect.description}
              </p>

              <small>
                🔍 INTERROGATE
              </small>

            </button>

          ))}

        </div>

        <button
          className="investigation-btn"
          onClick={() => navigate("/investigation")}
        >
          🔎 START FINAL INVESTIGATION →
        </button>

        <button
          className="back-btn"
          onClick={() => navigate("/evidence")}
        >
          ← BACK TO EVIDENCE
        </button>

      </div>

      {/* SUSPECT POPUP */}

      {selectedSuspect && (

        <div className="suspect-modal">

          <div className="suspect-modal-box">

            <div className="large-suspect-icon">
              {selectedSuspect.icon}
            </div>

            <h2>
              {selectedSuspect.name}
            </h2>

            <h3>
              {selectedSuspect.role}
            </h3>

            <p>
              {selectedSuspect.description}
            </p>

            <div className="alibi-box">

              <h4>
                🕐 ALIBI
              </h4>

              <p>
                {selectedSuspect.alibi}
              </p>

            </div>

            <div className="suspicious-box">

              <h4>
                ⚠️ SUSPICIOUS
              </h4>

              <p>
                {selectedSuspect.suspicious}
              </p>

            </div>

            <button
              onClick={closeSuspect}
            >
              CLOSE INTERROGATION
            </button>

          </div>

        </div>

      )}

    </div>
  );
}

export default Suspects;