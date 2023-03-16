
import { Component } from "react";
import tools from '../assets/tooldata.json';
import "./ToolsGridStyles.css"

class ToolsGrid extends Component {
    render() {
        return (
            <div id="toolContainer" class="grid-container blog-container"> 
          
                {tools.map((item, idx) => {
                    return (
                        <div key={idx+1} className="tool-card" >
                            <img alt={item.itemdesc} src={`../tools/${item.imgurl}.jpg`}></img>
                            <br />
                            <span>{item.itemdesc}</span><br />
                            <button>Click For Inquiry</button>
                        </div>
                    )
                })}
        </div>
        )
    }
}
export default ToolsGrid;