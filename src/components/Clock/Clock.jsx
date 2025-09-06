import { useEffect, useState } from "react";
import "./Clock.css";

function Clock() {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setDateTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const day = String(dateTime.getDate()).padStart(2, "0");
  const month = String(dateTime.getMonth() + 1).padStart(2, "0");
  const year = dateTime.getFullYear();
  const formattedDate = `${day}.${month}.${year}`;

  const formattedTime = dateTime.toLocaleTimeString("az-AZ", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  return (
    <div className="clock-container">
      <div className="clock-time">{formattedTime}</div>
      <div className="clock-date">{formattedDate}</div>
    </div>
  );
}

export default Clock;
