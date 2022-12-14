import React from "react";
import "../styles/DataCard.css";
// images
import imgWork from "../images/icon-work.svg";
import imgPlay from "../images/icon-play.svg";
import imgStudy from "../images/icon-study.svg";
import imgExercise from "../images/icon-exercise.svg";
import imgSocial from "../images/icon-social.svg";
import imgSelfCare from "../images/icon-self-care.svg";
import options from '../images/icon-ellipsis.svg';

const DataCard = (props) => {
  const { title, timeframes, daily, weekly, monthly, handleDaily, handleWeekly, handleMonthly } = props
  let clase = `ColorContainer ${title}`;
  if (title === "Self Care") {
    clase = "ColorContainer SelfCare";
  }

  let image = "";
  if (title === "Work") {
    image = imgWork;
  } else if (title === "Play") {
    image = imgPlay;
  } else if (title === "Study") {
    image = imgStudy;
  } else if (title === "Exercise") {
    image = imgExercise;
  } else if (title === "Social") {
    image = imgSocial;
  } else {
    image = imgSelfCare;
  }

  return (
    <div className="Container">
      {daily && <>
      <div className={clase}>
        <img src={image} />
      </div>
      <div className="DataContainer">
          <div className="DataContainer-header">
            <p>{title}</p>
            <img src={options}/>
          </div>
          <div className="DataContainer-body">
            <p className="CurrentTime">{timeframes.daily.current}hrs</p>
            <p className="PreviousTime">Last week - {timeframes.daily.previous}hrs</p>
          </div>
      </div>
      </>}
      {weekly && <>
      <div className={clase}>
        <img src={image} />
      </div>
      <div className="DataContainer">
          <div className="DataContainer-header">
            <p>{title}</p>
            <img src={options}/>
          </div>
          <div className="DataContainer-body">
            <p className="CurrentTime">{timeframes.weekly.current}hrs</p>
            <p className="PreviousTime">Last week - {timeframes.weekly.previous}hrs</p>
          </div>
      </div>
      </>}
      {monthly && <>
      <div className={clase}>
        <img src={image} />
      </div>
      <div className="DataContainer">
          <div className="DataContainer-header">
            <p>{title}</p>
            <img src={options}/>
          </div>
          <div className="DataContainer-body">
            <p className="CurrentTime">{timeframes.monthly.current}hrs</p>
            <p className="PreviousTime">Last week - {timeframes.monthly.previous}hrs</p>
          </div>
      </div>
      </>}
    </div>
    
  );
};

export default DataCard;
