import React from 'react'
import { useParentContextValue } from '../../../Utils/Context/Parent_Context';

function AdminLogin() {

  const { setIsAdmin, isAdmin } = useParentContextValue()

  alert("Admin Login page")

  const onLogin =() => {
    alert("login ")
    setIsAdmin(!isAdmin)
  }

  return (
    <div className="w-full bg-black text-white ">AdminLogin

      {/* <button onClick={onLogin} >setIsAdmin True</button> */}
    </div>
  )
}

export default AdminLogin;