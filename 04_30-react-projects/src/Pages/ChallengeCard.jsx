import React from "react";

function ChallengeCard({ title, subtitle }) {
  return (
    <div
      style={{
        background: "linear-gradient(90deg, #2f855a, #48bb78)", // from-green-700 → to-green-500 substitute
        borderRadius: "1.25rem",    // same as rounded-2xl
        padding: "1.5rem",          // p-6
        textAlign: "center",
        width: "24rem",             // w-96 ~ 384px, but 24rem = 384px if base font-size 16px
        boxShadow: "0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -4px rgba(0,0,0,0.1)",
      }}
    >
      <h2
        style={{
          fontSize: "1.5rem",        // text-2xl
          fontWeight: "700",         // font-bold
          marginTop: "0.5rem",       // mt-2
        }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          style={{
            color: "#d1d5db",       // text-gray-300
            marginTop: "0.25rem",   // mt-1
          }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

export default ChallengeCard;
