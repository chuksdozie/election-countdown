import React, { useEffect, useState } from "react";
import styled from "styled-components";
import PhotoCard from "../components/PhotoCard";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .header {
    font-size: 1.5rem;
    font-weight: 400;
    margin: 1rem;
  }
  .clock-day {
    font-size: 3rem;
    font-weight: 700;
    color: orange;
    border-radius: 8px;
    margin: 0;
  }
  .clock-time {
    font-size: 1.2rem;
    font-weight: 400;
    margin: 0;
    color: #fff;
    border-radius: 8px;
  }
  .clock {
    width: 300px;
    height: 300px;
    border-radius: 50%;
    border: 2px solid orange;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .cand-div {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  .cand-header {
    font-weight: 400;
    font-size: 1rem;
  }
`;

const Home = () => {
  const [expiryTime, setExpiryTime] = useState("25 feb 2023 00:00:00");
  const [countdownTime, setCountdownTime] = useState({
    countdownDays: "",
    countdownHours: "",
    countdownMinutes: "",
    countdownSeconds: "",
  });

  const [candidates, setCandidates] = useState([
    {
      name: "Peter Obi",
      logo: "https://leadership.ng/wp-content/uploads/2022/07/LP.jpg",
      image:
        "https://cdn.vanguardngr.com/wp-content/uploads/2022/10/Peter-Obi-011.png",
      party: "Labour Party",
    },
    {
      name: "Bola Tinubu",
      logo: "https://media.premiumtimesng.com/wp-content/files/2013/03/Screen-shot-2013-03-05-at-10.52.04-PM.png",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/6/61/Asiwaju_Bola_Ahmed_Tinubu_%285980497975%29.jpg",
      party: "All Progressive Congress",
    },
    {
      name: "Atiku Abubakar",
      logo: "https://guardian.ng/wp-content/uploads/2016/03/PDP.jpg",
      image:
        "https://guardian.ng/wp-content/uploads/2022/06/Atiku-Abubakar-1424x802.jpg",
      party: "People's Democratic Party",
    },
  ]);

  const countdownTimer = () => {
    const timeInterval = setInterval(() => {
      const countdownDateTime = new Date(expiryTime).getTime();
      const currentTime = new Date().getTime();
      const remainingDayTime = countdownDateTime - currentTime;
      const totalDays = Math.floor(remainingDayTime / (1000 * 60 * 60 * 24));
      const totalHours = Math.floor(
        (remainingDayTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const totalMinutes = Math.floor(
        (remainingDayTime % (1000 * 60 * 60)) / (1000 * 60)
      );
      const totalSeconds = Math.floor((remainingDayTime % (1000 * 60)) / 1000);

      const runningCountdownTime = {
        countdownDays: totalDays,
        countdownHours: totalHours,
        countdownMinutes: totalMinutes,
        countdownSeconds: totalSeconds,
      };

      setCountdownTime(runningCountdownTime);

      if (remainingDayTime < 1) {
        clearInterval(timeInterval);
        setExpiryTime(false);
        setCountdownTime({
          countdownDays: 0,
          countdownHours: 0,
          countdownMinutes: 0,
          countdownSeconds: 0,
        });
      }
    }, 1000);
  };

  useEffect(() => {
    countdownTimer();
  });

  return (
    <Wrapper>
      <h1 className="header">Countdown to Election Day</h1>
      <div className="clock">
        <h1 className="clock-day">{`${countdownTime?.countdownDays}Days`}</h1>
        <h1 className="clock-time">{`${countdownTime?.countdownHours}Hrs: ${countdownTime?.countdownMinutes}Mins : ${countdownTime?.countdownSeconds}Secs`}</h1>
      </div>
      <h6 className="cand-header">Top contenders</h6>
      <div className="cand-div">
        {candidates.map((x, index) => (
          <PhotoCard
            key={index}
            name={x.name}
            party={x.party}
            logo={x.logo}
            image={x.image}
          />
        ))}
      </div>
    </Wrapper>
  );
};

export default Home;
