import React, { useState } from 'react';

function Dashboard({ isBannerVisible, toggleBanner, setBannerText, setBannerLink, setBannerTimer }) {
  const [textInput, setTextInput] = useState('');
  const [linkInput, setLinkInput] = useState('');
  const [timerInput, setTimerInput] = useState('');

  const handleTextChange = () => {
    setBannerText(textInput);
  };

  const handleLinkChange = () => {
    setBannerLink(linkInput);
  };

  const handleTimerChange = () => {
    const newTimer = Number(timerInput);
    setBannerTimer(newTimer); // Update the timer immediately
  };

  return (
    <div className="dashboard">
      <div>
        <label>Toggle Banner Visibility</label>
        <button onClick={toggleBanner}>
          {isBannerVisible ? 'Hide Banner' : 'Show Banner'}
        </button>
      </div>
      <div>
        <label>Set Banner Text</label>
        <input
          type="text"
          value={textInput}
          onChange={(e) => setTextInput(e.target.value)}
          placeholder="Enter banner text"
        />
        <button onClick={handleTextChange}>Update Text</button>
      </div>
      <div>
        <label>Set Banner Link</label>
        <input
          type="url"
          value={linkInput}
          onChange={(e) => setLinkInput(e.target.value)}
          placeholder="Enter a URL"
        />
        <button onClick={handleLinkChange}>Update Link</button>
      </div>
      <div>
        <label>Set Timer (seconds)</label>
        <input
          type="number"
          value={timerInput}
          onChange={(e) => setTimerInput(e.target.value)}
          placeholder="Enter timer in seconds"
        />
        <button onClick={handleTimerChange}>Update Timer</button>
      </div>
    </div>
  );
}

export default Dashboard;
