import React, { useState } from "react";
import AstraBot from "./AstraBot";
import "./App.css";

export default function App() {
  const [isCosmic, setIsCosmic] = useState(true);

  return (
    <div className={isCosmic ? "cosmic-bg" : "day-bg"}>
      {/* stars & shooting stars only in cosmic mode */}
      {isCosmic && (
        <>
          <div className="stars"></div>
          <div className="shooting-star s1"></div>
          <div className="shooting-star s2"></div>
          <div className="shooting-star s3"></div>
        </>
      )}

      {/* clouds only in day mode */}
      {!isCosmic && (
        <>
          <div className="cloud cloud1"></div>
          <div className="cloud cloud2"></div>
        </>
      )}

      <div className="chat-card glass">
        <div className="chat-header">
          <h1 className={`title ${isCosmic ? "cosmic-title" : "day-title"}`}>
            AstraBot
          </h1>
          <button
            className={`toggle-btn ${isCosmic ? "on" : "off"}`}
            onClick={() => setIsCosmic(!isCosmic)}
          >
            {isCosmic ? "OFF" : "ON"}
          </button>
        </div>

        <div className="chat-body">
          <AstraBot />
          <div className="bot-message glass">
            🌌 Have you tried turning the universe off and on again?
          </div>
        </div>
      </div>

      {/* floating developer credit asteroid */}
<div className="floating-credit">
  {/* firetrail stays steady */}
  <img
    src="/firetrail.gif"
    alt="Asteroid Fire Trail"
    className="firetrail"
  />
  {/* asteroid rocks back and forth */}
  <img
    src="/developercredit.png"
    alt="Alisa Roberts Development 2025"
    className="asteroid"
  />
</div>
    </div>
  );
}
