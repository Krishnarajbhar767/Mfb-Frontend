import React from 'react';
import { Route, Outlet } from "react-router-dom";
import Navbar from '../../DashBoard_Componets/Navbar';
import { IoBook } from "react-icons/io5";
import { RiDashboardHorizontalFill } from "react-icons/ri";
import { IoCalendarOutline } from "react-icons/io5";
import { BiSupport } from "react-icons/bi";
import { GiDiscussion } from "react-icons/gi";
import { IoSettingsOutline } from "react-icons/io5";
import { SiGoogleclassroom } from "react-icons/si";
import { BsGraphUpArrow } from "react-icons/bs";
import { FaUserGraduate } from "react-icons/fa";
import { GrDocumentStore } from "react-icons/gr";
import { MdPayments } from "react-icons/md";
import Sidebar from '../../DashBoard_Componets/Sidebar';


function AdminDashboard() {
  

  const sidebarList = [
    {
      "id": 1,
      "lable": "Dashboard",
      "icon": <RiDashboardHorizontalFill />,
      "route": "/admin/dashboard"
    },
    {
      "id": 3,
      "lable": "User Management",
      "icon": <FaUserGraduate />,
      "route": "/admin/user_management"
    },
    {
      "id": 2,
      "lable": "Course Management",
      "icon": <IoBook />,
      "route": "/admin/course_management"
    },
    {
      "id": 4,
      "lable": "Content Management",
      "icon": <GrDocumentStore />,
      "route": "/admin/content_management"
    },
    {
      "id": 5,
      "lable": "Reports & Analytics",
      "icon": <BsGraphUpArrow />,
      "route": "/admin/repost_&_analytics"
    },
    {
      "id": 6,
      "lable": "Payment Management",
      "icon": <MdPayments />,
      "route": "/admin/payment_management"
    }, 
    {
      "id": 6,
      "lable": "Support Management",
      "icon": <BiSupport />,
      "route": "/admin/support_management"
    },
    {
      "id": 6,
      "lable": "Settings",
      "icon": <IoSettingsOutline />,
      "route": "/admin/settings"
    }
  ]


  return (
    <div className="flex flex-col h-screen ">
      {/* our Navbar  */}
      <Navbar />

      <div className="flex flex-row h-screen ">
        <div className=" h-full lg:w-[250px] border-r-[1px] border-gray-500 text-black px-2 pb-20 pt-4">

          <h1 className="font-semibold cursor-pointer px-5 bg-gray-300 text-gray-700 py-2 rounded-lg">
            Welcome to Media Fleetblue Course Platform
          </h1>

          <div className="w-full px-2 h-full overflow-scroll scroller ">
            <Sidebar sidebarList={sidebarList} />
          </div>
        </div>

        <div className="flex flex-col flex-1 h-screen">
          <div className="w-full px-5 pt-2 h-[88vh] overflow-scroll scroller flex flex-col gap-3 ">
            {/* <h1
              className="text-1xl font-semibold border-b-2 border-blue-500 mb-5 text-blue-600 cursor-pointer uppercase  "
            >
              Welcome to Media Fleetblue Course Platform - Teacher
            </h1> */}

            <Outlet />

            {/* <footer className="w-full bg-gray-800 text-white text-center py-1 px-10  rounded-lg ">
              Footer - Media Fleetblue 
            </footer> */}
          </div>


        </div>
      </div>

    </div>
  )
}

export default AdminDashboard;