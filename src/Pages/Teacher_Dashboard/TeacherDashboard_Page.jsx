import React from 'react';
import { Route, Outlet } from "react-router-dom";
import Navbar from '../../DashBoard_Componets/Navbar';
import { RiDashboardHorizontalFill } from "react-icons/ri";
import { GiDiscussion } from "react-icons/gi"; // 🟢
import { IoSettingsSharp } from "react-icons/io5"; // 🟢
import { RiLiveFill } from "react-icons/ri";
import { MdAssignment } from "react-icons/md";

import { FaUserGraduate } from "react-icons/fa";
import { IoBook } from "react-icons/io5";
import Sidebar from '../../DashBoard_Componets/Sidebar';


function TeacherDashboard_Page() {

  // our side list link with route or lable name with icon array data 
  const sidebarList = [
    {
      "id": 1,
      "lable": "Dashboard",
      "icon": <RiDashboardHorizontalFill />,
      "route": "/teacher/dashboard"
    },
    {
      "id": 3,
      "lable": "course management",
      "icon": <IoBook />,
      "route": "/teacher/course_management"
    },
    {
      "id": 2,
      "lable": "assignments & quizzes",
      "icon": <MdAssignment />,
      "route": "/teacher/assignments_quizzes"
    },
    {
      "id": 4,
      "lable": "live sessions",
      "icon": <RiLiveFill />,
      "route": "/teacher/live_sessions"
    },
    {
      "id": 5,
      "lable": "student management",
      "icon": <FaUserGraduate />,
      "route": "/teacher/student_management"
    },
    {
      "id": 6,
      "lable": "forums",
      "icon": <GiDiscussion />,
      "route": "/teacher/forums"
    },
    {
      "id": 6,
      "lable": "profile settings",
      "icon": <IoSettingsSharp />,
      "route": "/teacher/profile_settings"
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

          <div className="w-full px-10  py-3 h-fit overflow-scroll scroller ">
            <h1
              className="text-1xl font-semibold border-b-2 border-blue-500 mb-5 text-blue-600 cursor-pointer uppercase  "
            >
              Welcome to Media Fleetblue Course Platform - Teacher
            </h1>

            <Outlet />

            <p
              className="p-10">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita consequatur corporis quo quam incidunt dolorem, praesentium, ad provident exercitationem, deserunt at inventore possimus veritatis! Voluptas molestiae suscipit quod aperiam laboriosam soluta placeat molestias quo necessitatibus qui accusamus deleniti libero ipsa, repudiandae sequi sunt harum nihil? Sed id magni exercitationem molestiae et ullam? Laboriosam recusandae, iure autem veritatis facere iusto cum quaerat laborum fugit voluptatem ratione rerum possimus quis hic ullam incidunt quibusdam consequuntur repellat maiores eum pariatur? Voluptates reiciendis hic, fugit voluptatum at, in atque ab molestiae dolorem pariatur consectetur velit natus nam, facere quo. Aut, soluta? Libero nihil sit, consequatur accusantium iste, distinctio corporis molestiae porro dicta error cumque obcaecati, voluptatum magni suscipit ex voluptas? Hic, dolorem, dolores aspernatur rem quia voluptates in neque commodi omnis eum aut architecto ea, vero error repellendus at delectus. Sequi, laudantium dolor. Beatae deserunt sit quisquam corrupti, enim numquam! Fugiat, molestias quia. Molestias reprehenderit eum dolores quo nulla, perspiciatis id sed incidunt repellat mollitia! Laudantium deleniti perspiciatis porro doloremque, quibusdam architecto eligendi nesciunt dolorum quo dignissimos iure magni nostrum, repellat magnam fugit pariatur asperiores nisi voluptas officia, nemo vel quia ipsam? Consectetur laborum ratione quisquam perferendis beatae enim dolor! Totam optio incidunt dolor assumenda nisi laboriosam sed ullam enim nam nemo adipisci reiciendis, tempore odit autem? Voluptates quam ipsam, asperiores quae eaque minima inventore cum magnam rerum explicabo nisi tempore, quas, dignissimos quisquam alias blanditiis in dolorem cumque. Nobis, fuga! Dolore qui, doloribus expedita modi eum sapiente, laboriosam eius ad repudiandae praesentium et voluptas nobis porro consequatur quod quia consequuntur nihil culpa quos eligendi unde fugit ratione dignissimos magnam. Sit quidem, numquam sunt rerum fugit incidunt aliquam ratione dicta repudiandae veniam quos eos cumque dolor, deleniti odio. Quia hic sed voluptatem ipsa, incidunt beatae ex dicta. Eligendi, harum fuga? Ut sequi at recusandae nam, quidem ullam quae fugiat placeat omnis magni. Quidem quisquam, nisi, doloribus ipsa veritatis neque odio, magnam laudantium maxime voluptates molestiae totam tenetur rem labore illum omnis repellendus. Fugit nihil deleniti a, distinctio odit natus ipsam eveniet aspernatur ullam. Ipsa voluptatem eaque esse distinctio facere sapiente itaque eum omnis excepturi adipisci repellendus quo illum, facilis vero? Debitis ducimus commodi voluptates porro blanditiis esse neque ipsum? Quo tempore laboriosam minus velit, labore quam cum reiciendis soluta exercitationem, explicabo repudiandae nobis perferendis. Debitis rerum recusandae quam omnis quibusdam saepe facere eos quis dolores distinctio ullam rem iusto, voluptates numquam nemo iste, odit hic perspiciatis amet. Odio, nobis quisquam fuga nesciunt enim eligendi. Ad perspiciatis voluptatibus commodi necessitatibus, cum deleniti earum, voluptates voluptatem consequuntur id excepturi a eius debitis itaque amet! Placeat, fuga pariatur quaerat optio repellendus nisi ex ab aperiam. Dolorem odio, animi magni omnis nisi iusto expedita maxime eum tempore laudantium. Dolores quas vel facere! Dolor aspernatur quia, earum consequatur explicabo inventore vero omnis numquam libero qui, distinctio provident architecto? Praesentium laudantium sed modi quia voluptate architecto doloremque harum nesciunt, dolor ut illum eligendi a! Quas culpa iste ab delectus autem beatae at dolore cum repellendus necessitatibus, nisi reprehenderit? Repudiandae accusamus nisi, accusantium quo quae perferendis iure saepe! Repellat omnis aspernatur voluptate dicta mollitia, nemo ullam impedit iste quod accusamus ab quis magni quam nam deleniti est blanditiis, aut esse porro atque, reiciendis repellendus eligendi. Neque optio, ab ipsa laudantium iure explicabo harum. Laudantium quo rem cupiditate, possimus accusamus quae at quia iste? Eligendi magni tempore, est porro cupiditate cum eos eveniet dolore maxime laboriosam quos consectetur in doloribus nostrum quaerat explicabo doloremque. Eveniet ducimus, tempora, officiis eaque quasi ad quod libero laboriosam enim impedit tempore neque omnis accusantium inventore quidem deleniti soluta expedita debitis voluptatum? Corporis tempore veniam aperiam doloribus nemo, expedita blanditiis eius sunt cumque quo ratione, deserunt dignissimos facilis reiciendis minima hic est maxime cupiditate voluptatum. Minima voluptatum optio corporis. Et quaerat dolorum incidunt similique nobis doloremque repudiandae delectus quibusdam. Minus, dicta. Error reprehenderit repudiandae voluptate iure corrupti iste, temporibus voluptas, possimus accusamus sint quis ex numquam blanditiis nesciunt velit obcaecati, nobis provident dolorem ipsa culpa esse facere debitis animi rem. Nobis totam ipsum perspiciatis, accusamus excepturi pariatur obcaecati sunt expedita. Soluta ullam eligendi qui molestiae repellat sequi, perferendis necessitatibus cum, ab tempora architecto iste quia assumenda dolorum fuga amet nemo cupiditate aliquam! Sunt, suscipit aperiam vitae delectus a iusto ut sequi nesciunt eius autem reprehenderit ab facere possimus maxime recusandae amet tempore, voluptatum dolor illo minus nostrum? Nam eligendi consequatur debitis itaque, alias esse, quasi perferendis repellendus quam asperiores at! Non quos accusamus eligendi dignissimos quas mollitia autem illo. Assumenda aut explicabo inventore eaque. Nemo recusandae odit minima facere exercitationem libero dolorem in dolores et animi necessitatibus eum, eveniet nesciunt, error repellendus saepe ab perspiciatis dolorum optio, ratione aspernatur reprehenderit magnam iste ad? Officia illum omnis voluptatem. Excepturi distinctio quo eos nesciunt labore porro quia et modi totam cum velit, officia vitae temporibus repellat debitis dolores. Obcaecati sequi laborum dolorem repellendus quis omnis possimus minus, dolore quibusdam quod voluptates! Enim eligendi, ullam molestias eius dolor iusto ipsum. Harum ad totam maxime quos quaerat. Quis aut maiores modi at magni odio eos quae sequi adipisci rerum, repellat dolorem ullam error necessitatibus labore, ratione maxime voluptas harum nemo nulla dolores? Nisi a obcaecati, sint quod quae repellat inventore. Architecto consequuntur sed iusto rem sapiente dolor harum. Quaerat officia unde ex. Ipsa sed nihil itaque, reprehenderit molestiae nobis hic suscipit maxime voluptatum praesentium pariatur eveniet sequi ab rem dolor, deserunt error! Aperiam placeat officiis reiciendis eligendi explicabo provident magnam porro earum rerum, iusto rem, aspernatur ratione ullam. Repellat, ad amet sapiente obcaecati quae rem vel laboriosam numquam error ipsam neque accusantium, suscipit dolorem quos minus dolorum porro reiciendis? Quos sequi consectetur deleniti eveniet maiores aut est autem. Aliquid quis repellendus tenetur ab rem asperiores perspiciatis, adipisci, officiis quam ipsam quaerat magnam dolore ea itaque dolores. Fuga laudantium repellendus, porro, eum deserunt eveniet, tenetur quos accusamus commodi molestias asperiores quisquam? Non, repellendus expedita harum velit consequuntur sint et magnam perferendis! Perferendis laboriosam doloribus deserunt quaerat sint nobis architecto ex commodi aliquid, eaque magnam deleniti quasi modi? Officia quos asperiores pariatur laborum!</p>
          </div>


        </div>
      </div>

    </div>
  )
}

export default TeacherDashboard_Page;