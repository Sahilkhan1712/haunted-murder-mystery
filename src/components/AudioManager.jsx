import React, { useRef, useState } from "react";

function AudioManager() {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const toggleSound = async () => {
    try {
      if (!audioRef.current) {
        audioRef.current = new Audio(
          `${import.meta.env.BASE_URL}sounds/horror-background%20copy.mp3`
        );

        audioRef.current.loop = true;
        audioRef.current.volume = 0.8;

        audioRef.current.addEventListener("ended", () => {
          setPlaying(false);
        });
      }

      const audio = audioRef.current;

      if (playing) {
        audio.pause();
        setPlaying(false);
      } else {
        await audio.play();
        setPlaying(true);
        console.log("🔊 HORROR MUSIC PLAYING");
      }
    } catch (error) {
      console.error("❌ AUDIO ERROR:", error);
    }
  };

  return (
    <button
      onClick={toggleSound}
      style={{
        position: "fixed",
        top: "20px",
        right: "20px",
        zIndex: 99999,
        padding: "14px 22px",
        background: "#050505",
        color: "#ff2222",
        border: "2px solid red",
        borderRadius: "6px",
        cursor: "pointer",
        fontSize: "15px",
        fontWeight: "bold",
        boxShadow: "0 0 25px rgba(255,0,0,0.6)",
      }}
    >
      {playing ? "🔊 HORROR ON" : "🔇 HORROR OFF"}
    </button>
  );
}

export default AudioManager;