import React, { useState } from 'react'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { FiCheckCircle } from 'react-icons/fi'
import './AddStation.css'

function AddStation({ showStation, setShowStation }) {
    return (
        <div className='Station'>
            <div className='Station-Header'>
                <h4>Thêm trạm mới</h4>
                <AiOutlineCloseCircle className='Close-btn' onClick={() => setShowStation(!showStation)} />
            </div>
            <div className='Station-body'>
                <table style={{ textAlign: 'center', margin: '0 auto' }}>
                    <tr>
                        <th>Tên trạm</th>
                        <th>
                            <input type="text" placeholder="Trạm #101" />
                        </th>
                    </tr>
                    <tr>
                        <th>Quận/Huyện</th>
                        <th>
                            <select style={{ width: '10.5rem' }}>
                                <option value=""></option>
                                <option value=""></option>
                                <option value=""></option>
                            </select>
                        </th>
                    </tr>
                    <tr>
                        <th>Tải lên</th>
                        {/* <th>
                        <input type='text' placeholder='0 tập tin đã chọn'/>
                    </th> */}
                        <th>
                            <input type='file' style={{ marginLeft: '80px' }} />
                        </th>
                    </tr>
                </table>
                <div className='Station-footer'>
                    <button className='Close' onClick={() => setShowStation(!showStation)}>
                        <AiOutlineCloseCircle /> Hủy
                    </button>
                    <button className='Add'>
                        <FiCheckCircle /> Thêm trạm
                    </button>
                </div>
            </div>
        </div>
    )
}

export default AddStation