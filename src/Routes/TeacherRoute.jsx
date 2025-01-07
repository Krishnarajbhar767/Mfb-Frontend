

import { Route, Outlet } from "react-router-dom";
import TeacherDashboard_Page from "../Pages/Teacher_Dashboard/TeacherDashboard_Page";


const TeacherRoute = () => {

  return (
    <div className="w-full overflow-hidden  ">
      {/* Parent Route */}
      {/* Student Routes  */}
      <TeacherDashboard_Page />

    </div>
  );
};

export const TeacherRoutesConfig = [
  { path: "dashboard", element: <h1>Dashboard Teacher</h1> },
  { path: "course_management", element: <h1>Course Management</h1> },
  { path: "assignments_quizzes", element: <h1>Assignments Quizzes</h1> },
  { path: "live_sessions", element: <h1>Live Sessions</h1> },
  { path: "student_management", element: <h1>Student Management </h1> },
  { path: "forums", element: <h1>Forums</h1> },
  { path: "profile_settings", element: <h1>Profile Settings</h1> },

];

export default TeacherRoute;
