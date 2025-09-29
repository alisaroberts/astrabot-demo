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
          <div className="stars" />
          <div className="shooting-star s1" />
          <div className="shooting-star s2" />
          <div className="shooting-star s3" />
        </>
      )}

      {/* clouds only in day mode */}
      {!isCosmic && (
        <>
          <div className="cloud cloud1" />
          <div className="cloud cloud2" />
        </>
      )}

      <div className="chat-card glass">
        <div className="chat-header">
          <h1 className={`title ${isCosmic ? "cosmic-title" : "day-title"}`}>
            AstraBot
          </h1>
          <button
            className={`toggle-btn ${isCosmic ? "on" : "off"}`}
            onClick={() => setIsCosmic((v) => !v)}
          >
            {isCosmic ? "OFF" : "ON"}
          </button>
        </div>

        <div className="chat-body">
          <AstraBot />

          <div className="bot-message glass">
            <div className="demo-top">
              🌌 Have you tried turning the universe off and on again?
            </div>

            <div className="demo-intro">
              This demo showcases front-end development skills including:
            </div>

            <ul className="demo-showcase">
              <li>React component structure with theme toggle</li>
              <li>CSS animations (stars, asteroid, AstraBot)</li>
              <li>Glassmorphism UI with cross-browser support</li>
              <li>Responsive design for mobile and desktop</li>
            </ul>

            <div className="demo-outro">✨ Thanks for visiting my demo! ✨</div>
          </div>
        </div>
      </div>

      {/* floating developer credit asteroid (single GIF only) */}
      <div className="floating-credit">
        <img
          src={`${process.env.PUBLIC_URL}/mydevelopmentcredit.gif`}
          alt="Alisa Roberts Development 2025"
          className="asteroid"
        />
      </div>
    </div>
  );
}
