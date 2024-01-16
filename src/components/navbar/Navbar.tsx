import "./navbar.scss"
    ;


const Navbar = () => {
    return (
        <div className="navbar">
            <div className="title">
                <span className="">CJ's Dashboard</span>
            </div>
            <div className="icons">
                <img src="/search.svg" alt="" />
                <img src="/app.svg" alt="" />
                <img src="/expand.svg" alt="" />

                <div className="notification">
                    <img src="/notifications.svg" alt="" />
                    <span className="span"> 1 </span>
                </div>
                <div className="user">
                    <img
                        src="/customer2.png" alt="" />
                </div>
                <img src="/settings.svg" alt="" />
            </div>
        </div>
    )
}

export default Navbar