import React from "react";
import { useNavigate } from "react-router-dom";
import "./Case.css";

function Case() {
  const navigate = useNavigate();

  return (
    <div className="case-page">

      <div className="case-overlay"></div>

      <div className="case-content">

        <p className="case-number">CASE FILE #001</p>

        <h1>THE LAST NIGHT</h1>

        <div className="blood-line"></div>

        <h2>THE MURDER OF ELENA GRAY</h2>

        <p className="case-story">
          At exactly 11:47 PM, a mysterious murder took place
          inside an abandoned mansion known as Blackwood Manor.
        </p>

        <p className="case-story">
          The victim was found dead inside the locked library.
          There were no signs of forced entry...
        </p>

        <p className="case-story">
          But investigators discovered something strange.
          A security camera captured a shadow standing behind
          the victim just moments before the murder.
        </p>

        <div className="warning-box">
          <p>⚠️ WARNING</p>
          <span>
            This case contains disturbing events.
            Proceed only if you are ready to uncover the truth.
          </span>
        </div>

        <button
          className="investigate-btn"
          onClick={() => navigate("/crime-scene")}
        >
          INVESTIGATE CRIME SCENE
        </button>

        <button
          className="back-btn"
          onClick={() => navigate("/")}
        >
          ← BACK
        </button>

      </div>

    </div>
  );
}

export default Case;