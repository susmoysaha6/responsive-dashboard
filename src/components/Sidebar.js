import React from 'react';
import { FaSistrix } from 'react-icons/fa';
import { SlCalender } from "react-icons/sl";
import { IoMdNotificationsOutline } from "react-icons/io";
import { Link, Outlet } from 'react-router-dom';

import '../styles/Sidebar.css'
const Sidebar = () => {
    return (
        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />

            <div className="drawer-content">
                <div className='flex justify-around'>

                    <div class="wrapper w-1/2 input input-bordered">
                        <div class="icon"><FaSistrix /> </div>
                        <input type="text" placeholder="SEARCH" className="w-full h-full pl-2 outline-0" />
                    </div>
                    <div className=''>
                        <div className="avatar-group flex items-center">
                            <div className="avatar">

                                <SlCalender className='mx-5' />
                                <IoMdNotificationsOutline className='mr-5' />
                            </div>
                            <div className="avatar">
                                <div className="w-12">
                                    <img src="https://placeimg.com/192/192/people" alt='' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Outlet />
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80  bg-[#1E2772] text-white ">

                    <li><Link to='/'>Sidebar Item 1</Link></li>
                    <li><Link to="/">Sidebar Item 2</Link></li>
                </ul>

            </div>
        </div>
    );
};

export default Sidebar;