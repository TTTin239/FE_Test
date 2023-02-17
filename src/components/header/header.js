import './header.css'
import flag from './vietnam.png'

function Navbar() {
    return (
        <>
            <div className="header">
                <div className="header-main">
                    <div className="header-main__flag">
                        <img src={flag} alt="" className='flag' />
                        <span className='languages'>VI</span>
                    </div>

                    <div className="header-main__account">
                        <div className="header-main__admin">
                            <span>trantrungtin@gmail.com</span>
                            <span className='admin'>Quản Trị Viên</span>
                        </div>
                        <div className="header-main__avatar">
                            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSZyFRn8H84-l_MBGZHOvfKGGX6zAcr8aqew&usqp=CAU' alt="" className='avatar' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Navbar;