import React, { useState } from "react";
import { FiEdit } from "react-icons/fi";
import { MdDeleteForever } from "react-icons/md";
import Admin_Edit_User_Purchase_Modal from "./Admin_Edit_User_Purchase_Modal";

function Admin_Student_Course_Purchase_Data_Table({ tableData, setTableData }) {
  const tableHeadTitle = [
    "Tracking Id",
    "Customer Name",
    "Email",
    "Amount",
    "Payment Mode",
    "Status",
    "Action",
  ];
  const [editTableData,setEditTableData] = useState(null); 
  const handleEdit = async(tableData)=>{
        setEditTableData(tableData);
  }
  return (
    <div>
      <table>
        <tr className="sticky top-0 bg-white border-none ">
          {tableHeadTitle.map((title) => (
            <th
              style={{ border: "0px" }}
              className=" p-3 capitalize text-gray-800 font-semibold tracking-tighter"
            >
              {title}
            </th>
          ))}
        </tr>

        {tableData.map((item, idx) => {
          return (
            <tr
              key={idx}
              className={`${
                idx % 2 == 0 ? "bg-gray-300" : ""
              } capitalize text-sm font-medium text-gray-900`}
            >
              <td className="py-5 ">{item.trackingId}</td>
              <td className="py-5 ">{item.customerName}</td>
              <td className="py-5 ">{item.email}</td>
              <td className="py-5 ">{item.amount}</td>
              <td className="py-5 ">{item.paymentMode}</td>
              <td className="py-  "><p className={`px-2 py-2  rounded-full ${item.status.toLowerCase() === "success" && "bg-green-200 text-green-800"} ${item.status.toLowerCase() === "failed" && "bg-red-300 text-red-600"} ${item.status.toLowerCase() === "pending" && "bg-yellow-100 text-yellow-400"} `}>{item.status}</p></td>
              <td className="space-x-4 py-5 ">
                <button className="text-blue-600 text-base"
                onClick={(e)=>handleEdit(item)}>
                  <FiEdit />
                </button>
                <button className="text-red-500 text-base">
                  <MdDeleteForever />
                </button>
              </td>
            </tr>
          );
        })}
      </table>
      {
        editTableData && <Admin_Edit_User_Purchase_Modal tableData={editTableData} setTableData={setEditTableData}/>
      }
    </div>

  );
}

export default Admin_Student_Course_Purchase_Data_Table;
