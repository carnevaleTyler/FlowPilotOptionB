import React from "react";
import BubbleChart from "./Components/BubbleChart";
import NavigationBar from "./Components/NavigationBar";
import BottomDrawer from "./Components/BottomDrawer";

const App = () => {
  return (
    <html>
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
      </head>
      <body>
        <NavigationBar />
        <div
          style={{
            width: "100vw",
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <BubbleChart />
        </div>
        <BottomDrawer />
      </body>
    </html>
  );
};

export default App;
