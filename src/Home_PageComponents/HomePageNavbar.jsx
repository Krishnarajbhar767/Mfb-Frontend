import React from 'react'

function HomePageNavbar() {
  return (
    <div>
          <navbar className="w-full bg-gray-500 text-white px-10 py-5 rounded-lg flex items-center justify-between ">
              <h2>Navbar</h2>

              <div className="flex flex-row items-center justify-between gap-5 ">
                  <button
                      onClick={() => navigate("/student/dashboard")}
                      className="bg-gray-800 text-white cursor-pointer px-5 py-2 rounded-lg uppercase"
                  >
                      My Dashboard
                  </button>

                  <button
                      onClick={() => navigate("/admin/dashboard")}
                      className="bg-gray-800 text-white cursor-pointer px-5 py-2 rounded-lg uppercase"
                  >
                      Admin Dashboard
                  </button>
              </div>
          </navbar>
    </div>
  )
}

export default HomePageNavbar;