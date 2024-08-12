import React, { useState } from 'react';
import Banner from './Banner';
import Dashboard from './Dashboard';
import './App.css';

function App() {
  const [isBannerVisible, setIsBannerVisible] = useState(true);
  const [bannerText, setBannerText] = useState('TakeUForward');
  const [bannerLink, setBannerLink] = useState('https://takeuforward.org/');
  const [bannerTimer, setBannerTimer] = useState(30); // Default timer set to 30 seconds
  const [isDashboardVisible, setIsDashboardVisible] = useState(false);

  // Function to update the timer and reset it immediately
  const updateBannerTimer = (newTimer) => {
    setBannerTimer(newTimer);
  };

  return (
    <div className="App">
      {isBannerVisible && (
        <Banner
          text={bannerText}
          link={bannerLink}
          timer={bannerTimer}
          onExpire={() => setIsBannerVisible(false)}
          resetTimer={bannerTimer} // Pass the timer to reset it in Banner.js
        />
      )}
      <button
        className="dashboard-toggle"
        onClick={() => setIsDashboardVisible(!isDashboardVisible)}
      >
        {isDashboardVisible ? 'Hide Dashboard' : 'Show Dashboard'}
      </button>
      {isDashboardVisible && (
        <Dashboard
          isBannerVisible={isBannerVisible}
          toggleBanner={() => setIsBannerVisible(!isBannerVisible)}
          setBannerText={setBannerText}
          setBannerLink={setBannerLink}
          setBannerTimer={updateBannerTimer}
        />
      )}
    </div>
  );
}

export default App;
