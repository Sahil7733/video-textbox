import React, { useState } from "react";
import ConfigPanel from "./Components/ConfigPanel"; 

const Home = () => {
  // State to manage the text box properties
  const [textBox, setTextBox] = useState({
    xPos: 50,
    yPos: 50,
    width: 100,
    height: 50,
    fontFamily: "Poppins",
    fontWeight: "Regular",
    fontSize: 36,
    fillColor: "#FF0000",
    fillOpacity: 100,
    strokeColor: "#000000",
    strokeOpacity: 100,
  });

  // Function to handle configuration changes
  const handleConfigChange = (newConfig) => {
    setTextBox((prevConfig) => ({
      ...prevConfig,
      ...newConfig,
    }));
  };

  return (
    <div className="container">
      {/* Video Section */}
      <div className="video-section">
        <video
          className="video-player"
          src="path-to-your-video.mp4"
          controls
          autoPlay
          muted
        >
          Your browser does not support the video tag.
        </video>
        {/* Text Box overlaying the video */}
        <div
          className="text-box"
          style={{
            position: "absolute",
            top: `${textBox.yPos}px`,
            left: `${textBox.xPos}px`,
            width: `${textBox.width}px`,
            height: `${textBox.height}px`,
            fontFamily: textBox.fontFamily,
            fontWeight: textBox.fontWeight,
            fontSize: `${textBox.fontSize}px`,
            color: textBox.fillColor,
            opacity: textBox.fillOpacity / 100,
            border: `1px solid ${textBox.strokeColor}`,
            borderWidth: `${textBox.strokeOpacity / 100}px`,
          }}
        >
          Editable Text
        </div>
      </div>

      {/* Configuration Panel */}
      <ConfigPanel textBox={textBox} onConfigChange={handleConfigChange} />
    </div>
  );
};

export default Home;
