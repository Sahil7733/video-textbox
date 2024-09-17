import React from "react";

const ConfigPanel = ({ textBox, onConfigChange }) => {
  return (
    <div className="config-panel">
      <button className="add-text-btn">Add Text</button>

      <div className="config-section">
        <h4>Position</h4>
        <div className="position-inputs">
          <div>
            <label>X</label>
            <input
              type="number"
              value={textBox.xPos}
              onChange={(e) => onConfigChange({ xPos: parseInt(e.target.value) })}
            />
          </div>
          <div>
            <label>Y</label>
            <input
              type="number"
              value={textBox.yPos}
              onChange={(e) => onConfigChange({ yPos: parseInt(e.target.value) })}
            />
          </div>
        </div>

        <h4>Dimensions</h4>
        <div className="position-inputs">
          <div>
            <label>Width</label>
            <input
              type="number"
              value={textBox.width}
              onChange={(e) => onConfigChange({ width: parseInt(e.target.value) })}
            />
          </div>
          <div>
            <label>Height</label>
            <input
              type="number"
              value={textBox.height}
              onChange={(e) => onConfigChange({ height: parseInt(e.target.value) })}
            />
          </div>
        </div>

        <h4>Text Settings</h4>
        <label>Font Family</label>
        <select
          value={textBox.fontFamily}
          onChange={(e) => onConfigChange({ fontFamily: e.target.value })}
        >
          <option value="Poppins">Poppins</option>
          <option value="Arial">Arial</option>
          <option value="Helvetica">Helvetica</option>
        </select>

        <label>Font Weight</label>
        <select
          value={textBox.fontWeight}
          onChange={(e) => onConfigChange({ fontWeight: e.target.value })}
        >
          <option value="Regular">Regular</option>
          <option value="Bold">Bold</option>
        </select>

        <label>Font Size</label>
        <input
          type="number"
          value={textBox.fontSize}
          onChange={(e) => onConfigChange({ fontSize: parseInt(e.target.value) })}
        />
      </div>

      <h4>Fill Color</h4>
      <input
        type="color"
        value={textBox.fillColor}
        onChange={(e) => onConfigChange({ fillColor: e.target.value })}
      />
      <input
        type="number"
        value={textBox.fillOpacity}
        onChange={(e) => onConfigChange({ fillOpacity: parseInt(e.target.value) })}
        min="0"
        max="100"
      />

      <h4>Stroke Color</h4>
      <input
        type="color"
        value={textBox.strokeColor}
        onChange={(e) => onConfigChange({ strokeColor: e.target.value })}
      />
      <input
        type="number"
        value={textBox.strokeOpacity}
        onChange={(e) => onConfigChange({ strokeOpacity: parseInt(e.target.value) })}
        min="0"
        max="100"
      />
    </div>
  );
};

export default ConfigPanel;
