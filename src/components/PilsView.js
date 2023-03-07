
import { Component } from "react";
import tools from '../assets/tooldata.json';
import "./PilsViewStyles.css"

class PilsView extends Component {
    render() {
        return (
            <div id="toolContainer" class="grid-container"> 
          
                {tools.map((item, idx) => {
                    return (
                        <div key={idx}>
                            <img alt={item.itemdesc} src={`../tools/${idx}.jpg`}></img>
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
export default PilsView;