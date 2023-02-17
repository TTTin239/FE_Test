import { Data } from '../data';
import CreateProject from '../feature/CreateProject';
import React, { useState } from 'react';
function Slider() {
  const [showProject, setShowProject] = useState(false)
  return (
    <div className='Slider'>
      <div className="Info">
        {Data.map((data) => (
          <div>
            <table>
              <tr>
                <th>{data.id}</th>
              </tr>
              <tr><th colSpan={2} style={{borderBottom: '2px dashed'}}></th></tr>
              <tr>
                <td>Loại Ăng ten</td>
                <td>{data.name}</td>
              </tr>
              <tr>
                <td>Số trạm</td>
                <td>{data.number}</td>
              </tr>
              <tr>
                <td>Được tạo bởi</td>
                <td>{data.author}</td>
              </tr>
              <tr>
                <td>Ngày tạo</td>
                <td>{data.date}</td>
              </tr>
            </table>
          </div>
        ))}
      </div>
      <button className='ButtonAdd' onClick={() => setShowProject(!showProject)}>
        Tạo dự án
      </button>
      {showProject && <CreateProject showProject={showProject} setShowProject={setShowProject}/>}
    </div>
  )
}

export default Slider