import React from 'react'

function CreateProject( {showProject, setShowProject}) {
  return (
    <div className="Project">
        <table>
            <tr>
                <th colSpan="2" style={{borderBottom: '2px dashed'}}>TẠO DỰ ÁN</th>
            </tr>
            <tr>
                <th className="Project-text">Tên dự án</th>
                <th className='Project-row'>
                    <input type="text"/>
                </th>
            </tr>
            <tr>
                <th className="Project-text">Tỉnh</th>
                <th className='Project-row'>
                    <select>
                        <option value=""></option>
                        <option value=""></option>
                        <option value=""></option>
                    </select>
                </th>
            </tr>
            <tr>
                <th className="Project-text">Mô tả (tùy chọn)</th>
                <th>
                    <textarea rows="4" cols="30"></textarea>
                </th>
            </tr>
        </table>
        <div className='Project-footer'>
            <button  className='footer-btn' onClick={() => setShowProject(!showProject)}>Hủy</button>
            <button className='footer-btn'>Tạo</button>
        </div>
    </div>
  )
}

export default CreateProject