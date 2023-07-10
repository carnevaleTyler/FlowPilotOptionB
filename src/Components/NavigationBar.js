import React from "react";

const NavigationBar = () => {
  const navbarStyle = {
    display: "flex",
    alignItems: "center",
    height: "64px",
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    background: "none",
    fontFamily: "SF Pro Text, Helvetica, Arial, sans-serif", // Apply SF Pro Text font here
    fontWeight: "bold",
    fontSize: "18px",
    color: "#333",
    zIndex: 9999,
    padding: "0 1rem",
  };

  const svgStyle = {
    marginRight: "8px",
    width: "12px",
    height: "20px",
  };

  const titleStyle = {
    flex: 1,
    textAlign: "center",
  };

  const rightItemStyle = {
    marginLeft: "8px",
  };

  return (
    <div style={navbarStyle}>
      <svg
        style={svgStyle}
        viewBox="0 0 12 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 10.0015C0.0112305 9.61963 0.145996 9.29395 0.449219 9.00195L9.20898 0.433105C9.44482 0.186035 9.75928 0.0625 10.1187 0.0625C10.8486 0.0625 11.4214 0.624023 11.4214 1.354C11.4214 1.71338 11.2754 2.03906 11.0283 2.29736L3.1333 10.0015L11.0283 17.7056C11.2754 17.9526 11.4214 18.2783 11.4214 18.6377C11.4214 19.3789 10.8486 19.9404 10.1187 19.9404C9.75928 19.9404 9.44482 19.8169 9.20898 19.5698L0.449219 11.001C0.145996 10.709 0 10.3833 0 10.0015Z"
          fill="black"
        />
      </svg>
      <div style={titleStyle}>FlowPilot</div>
      <div style={rightItemStyle}>1/8</div>
    </div>
  );
};

export default NavigationBar;
