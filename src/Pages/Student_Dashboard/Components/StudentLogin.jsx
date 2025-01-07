import React from 'react'
import { useParentContextValue } from '../../../Utils/Context/Parent_Context';

function StudentLogin() {

  const { setIsAdmin, isAdmin } = useParentContextValue()

  const onLogin = ()=> {
    alert("login ")
    setIsAdmin(!isAdmin)
  }

  return (
      <div>StudentLogin
          <button onClick={onLogin} >StudentLogin True</button>
    </div>
  )
}

export default StudentLogin;