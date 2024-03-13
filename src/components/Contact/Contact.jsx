import React from "react";
import "./Contact.css";
const Contact = () => {
    return (
        <div className="contact section" id="contact">
            <div className="contact-content container">
                <div className="section-header">
                    <div className="sub-title">CONTACT US</div>
                    <div className="title">Have a question?</div>
                </div>
                <div className="contact-text">
                    <div>
                        If you have any further query contact our advisories, feel free to contact us.
                    </div>
                    <div>
                        <span className="contact-heading">
                            Student In-Charges
                        </span>
                        <div>Sreya Dhar: +91 9748375528</div>
                        <div>Diptesh Ghosh: +91 7364949075</div>
                        <div>Tiyasa Saha: +91 9433077890</div>
                    </div>
                    <div>
                        <span className="contact-heading">
                            
                        </span>
                        <div>Jayanti Mahato: +91 9732526103</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
