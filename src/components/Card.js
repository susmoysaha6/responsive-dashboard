import React from 'react';
import { FaUsers } from 'react-icons/fa';

const Card = (props) => {
    console.log(props);
    return (
        <div>
            <div className="card bg-white ">
                <div className="card-body">
                    <div className='flex items-center'>

                        <FaUsers />
                        <p className='mx-2 text-gray-400'>{props?.name}</p>
                    </div>
                    <div className='flex justify-between'>

                        <h2 className="card-title">{props?.number}</h2>
                        <button className="btn btn-sm bg-[#1E2772]">View All</button>
                    </div>
                    <div className="avatar-group -space-x-6">
                        <div className="avatar">
                            <div className="w-12">
                                <img src="https://placeimg.com/192/192/people" alt="" />
                            </div>
                        </div>
                        <div className="avatar">
                            <div className="w-12">
                                <img src="https://placeimg.com/192/192/people" alt="" />
                            </div>
                        </div>
                        <div className="avatar">
                            <div className="w-12">
                                <img src="https://placeimg.com/192/192/people" alt="" />
                            </div>
                        </div>
                        <div className="avatar">
                            <div className="w-12">
                                <img src="https://placeimg.com/192/192/people" alt="" />
                            </div>
                        </div>
                        <div className="avatar">
                            <div className="w-12">
                                <img src="https://placeimg.com/192/192/people" alt="" />
                            </div>
                        </div>
                        <div className="avatar placeholder">
                            <div className="w-12 bg-neutral-focus text-neutral-content">
                                <span>+</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;