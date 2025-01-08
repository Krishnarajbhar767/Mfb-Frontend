import React from 'react'

function Admin_Active_Student_Table({studentData,dataShowCount}) {
  return (
    <table className="w-full" id='activeStudentTable'>
              {/* Table header */}
              <tr
                className={`  sticky -top-[1.25rem]  bg-gray-300 text-gray-900 uppercase`}
              >
                <th className="  p-3 border-t border-solid border-black font-semibold">
                  Name
                </th>
                <th className="  p-3 border-t border-solid border-black font-semibold">
                  Email
                </th>
                <th className="  p-3 border-t border-solid border-black font-semibold">
                  Phone
                </th>
                <th className="  p-3 border-t border-solid border-black font-semibold">
                  Course
                </th>
                <th className="  p-3 border-t border-solid border-black font-semibold">
                  Enrollment Date
                </th>
                <th className="  p-3 border-t border-solid border-black font-semibold">
                  Status
                </th>
              </tr>

              {/* Render student data dynamically */}
              {studentData?.map((item, idx) => {
                if (idx < dataShowCount) {
                  // for show only limited number of student data...
                  return (
                    <tr className="text-xs  text-[#2C3338] hover:bg-gray-300 transition-all duration-200 cursor-pointer capitalize ">
                      <th className="  p-3 ">{item.name}</th>
                      <th className="  p-3  " transition-all duration-200>
                        {item.email}
                      </th>
                      <th className="  p-3  ">{item.phone}</th>
                      <th className="   p-3 ">{item.course}</th>
                      <th className="   p-3 ">{item.enrollmentDate}</th>
                      <th className="px-auto">
                        {/* Status indicator for online/offline */}
                        {item.status[0] === "offline" ? (
                          <div
                            className="text-[1rem] text-green-500"
                            style={{
                              textShadow: "0 0 4px #00ff00, 0 0 6px #00ff00",
                            }}
                          >
                            🟢
                          </div>
                        ) : (
                          <div
                            className="text-[1rem] text-red-500"
                            style={{
                              textShadow: "0 0 4px #ff0000, 0 0 6px #ff0000",
                            }}
                          >
                            🔴
                          </div>
                        )}
                      </th>
                    </tr>
                  );
                }
              })}
            </table>
  )
}

export default Admin_Active_Student_Table