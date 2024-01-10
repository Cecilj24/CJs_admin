import "./navbar.scss"
import { CiSearch, CiSettings } from "react-icons/ci"
import { FaExpand } from "react-icons/fa";
import { IoIosAddCircleOutline, IoMdNotifications } from "react-icons/io";


const Navbar = () => {
    return (
        <div className="navbar">
            <div className="title">
                <span className="">CJ's Dashboard</span>
            </div>
            <div className="icons">
                <div className="icon"><CiSearch size='2rem' /></div>
                <div className="icon"><FaExpand size='2rem' /></div>
                <div className="icon"><IoIosAddCircleOutline size='2rem' /></div>
                <div className="notification">
                    <IoMdNotifications size='2rem' />
                    <span className="span"> 1 </span>
                </div>
                <div className="user">
                    <img
                        src="/customer2.png" alt="" />
                </div>
                <div className="icon"><CiSettings size="2rem" /></div>
            </div>
        </div>
    )
}

export default Navbar