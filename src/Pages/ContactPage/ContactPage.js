import React from 'react';
import './ContactPage.css'

const ContactPage = () => {
    return (
        <div className="contact-container py-3">
            <div className="container contact-form py-5">
                <div className="contact-image">
                    <img src="https://image.ibb.co/kUagtU/rocket_contact.png" alt="rocket_contact" />
                </div>
                {/* Contact Page Form */}
                <form method="post">
                    <h3>Drop Us a Message</h3>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <input type="text" name="txtName" className="form-control" placeholder="Your Name *" />
                            </div>
                            <div className="form-group">
                                <input type="text" name="txtEmail" className="form-control mt-2" placeholder="Your Email *" />
                            </div>
                            <div className="form-group">
                                <input type="text" name="txtPhone" className="form-control mt-2" placeholder="Your Phone Number *" />
                            </div>
                            <div className="form-group">
                                <input type="submit" name="btnSubmit" className="btnContact mt-2" value="Send Message" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <textarea name="txtMsg" className="form-control" placeholder="Your Message *" style={{ width: "100 %", height: "150px" }}></textarea>
                            </div>
                        </div>
                    </div>
                </form>
            </div >
        </div >
    );
};

export default ContactPage;