import React, { useState, useEffect, useMemo } from "react";
import "./Advisior.css";
import member1 from "../../members/Sanjana Shaw.jpg";
import member2 from "../../members/Sourav Ghosh.jpg";
import member3 from "../../members/Shounak Sarkar.jpeg";
import member4 from "../../members/Preksha Rai.jpg";
import member5 from "../../members/Nandini Mishra.jpg";
import member6 from "../../members/Chayan Gupta.jpg";
import member7 from "../../members/Semanti.JPG";
import member8 from "../../members/Avantika Roy.jpg";
import member9 from "../../members/Arijit Saha.jpeg";

const Advisior = () => {
  const membersArr = useMemo(
    () => [
      { id: 1, name: "Sanjana Shaw", image: member1, whatsappLink: "https://wa.me/+918240934380" },
      { id: 2, name: "Sourav Ghosh", image: member2, whatsappLink: "https://wa.me/+919123737575" },
      { id: 3, name: "Shounak Sarkar", image: member3, whatsappLink: "https://wa.me/+918697941058" },
      { id: 4, name: "Preksha Rai", image: member4, whatsappLink: "https://wa.me/+917003460684" },
      { id: 5, name: "Nandini Mishra", image: member5, whatsappLink: "https://wa.me/+917044341668" },
      { id: 6, name: "Chayan Gupta", image: member6, whatsappLink: "https://wa.me/+919330066202" },
      { id: 7, name: "Semanti Ghosh ", image: member7, whatsappLink: "https://wa.me/+919748662318" },
      { id: 8, name: "Avantika Roy", image: member8, whatsappLink: "https://wa.me/+916290755133 " },
      { id: 9, name: "Arijit Saha", image: member9, whatsappLink: "https://wa.me/+916295724564" },      
    ],
    []
  );

  const [startIndex, setStartIndex] = useState(0);
  const [visibleMembers, setVisibleMembers] = useState([]);

  useEffect(() => {
    let interval = setInterval(() => {
      setStartIndex((prevIndex) =>
        prevIndex === membersArr.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000);
    return () => clearInterval(interval);
  }, [membersArr]);

  useEffect(() => {
    const endIndex =
      startIndex + 3 < membersArr.length ? startIndex + 3 : membersArr.length;
    setVisibleMembers([
      ...membersArr.slice(startIndex, endIndex),
      ...(endIndex === membersArr.length
        ? membersArr.slice(0, 3 - (membersArr.length - startIndex))
        : []),
    ]);
  }, [startIndex, membersArr]);

  return (
    <div className="agenda section" id="agenda">
      <div className="agenda-content container">
        <div className="section-header">
          <div className="sub-title">ADVISIORS</div>
          <div className="title">Pusle.exe 2K24</div>
        </div>
      <div className="members-container">
          <div className="members-wrapper">
            {visibleMembers.map((member) => (
              <div className="members-slide" key={member.id}>
                <img src={member.image} alt={member.name} />
                <p>{member.name}</p>
                <div className="cta-buttons">
                    <div className="tertiary-btn">
                        <a href={member.whatsappLink}>WhatsApp &gt;</a>
                </div>
              </div>
            </div>
            ))}
          </div>
        </div>
      </div>
    </div>

  );
};

export default Advisior;
