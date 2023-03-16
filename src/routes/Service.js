import Navbar from "../components/Navbar";
import ToolsGrid from "../components/ToolsGrid";
import "./ServiceStyles.css";
function Service() {
    return (
        <>
        <div className="scontainer"></div>
            <div><Navbar /><br/></div>
            <div className="toolsSection"> <ToolsGrid/></div>
    
        </>
    )
}
export default Service;