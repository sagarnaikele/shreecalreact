import Navbar from "../components/Navbar";
import HeroPanel from "../components/HeroPanel";

function Home() {
    return (
        <div>
            <Navbar />
            <HeroPanel
            clsName="hero"
            title="Shree Calibration"
            text="Measurement and Testing services, Trust on our quality"
            buttonText="Checkout our services"
            btnClass="show"
            url="/Service">
            </HeroPanel>
        </div>
    )
}
export default Home;