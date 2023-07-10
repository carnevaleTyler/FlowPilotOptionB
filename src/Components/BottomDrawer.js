import React from "react";

const BottomDrawer = () => {
  return (
    <div
      style={{
        backgroundColor: "#FFF",
        padding: "20px",
        borderRadius: "20px",
        boxShadow: "0px -4px 4px rgba(0, 0, 0, 0.25)",
        position: "fixed",
        bottom: "0",
        left: "0",
        right: "0",
      }}
    >
      <h1 style={{ color: "#000", textAlign: "left" }}>Title</h1>
      <h2
        style={{
          color: "#808080",
          fontWeight: "600",
          fontSize: "150%",
          marginBottom: "10px",
        }}
      >
        Subtitle
      </h2>
      <button
        style={{
          backgroundColor: "#FFF",
          borderRadius: "10000px",
          padding: "10px 15px",
          margin: "10px 0",
          color: "#006BFF",
          border: "1px solid #006BFF",
          textDecoration: "none",
          cursor: "pointer",
        }}
      >
        Capsule Button
      </button>
      <button
        style={{
          backgroundColor: "#006BFF",
          borderRadius: "10000px",
          padding: "15px 20px",
          width: "100%",
          display: "block",
          margin: "10px 0",
          color: "white",
          border: "none",
          textDecoration: "none",
          cursor: "pointer",
        }}
      >
        Continue (1/8)
      </button>
    </div>
  );
};

export default BottomDrawer;
