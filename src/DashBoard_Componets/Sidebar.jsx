import React from 'react';
import { NavLink } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

function Sidebar({ sidebarList }) {

    return (
        <div className="w-full flex flex-col gap-5 ">

            <ul className="w-full flex flex-col gap-2 h-[100%]  pb-20 pt-5 px-1">
                {
                    sidebarList && sidebarList.map((item, i) => (
                        <li
                            className=" flex flex-col gap-2 items-center hover:bg-gray-800 hover:text-white text-gray-800 bg  bg-white rounded-xl cursor-pointer"
                        >
                            <NavLink to={item.route} className="w-full h-full px-5 py-2" >
                                {/* <span>{item.route}</span> */}
                                <div className=" rounded-full w-fit h-fit p-2 bg-gray-600">
                                    <span className="text-[25px] text-white">{item.icon}</span>
                                </div>
                                <span className="text-[0.8rem] uppercase font-semibold  ">{item.lable}</span>
                            </NavLink>
                        </li>
                    ))
                }

            </ul>
        </div>
    )
}

export default Sidebar;