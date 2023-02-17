import { VscDiffAdded } from "react-icons/vsc"
import React, { useState } from "react"
import AddStation from '../feature/AddStation';

function Section() {
    const [showStation, setShowStation] = useState(false);
    return (
        <div className="section">
            <button className="add"
                style={{
                    backgroundColor: '#0a4757',
                    cursor: 'pointer'
            }}
                onClick={() => setShowStation(!showStation)}
            >
                <VscDiffAdded />
                <span>Thêm trạm</span>
            </button>
            {showStation && <AddStation showStation={showStation} setShowStation={setShowStation}/>}
        </div>
    )
}
export default Section