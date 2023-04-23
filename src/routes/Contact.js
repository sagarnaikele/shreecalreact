import "./ContactStyles.css";
function Contact() {
    return (
        <div>
            {/* <Navbar /> */}
<div className="">
            <h3>Contact Form</h3>
            <div className="container contact-form">
                <div className="content">
                    <div className="left-side">
                        <div className="address details">
                            <i className="fas fa-map-marker-alt"></i>
                            <div className="topic">Address</div>
                            <div className="text-one">Plot No. 97 Shop No. 06 Manish Aparment , Roplekar Hospital
Road,</div>
                            <div className="text-two">Tilak Nagar Chhatrapati Sabhaji Nagar-Maharasthra - 431001 </div>
                        </div>
                        <div className="phone details">
                            <i className="fas fa-phone-alt"></i>
                            <div className="topic">Phone</div>
                            <div className="text-one"> +91-8888986900</div>
                        </div>
                        <div className="email details">
                            <i className="fas fa-envelope"></i>
                            <div className="topic">Email</div>
                            <div className="text-one">shreecalibration.mt@gmail.com</div>
                            <div className="text-two"></div>
                        </div>
                    </div>
                    <div className="right-side">
                        <div className="topic-text">Send us a message</div>
                        <p>you can message us from here. It's our pleasure to help you.</p>
                        <form action="#">
                            <div className="input-box">
                                <input type="text" placeholder="Enter your name" />
                            </div>
                            <div className="input-box">
                                <input type="text" placeholder="Enter your email" />
                            </div>
                            <div>
                                <textarea className="message-box" placeholder="Enter your requirements here.....">
                                </textarea>
                            </div>
                            <div className="button">
                                <input type="button" value="Send Now" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            </div>
        </div>

    )
}
export default Contact;