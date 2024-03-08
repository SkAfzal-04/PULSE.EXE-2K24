import React, { useState, useEffect, useMemo } from "react";
import "./Members.css";
import member1 from "../../members/Sk Mahammad Afzal.jpeg";
import member2 from "../../members/Arup Maity.jpeg";
import member3 from "../../members/Sanchari Pandey.jpg";
import member4 from "../../members/Avik Sen.jpeg";
import member5 from "../../members/Kushal Singha.jpg";
import member6 from "../../members/Dipti Bhowmik.jpeg";
import member7 from "../../members/Tiyasa Saha.jpeg";
import member8 from "../../members/Arijit Karmakar.jpg";
import member9 from "../../members/Ayan Saha.jpg";
import member10 from "../../members/Hridhwesh Maity.jpg";
import member11 from "../../members/Sreejit Chakraborty.jpg";
import member12 from "../../members/Bishnu Bhakat.jpg";
import member13 from "../../members/Sreya Dhar.jpg";
import member14 from "../../members/Swarnendu Sikdar.jpg";
import member15 from "../../members/Diptesh Ghosh.jpg";
import member16 from "../../members/Sinchita Das.jpg";
import member17 from "../../members/Sarthak Mukherjee.jpeg";


const Members = () => {
  const membersArr = useMemo(
    () => [
      { id: 1, name: "Sk Mahammad Afzal", image: member1, whatsappLink: "https://wa.me/+919679186577" },
      { id: 2, name: "Arup Maity", image: member2, whatsappLink: "https://wa.me/+919123927177" },
      { id: 3, name: "Sanchari Pandey", image: member3, whatsappLink: "https://wa.me/+919749815573" },
      { id: 4, name: "Avik Sen", image: member4, whatsappLink: "https://wa.me/+917980727150" },
      { id: 5, name: "Kushal Singha", image: member5, whatsappLink: "https://wa.me/+919339440674" },
      { id: 6, name: "Dipti Bhowmik", image: member6, whatsappLink: "https://wa.me/+919330066202" },
      { id: 7, name: "Tiyasa Saha", image: member7, whatsappLink: "https://wa.me/+919433077890" },
      { id: 8, name: "Arijit Karmakar", image: member8, whatsappLink: "https://wa.me/+919875347630" },
      { id: 9, name: "Ayan Saha", image: member9, whatsappLink: "https://wa.me/+916290107258" },
      { id: 10, name: "Hridhwesh Maity", image: member10, whatsappLink: "https://wa.me/+917688085816" },
      { id: 11, name: "Sreejit Chakraborty", image: member11, whatsappLink: "https://wa.me/+919831526476" },
      { id: 12, name: "Bishnu Bhakat", image: member12, whatsappLink: "https://wa.me/+919330809352" },
      { id: 13, name: "Sreya Dhar", image: member13, whatsappLink: "https://wa.me/+919748375528" },
      { id: 14, name: "Swarnendu Sikdar", image: member14, whatsappLink: "https://wa.me/+916289769353" },
      { id: 15, name: "Diptesh Ghosh", image: member15, whatsappLink: "https://wa.me/+917364949075" },
      { id: 16, name: "Sinchita Das", image: member16, whatsappLink: "https://wa.me/+917003717607" },
      { id: 17, name: "Sarthak Mukherjee", image: member17, whatsappLink: "https://wa.me/+917439499280" },
      
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
      startIndex + 5 < membersArr.length ? startIndex + 5 : membersArr.length;
    setVisibleMembers([
      ...membersArr.slice(startIndex, endIndex),
      ...(endIndex === membersArr.length
        ? membersArr.slice(0, 5 - (membersArr.length - startIndex))
        : []),
    ]);
  }, [startIndex, membersArr]);

  return (
    <div className="agenda section" id="agenda">
      <div className="agenda-content container">
        <div className="section-header">
          <div className="sub-title">ORGANIZERS</div>
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

export default Members;
