import React, { useEffect, useRef, useState } from "react";
import "./GhostEvent.css";

function GhostEvent() {
  const [showGhost, setShowGhost] = useState(false);
  const heartbeatRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowGhost(true);
    }, 5000);

    return () => {
      clearTimeout(timer);

      if (heartbeatRef.current) {
        heartbeatRef.current.pause();
        heartbeatRef.current.currentTime = 0;
      }
    };
  }, []);

  const playHeartbeat = async () => {
    try {
      const heartbeat = new Audio("/sounds/heartbeat.wav");

      heartbeat.volume = 1.0;
      heartbeat.loop = true;

      heartbeatRef.current = heartbeat;

      await heartbeat.play();

      console.log("❤️ HEARTBEAT PLAYING");

      // 5 seconds baad heartbeat stop
      setTimeout(() => {
        if (heartbeatRef.current) {
          heartbeatRef.current.pause();
          heartbeatRef.current.currentTime = 0;
        }
      }, 5000);

    } catch (error) {
      console.error("❌ HEARTBEAT ERROR:", error);
    }
  };

  const continueInvestigation = async () => {
    await playHeartbeat();
    setShowGhost(false);
  };

  if (!showGhost) {
    return null;
  }

  return (
    <div className="ghost-overlay">

      <div className="ghost-shadow">
        👻
      </div>

      <div className="ghost-warning">

        <h2>
          DON'T LOOK BEHIND YOU...
        </h2>

        <p>
          Something is watching you.
        </p>

        <p>
          ❤️ Your heartbeat is getting faster...
        </p>

        <button onClick={continueInvestigation}>
          CONTINUE
        </button>

      </div>

    </div>
  );
}

export default GhostEvent;