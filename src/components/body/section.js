import { VscDiffAdded } from "react-icons/vsc"
import React, { useState } from "react"
import AddStation from '../feature/AddStation';

function Section() {
    const [showStation, setShowStation] = useState(false);
    return (
        <div className="section" style={{padding: "12px 0"}}>
            <button className="add"
                style={{
                    backgroundColor: '#0a4757',
                    cursor: 'pointer',
                    color: 'white',
                    marginTop: '2px'
            }}
                onClick={() => setShowStation(!showStation)}
            >
                <VscDiffAdded />
                <span style={{marginLeft: '5px'}}>Thêm trạm</span>
            </button>
            {showStation && <AddStation showStation={showStation} setShowStation={setShowStation}/>}
        </div>
    )
}
export default Section