import "./HeroPanelStyles.css";
import { Link } from "react-router-dom";
function HeroPanel(props) {
    return (
        <>
            <div className={props.clsName}>
                <div className="heroImg">
            {/* <img alt="HerpImg" src='../home-bg.jpg' /> */}
            </div>
            {/* <img alt="HerpImg" src="https://images.freeimages.com/vhq/images/previews/43c/leather-stamping-logo-mockup-2-397107.jpg" /> */}
                <div className="hero-text">
                    <h1>{props.title}</h1>
                    <p>{props.text}</p>             I
                    <Link to={props.url} className=
                        {props.btnClass}>
                        {props.buttonText}
                    </Link>
                </div>
            </div>
        </>
    );
}
export default HeroPanel;


