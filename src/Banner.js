import React, { useEffect, useState } from 'react';

function Banner({ text, link, timer, onExpire, resetTimer }) {
  const [countdown, setCountdown] = useState(timer);

  useEffect(() => {
    setCountdown(timer); // Reset countdown when timer is updated
  }, [resetTimer]);

  useEffect(() => {
    if (countdown > 0) {
      const intervalId = setInterval(() => {
        setCountdown(countdown - 1);
      }, 1000);

      return () => clearInterval(intervalId);
    } else {
      onExpire();
    }
  }, [countdown, onExpire]);

  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="banner-link">
      <div className="banner">
        <p>{text}</p>
        <p>Time Remaining: {countdown} seconds</p>
      </div>
    </a>
  );
}

export default Banner;
