import "./AboutUsStyles.css";
import { Link } from "react-router-dom";

function AboutUs() {
    return (
        <div>
            {/* <Navbar /> */}
            <div className="about">
                <div>
                    <img alt="HerpImg" className="pic" src='../about-us.jpg' />
                </div>
                <div className="text">
                    <h2>About Us</h2>
                    <div>
                        <p>
                            We "Shree Calibration Measure and Services" from 2023. We are providing an excellent
                            quality of calibration and repairing services and our setup is situated in Chhatrapati
                            Sambhajinagar , Maharashtra, India. We majorly services the customers from
                            Sambhajinagar, Pune and Jalan.
                        </p>
                    </div>
                    <br />
                    <p>
                        We are rendering these services with the help of our talented professionals with following
                        set industry norms and standards. Our provided services are highly admired and
                        appreciated among our clients for their client specific resolution. Apart from this, we are
                        offering these services at leading market price within the committed span of time.
                    </p>
                    <br />
                    <p>
                        We have attained a huge number of clients owing to our quality assured services.
                        We mensure to our clients that provided services are effective and give accurate resolution to our
                        reputed customers. We are the best option available in the market to avail these offered
                        services. We work hard to offer clients a supreme quality service within the limited time
                        frame. Furthermore, we take the suggestions and feedback of our valued customers and
                        conceptualise these to meet their demands.
                    </p>
                    <br />
                    <p>
                        Under the assistance of our mentor Mr. Vallabh Sawale, we have been able to achieve this
                        remarkable position in the market. His vast knowledge of this domain, enable us to have a
                        huge client base across the nation NABL calibration and repairing services for precision
                        measuring instruments in the field of mechanical, thermal. We also deal in sales of old and
                        new instruments.

                    </p>
                    <div className="data">
                        <Link to="/Services" className="hire">Checkout Our Services </Link>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default AboutUs;