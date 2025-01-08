// Importing necessary dependencies
import React, { useState } from "react"; // React and useState hook for managing state


import { FaCircle } from "react-icons/fa6"; // Importing an icon component from react-icons
import { useEffect } from "react"; // Importing useEffect hook for side effects
import toast from "react-hot-toast"; // Importing toast notifications library
import Admin_Active_Student_Table from "./Admin_Active_Student_Table"
import { activeStudents,courseCategories } from "../../../../Sampple_Data/activeStudent";
function Admin_Active_Student() {
  // State to track the number of items to display in the table
  const [allStudentDataCount, setAllStudentDataCount] = useState(10);
  const [filteredStudentDataCount, setFilteredStudentDataCount] = useState(10);
  // State to hold the filtered student data
  const [allStudentData, setAllStudentData] = useState([]);
  const [searchFiltredData, setSearchFiltredData] = useState([]);
  const [dataShowCount, setDataShowCount] = useState(10);
  // useEffect to initialize student data on component mount
  useEffect(() => {
    // console.log("Printing Correct Data",temp_data);
    setAllStudentData(activeStudents); // Setting initial state to all active students
  }, []);

  return (
    <>
      {/* Wrapper for the entire component */}
      <div className="w-full h-fit flex flex-col gap-5 ">
        {/* Header section with filters and controls */}
        <div className=" rounded-sm w-full h-fit bg-slate-300 border border-solid border-black flex flex-row justify-around items-center p-3">
          {/* Display the count of visible items vs total items */}
          <div className="text-gray-900 text-sm font-medium">
            {searchFiltredData.length > 0 && (
              <p>
                {`${
                  dataShowCount > searchFiltredData.length
                    ? `${searchFiltredData.length}/${searchFiltredData.length}`
                    : `${dataShowCount}/${searchFiltredData.length}`
                }`}
              </p>
            )}
            {!searchFiltredData.length && allStudentData.length > 0 && (
              <p>
                {`${
                  dataShowCount > allStudentData.length
                    ? `${allStudentData.length}/${allStudentData.length}`
                    : `${dataShowCount}/${allStudentData.length}`
                }`}
              </p>
            )}
          </div>
          {/* Search input  for search user data */}
          <div>
            <input
              className="outline-none rounded-sm focus:ring-2 focus:border-blue-500 text-sm capitalize py-1 px-2 font-medium place-content-center"
              type="text"
              placeholder="Search"
              id="searchStudentData"
              onChange={(e) => {
                const temp_data = [];
                setAllStudentData(activeStudents);
                allStudentData.map((item, idx) => {
                  const inputData = e.target.value.toLowerCase();
                  if (!e.target.value) {
                    setSearchFiltredData((prev) => []);
                    return;
                  }
                  if (
                    item.name.toLowerCase().includes(inputData) ||
                    item.email.toLowerCase().includes(inputData) ||
                    item.phone.toLowerCase().includes(inputData) ||
                    item.course.toLowerCase().includes(inputData) ||
                    item.enrollmentDate.toLowerCase().includes(inputData)
                  ) {
                    console.log(
                      "Printing COndition",
                      item.course.toLowerCase().includes(inputData)
                    );
                    temp_data.push(item);
                  }
                  setSearchFiltredData((prev) => temp_data);
                  console.log(
                    `Printing Search Data ${Math.random()}`,
                    searchFiltredData
                  );
                });
              }}
            />
          </div>
          {/* Dropdown for filtering students by course */}
          <div className="flex flex-col">
            {/* <label htmlFor="courses" className="text-sm font-normal">Choose A Course</label> */}
            <select
              className="outline-none focus:ring-2 focus:border-blue-500 my-2 text-[0.8rem]  w-40 px-2 py-1 text-gray-800"
              name="courses"
              id="courses"
              onChange={(e) => {
                setAllStudentData(activeStudents);
                setSearchFiltredData([]);
                if (e.target.value === "All") {
                  setAllStudentData(activeStudents);
                  setDataShowCount(10);
                } else {
                  setAllStudentData((prev) => {
                    // Filter students based on the selected course
                    return prev.filter((item) => {
                      if (item.course === e.target.value) {
                        return item;
                      }
                    });
                  });
                }
              }}
            >
              <option
                value="choose a course"
                selected
                disabled
                className="text-sm"
              >
                Choose a Course
              </option>
              {/* Render course options dynamically */}
              {courseCategories?.map((course, idx) => (
                <option className="text-sm" key={idx} value={course.name}>
                  {course.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Table to display student data  dynamicaly*/}
        <div>
          {searchFiltredData.length > 0 ? (
            <Admin_Active_Student_Table studentData={searchFiltredData} dataShowCount={dataShowCount} />
          ) : (
            <Admin_Active_Student_Table studentData={allStudentData} dataShowCount={dataShowCount} />
          )}
        </div>
        {/* Button to load more data */}
        <button
          onClick={() => {
            if (!searchFiltredData.length) {
              setDataShowCount((prev) => {
                if (prev + 10 > allStudentData.length) {
                  // toast.error("No More Data"); // Error notification

                  return allStudentData.length;
                } else {
                  // toast.success("Loading More Data"); // Success notification
                  return prev + 10;
                }
              });
            } else {
              setDataShowCount((prev) => {
                if (prev + 10 > searchFiltredData.length) {
                  // toast.error("No More Data"); // Error notification
                  return searchFiltredData.length;
                } else {
                  // toast.success("Loading More Data"); // Success notification
                  return prev + 10;
                }
              });
            }
          }}
          className=" text-gray-800 mx-auto py-2 px-4 bg-yellow-400 rounded-md hover:bg-yellow-600 transition-all duration-200 hover:text-gray-900 text-sm uppercase"
        >
          Load More
        </button>
      </div>
    </>
  );
}

export default Admin_Active_Student;
