import React from 'react';
import { FaBars } from "react-icons/fa";
const Navbar = () => {
    return (
        <div>
            <label htmlFor="my-drawer-2" className="btn bg-[#1E2772] drawer-button lg:hidden mx-5 my-2"><FaBars /></label>
        </div>
    );
};

export default Navbar;