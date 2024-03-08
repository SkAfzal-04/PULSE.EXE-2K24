import React from "react";
import "./Countdown.css";

const Countdown = ({ timerDays, timerHours, timerMins, timerSecs }) => {
    return (
        <div className="timer-container">
            <div className="timer">
                <section className="time-card">
                    <p className="time-card-count">{timerDays}</p>
                    <p className="time-card-name">Days</p>
                </section>
                <span>:</span>
                <section className="time-card">
                    <p className="time-card-count">{timerHours}</p>
                    <p className="time-card-name">Hours</p>
                </section>
                <span>:</span>
                <section className="time-card">
                    <p className="time-card-count">{timerMins}</p>
                    <p className="time-card-name">Mins</p>
                </section>
                <span>:</span>
                <section className="time-card">
                    <p className="time-card-count">{timerSecs}</p>
                    <p className="time-card-name">Secs</p>
                </section>
            </div>
        </div>
    );
};

Countdown.defaultProps = {
    timerDays: 10,
    timerHours: 10,
    timerMins: 10,
    timerSecs: 10,
};

export default Countdown;



// import React, { useState, useEffect } from "react";
// import "./Countdown.css";

// const Countdown = () => {
//     const targetDate = new Date("April 10, 2024 00:00:00").getTime();

//     const calculateTimeLeft = () => {
//         const now = new Date().getTime();
//         const difference = targetDate - now;

//         if (difference > 0) {
//             const days = Math.floor(difference / (1000 * 60 * 60 * 24));
//             const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//             const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
//             const seconds = Math.floor((difference % (1000 * 60)) / 1000);

//             return {
//                 timerDays: days,
//                 timerHours: hours,
//                 timerMins: minutes,
//                 timerSecs: seconds,
//             };
//         } else {
//             // Countdown has expired
//             return {
//                 timerDays: 0,
//                 timerHours: 0,
//                 timerMins: 0,
//                 timerSecs: 0,
//             };
//         }
//     };

//     const [timeLeft, setTimeLeft] = useState(calculateTimeLeft);

//     useEffect(() => {
//         const timer = setInterval(() => {
//             setTimeLeft(calculateTimeLeft);
//         }, 1000);

//         // Cleanup the interval when the component is unmounted
//         return () => clearInterval(timer);
//     }, []);

//     return (
//         <div className="timer-container">
//             <div className="timer">
//                 <section className="time-card">
//                     <p className="time-card-count">{timeLeft.timerDays}</p>
//                     <p className="time-card-name">Days</p>
//                 </section>
//                 <span>:</span>
//                 <section className="time-card">
//                     <p className="time-card-count">{timeLeft.timerHours}</p>
//                     <p className="time-card-name">Hours</p>
//                 </section>
//                 <span>:</span>
//                 <section className="time-card">
//                     <p className="time-card-count">{timeLeft.timerMins}</p>
//                     <p className="time-card-name">Mins</p>
//                 </section>
//                 <span>:</span>
//                 <section className="time-card">
//                     <p className="time-card-count">{timeLeft.timerSecs}</p>
//                     <p className="time-card-name">Secs</p>
//                 </section>
//             </div>
//         </div>
//     );
// };

// export default Countdown;

