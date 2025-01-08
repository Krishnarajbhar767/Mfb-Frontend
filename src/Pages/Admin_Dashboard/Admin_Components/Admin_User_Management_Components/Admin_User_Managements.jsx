import React, { useState } from 'react'
import IconBtn from '../../../../Common_Components/IconBtn';
import { FaPlus } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import Admin_Student_Course_Purchase_Data_Table from './Admin_Student_Course_Purchase_Data_Table';
import { useEffect } from 'react';
import { studentPurchaseDataSample } from '../../../../Sampple_Data/activeStudent';
function Admin_User_Managements() {
    const [studentPurchaseData,setStudentPurchaseData] = useState([]);

    useEffect(() => {
        setStudentPurchaseData((prev)=>studentPurchaseDataSample);
    }, [])
    
    return (
        <div 
            className="w-full h-full overflow-scroll scroller rounded-lg flex flex-col font-semibold "
        >
          <div className='h-fit  flex items-center justify-between px-5 py-2 rounded-lg'>
            <div className='flex gap-10'>
            <div className='flex gap-2 text-sm capitalize text-gray-800 items-center'>
                <p>show</p>
                <p>{10}</p>
            </div>
            <div className='border-2 border-gray-500 px-5 py-1 h-fit flex items-center  gap-4 rounded-lg '>
                <button><IoSearch/></button>
                <input type="text" placeholder='Search' className='bg-transparent outline-none '  />
            </div>
            </div>
            <div>
                <IconBtn color="#0047AB">
                    <FaPlus className='text-sm font-light text-gray-50'/> add student
                </IconBtn>
            </div>
          </div>
          
     <div className='p-5'>
        <Admin_Student_Course_Purchase_Data_Table tableData={studentPurchaseData} setTableData={setStudentPurchaseData}/>
     </div>
            
        </div>
    )
}

export default Admin_User_Managements;