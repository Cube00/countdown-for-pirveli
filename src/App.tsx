import { useCountdown } from "./utils";
import "./App.css";

function App() {
  const startDate = new Date("Feb 13, 2023 17:00:00").getTime();
  const endDate = new Date("Mar 28, 2023 12:00:00").getTime();
  const currentDate = new Date().getTime();
  const [days, hours, minutes, seconds] = useCountdown(endDate);

  //time percents
  let x0 = currentDate - startDate;
  let x1 = endDate - startDate;
  let total = (x0 / x1) * 100;

  return (
    <div className="countdown">
      <div className="backgroundC"></div>
      <div className="birds">
        <div className="bird_1">
          <img src="https://i.imgur.com/Ry6ziNr.png" />
        </div>
        <div className="bird_2">
          <img src="https://i.imgur.com/dByVPCO.png" />
        </div>
      </div>
      <div className="content">
        <div className="header">
          <h2>გინდა გაიგო რას გიმზადებთ?</h2>
        </div>
        <div className="countDownComponent">
          <div className="days countBlock">
            <h3>{days}</h3>
            <span>დღე</span>
          </div>
          <div className="to"></div>
          <div className="hours countBlock">
            <h3>{hours}</h3>
            <span>საათი</span>
          </div>
          <div className="to"></div>
          <div className="minutes countBlock">
            <h3>{minutes}</h3>
            <span>წუთი</span>
          </div>
          <div className="to"></div>
          <div className="seconds countBlock">
            <h3>{seconds}</h3>
            <span>წამი</span>
          </div>
        </div>
        <div className="countDownBar">
          <div
            className="countDonwBird"
            style={{ left: `${total - 1}%` }}
          ></div>
          <div
            className="countDownBarProgress"
            style={{ width: `${total}%` }}
          ></div>
          <div className="countDownBarBtn" style={{ left: `${total}%` }}></div>
        </div>
        <div className="countDownInfo">
          <span>დაელოდე 23 მარტს და იყავი პირველი!</span>
        </div>
      </div>
    </div>
  );
}

export default App;
