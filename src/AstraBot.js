import React, { useState } from "react";
import "./App.css";

export default function AstraBot() {
  const [isJumping, setIsJumping] = useState(false);

  const handleClick = () => {
    setIsJumping(true);
    setTimeout(() => setIsJumping(false), 1500);
  };

  return (
    <div
      className={`astrabot ${isJumping ? "jump" : "bounce"}`}
      onClick={handleClick}
      title="Click me!"
    >
      <img
        src={process.env.PUBLIC_URL + "/astrabot.png"}
        alt="AstraBot"
        className="astrabot-img"
        draggable="false"
      />
    </div>
  );
}
