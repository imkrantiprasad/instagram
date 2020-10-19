import React from 'react'

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar__first">
                <div className="navbar__first-logo">
                    <img src="/images/insta-logo.png" alt=""/>
                </div>
            </div>
            <div className="navbar__middle">
                <div className="navbar__middle-search">
                    <input type="text" className="navbar__search" placeholder="Search" />
                </div>
            </div>
            <div className="navbar__last">

            </div>
        </div>
    )
}

export default Navbar;
