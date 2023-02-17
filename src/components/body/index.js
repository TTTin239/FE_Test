import DataTable from "./Table";
import Section from "./section";
import Slider from "./slider";
import "./index.css"

function Body() {
    return (
        <div className="Body">
            <Slider/>
            <div className="Table">
                <Section/>
                <DataTable/>
            </div>
        </div>
    )
}

export default Body