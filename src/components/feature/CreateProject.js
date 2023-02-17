import React from 'react'

function CreateProject( {showProject, setShowProject}) {
  return (
    <div className="Project">
        <table>
            <tr>
                <th colSpan="2" style={{borderBottom: '2px dashed'}}>TẠO DỰ ÁN</th>
            </tr>
            <tr>
                <th>Tên dự án</th>
                <th>
                    <input type="text"/>
                </th>
            </tr>
            <tr>
                <th>Tỉnh</th>
                <th>
                    <select>
                        <option value=""></option>
                        <option value=""></option>
                        <option value=""></option>
                    </select>
                </th>
            </tr>
            <tr>
                <th>Mô tả (tùy chọn)</th>
                <th>
                    <textarea rows="4" cols="50"></textarea>
                </th>
            </tr>
        </table>
        <div className='Project-footer'>
            <button onClick={() => setShowProject(!showProject)}>Hủy</button>
            <button>Tạo</button>
        </div>
    </div>
  )
}

export default CreateProject