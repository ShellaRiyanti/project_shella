import '../App.css';
import { useEffect, useState } from 'react';

const Header = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const currentDate = time.toLocaleDateString('id-ID', dateOptions).toUpperCase();

  const formatTime = (date, offsetMinutes = 0) => {
    const adjustedDate = new Date(date.getTime() + offsetMinutes * 60000);
    return adjustedDate.toLocaleTimeString('id-ID', { hour12: false });
  };

  const utcTime = formatTime(time, 420); 
  const wibTime = formatTime(time, 0);   
  return (
    <header className="hero-section border-bottom">
      <div className="mx-3 d-flex justify-content-between align-items-center py-1">
        <div className="d-flex align-items-center">
          <div className="text-dark">{currentDate}</div>
        </div>
        <div className="text-dark">
          STANDAR WAKTU INDONESIA {wibTime} / {utcTime} UTC
        </div>
      </div>
    </header>
  );
};

export default Header;
