import "./HeroPanelStyles.css";
function HeroPanel(props) {
    return (
        <>
            <div className={props.clsName}>
            <img alt="HerpImg" src='../home-bg.jpg' />
            {/* <img alt="HerpImg" src="https://images.freeimages.com/vhq/images/previews/43c/leather-stamping-logo-mockup-2-397107.jpg" /> */}
                <div className="hero-text">
                    <h1>{props.title}</h1>
                    <p>{props.text}</p>             I
                    <a href={props.url} className=
                        {props.btnClass}>
                        {props.buttonText}
                    </a>
                </div>
            </div>
        </>
    );
}
export default HeroPanel;


