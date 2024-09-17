import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateTextBox, deleteTextBox } from '../Redux/textBoxSlice';
import { Rnd } from 'react-rnd';

const VideoSection = () => {
  const textBoxes = useSelector(state => state.textBoxes);
  const dispatch = useDispatch();

  const handleDragStop = (id, d) => {
    dispatch(updateTextBox({ id, x: d.x, y: d.y }));
  };

  const handleResizeStop = (id, ref, position) => {
    dispatch(updateTextBox({
      id,
      width: ref.style.width,
      height: ref.style.height,
      x: position.x,
      y: position.y,
    }));
  };

  return (
    <div className="video-section" style={{ position: 'relative' }}>
      <video src="/sample-video.mp4" controls style={{ width: '100%' }} />
      {textBoxes.map(tb => (
        <Rnd
          key={tb.id}
          size={{ width: tb.width, height: tb.height }}
          position={{ x: tb.x, y: tb.y }}
          onDragStop={(e, d) => handleDragStop(tb.id, d)}
          onResizeStop={(e, direction, ref, delta, position) => handleResizeStop(tb.id, ref, position)}
          bounds="parent"
        >
          <div
            style={{
              border: '1px solid black',
              padding: '8px',
              backgroundColor: 'rgba(255, 255, 255, 0.7)',
              fontSize: `${tb.fontSize}px`,
              position: 'relative',
            }}
          >
            {tb.text}
            <button
              style={{
                position: 'absolute',
                top: '-10px',
                right: '-10px',
                background: 'red',
                color: 'white',
                borderRadius: '50%',
                cursor: 'pointer',
              }}
              onClick={() => dispatch(deleteTextBox(tb.id))}
            >
              X
            </button>
          </div>
        </Rnd>
      ))}
    </div>
  );
};

export default VideoSection;
