import React, { useState } from 'react';
import { FaBars, FaSistrix } from 'react-icons/fa';
import { SlCalender } from "react-icons/sl";
import { IoIosArrowDown, IoIosArrowForward, IoMdNotificationsOutline } from "react-icons/io";
import { RiProfileLine } from "react-icons/ri";
import { AiFillSetting } from "react-icons/ai";
import { BsRecordFill } from "react-icons/bs";
import { MdOutlineLogout } from "react-icons/md";
import { Link, Outlet } from 'react-router-dom';
import '../styles/Sidebar.css'
const Sidebar = () => {
    const [open, setOpen] = useState(false)

    const handleClick = () => {
        setOpen(!open)
    }

    return (
        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />

            <div className="drawer-content">
                <div className='flex justify-around'>
                    <label htmlFor="my-drawer-2" className="btn btn-circle bg-[#1E2772] drawer-button lg:hidden mx-5 my-2"><FaBars /></label>
                    <div className="wrapper w-1/2 input input-bordered">
                        <div className="icon"><FaSistrix /> </div>
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
            <div className="drawer-side ">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 bg-[#1E2772] text-white  ">
                    <h1 className='text-3xl text-center my-10'>NextGen IT</h1>
                    <li className='mx-8'><Link to='/'> <RiProfileLine /> Dashboard</Link></li>
                    <li className='mx-8'><Link to="/"><RiProfileLine /> Attendance</Link></li>
                    <li className='mx-8'><Link to="/"><RiProfileLine /> Employees</Link></li>
                    <li className='mx-8'><Link to="/"><RiProfileLine /> Leaves</Link></li>
                    <li className='mx-8'><Link to="/"><RiProfileLine /> Expense</Link></li>
                    <li className='mx-8'><Link to="/"><RiProfileLine /> Notice</Link></li>
                    <li className='mx-8'><Link to="/"><RiProfileLine /> Departments</Link></li>
                    <li onClick={handleClick}>

                        <Link>
                            {
                                open ?
                                    <IoIosArrowDown className='ml-0' />
                                    :
                                    <IoIosArrowForward />
                            }
                            <AiFillSetting />
                            <label htmlFor="">
                                Settings
                            </label>
                        </Link>
                    </li>
                    <ul className={`${!open ? "hidden" : "block"} flex items-center mx-10`}>
                        <li>
                            <Link>
                                <BsRecordFill /> Approval
                            </Link>
                            <Link>
                                <BsRecordFill /> Leave
                            </Link>
                            <Link>
                                <BsRecordFill /> Office Setting
                            </Link>
                            <Link>
                                <BsRecordFill /> My Subscriptions
                            </Link>
                        </li>
                    </ul>
                    <li className='mx-8'>
                        <Link><MdOutlineLogout /> Logout</Link>
                    </li>
                </ul>

            </div>
        </div>
    );
};

export default Sidebar;