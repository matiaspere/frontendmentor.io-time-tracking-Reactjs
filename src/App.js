import React from "react";
import DataCard from "./Components/DataCard";
import "./styles/App.css";
import { data } from "./utilities/data";

import profile from "./images/image-jeremy.png";

function App() {
  const [daily, setDaily] = React.useState(false);
  const [weekly, setWeekly] = React.useState(true);
  const [monthly, setMonthly] = React.useState(false);

  const handleDaily = () => {
    setDaily(true);
    setWeekly(false);
    setMonthly(false);
  };
  const handleWeekly = () => {
    setDaily(false);
    setWeekly(true);
    setMonthly(false);
  };
  const handleMonthly = () => {
    setDaily(false);
    setWeekly(false);
    setMonthly(true);
  };

  return (
    <div className="App-Container">
      <div className="App">
        <div className="ProfileContainer">
          <div className="up">
            <div className="image-container">
              <img src={profile} />
            </div>
            <div className="name-container">
              <p className="Report">Report by</p>
              <p className="Name">Jeremy Robson</p>
            </div>
          </div>
          <div className="down">
            <div className="selector-container">
              <p onClick={handleDaily}>Daily</p>
              <p onClick={handleWeekly}>Weekly</p>
              <p onClick={handleMonthly}>Monthly</p>
            </div>
          </div>
        </div>
        <div className="CardsGrid">
          {data.map((i) => (
            <DataCard
              title={i.title}
              timeframes={i.timeframes}
              daily={daily}
              weekly={weekly}
              monthly={monthly}
              handleDaily={handleDaily}
              handleWeekly={handleWeekly}
              handleMonthly={handleMonthly}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
