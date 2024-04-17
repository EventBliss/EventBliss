import { useState } from "react";
import { Link, Navigate, Outlet, useNavigate } from "react-router-dom";
import {
  RiMenuLine,
  RiArrowUpSLine,
  RiArrowDownSLine,
} from "@remixicon/react";
import { Icon } from "@tremor/react";
import { sideBarRoutes } from './components/SideBarRoute';
import favicon from "/favicon-bl.png"
import { SignOutButton, SignedOut, useClerk } from "@clerk/clerk-react";
import { IconLogout } from "@tabler/icons-react";

export function SideBar() {
  const { signOut } = useClerk();
  const [asideOpen, setAsideOpen] = useState(true);
  const [openDropdowns, setOpenDropdowns] = useState({});

  const toggleDropdown = (id) => {
    setOpenDropdowns((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  console.log(openDropdowns.Requests)

  return (
    <div>
      <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200">
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start rtl:justify-end ">
              <button
                data-drawer-target="logo-sidebar"
                data-drawer-toggle="logo-sidebar"
                aria-controls="logo-sidebar"
                type="button"
                onClick={() => setAsideOpen(!asideOpen)}
                className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200">
                <Icon
                  icon={RiMenuLine}
                  color="[#13477a]"
                  className="w-6 h-6"
                  size="lg"
                />
              </button>
              <img src={favicon} className="w-10 h-10 pl-2" alt="FlowBite Logo" />
            </div>
            <div className="flex items-center">
              <div className="flex items-center ms-3">
                <div className="text-white font-semibold bg-[#FD8B11] py-2 px-4 rounded-md">
                  <SignOutButton/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <aside
        id="logo-sidebar"
        className={`fixed top-0 left-0 z-40 w-64 h-full pt-20 transition-all duration-300 ${
          asideOpen ? "hidden lg:block" : "hidden lg:block w-[75px]"
        } bg-[#957B9B] border-r border-none sm:translate-x-0`}
        aria-label="Sidebar">
        <div className="h-full px-3 pb-4 overflow-y-auto bg-[#957B9B]">
          {sideBarRoutes.map((item, index) => (
            <div key={index}>
              {item.path ? (
                <Link to={`${item.path}`}>
                  <div className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group cursor-pointer">
                    <Icon
                      icon={item.icon}
                      variant="simple"
                      className="w-8 h-8 text-white group-hover:text-gray-900 cursor-pointer"
                      size="lg"
                    />
                    <span
                      className={`ml-3 text-white ${
                        asideOpen
                          ? "group-hover:text-gray-900"
                          : "duration-300 hidden"
                      }`}>
                      {item.title}
                    </span>
                  </div>
                </Link>
              ) : (
                <>
                    <div
                      className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group cursor-pointer"
                      onClick={() => toggleDropdown(item.id)}>
                      <Icon
                        icon={item.icon}
                        variant="simple"
                        className="w-8 h-8 text-white group-hover:text-gray-900 cursor-pointer"
                        size="lg"
                      />
                      <span
                        className={`ml-3 text-white ${
                          asideOpen
                            ? "group-hover:text-gray-900"
                            : "duration-300 hidden"
                        }`}>
                        {item.title}
                      </span>
                      <Icon
                        icon={
                          openDropdowns[item.id]
                            ? RiArrowUpSLine
                            : RiArrowDownSLine
                        }
                        className={`text-white group-hover:text-gray-900 ${asideOpen ? 'ml-0' : 'ml-[-10px]'}`}
                      />
                    </div>
                  
                  {openDropdowns[item.id] &&
                    item.options.map((subItem, subIndex) => (
                      <div
                        key={subIndex}
                        className="transition-all duration-300 ease-in-out">
                          <Link to={`${subItem.path}`} key={subIndex}>
                            <div className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group cursor-pointer">
                              <Icon
                                icon={subItem.icon}
                                variant="simple"
                                className="w-8 h-8 text-white group-hover:text-gray-900 cursor-pointer"
                                size="lg"
                              />
                              <span
                                className={`ml-3 text-white ${
                                  asideOpen
                                    ? "group-hover:text-gray-900"
                                    : "duration-300 hidden"
                                }`}>
                                {subItem.title}
                              </span>
                            </div>
                          </Link>
                        
                      </div>
                    ))}
                </>
              )}
            </div>
          ))}
          <div>
          <button onClick={() => signOut(() => <Navigate to={'/Login'}/>)} className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group cursor-pointer">
            <IconLogout className="w-8 h-8 text-white group-hover:text-gray-900 cursor-pointer" />
            <span className={`ml-3 text-white ${ asideOpen ? " group-hover:text-gray-900 transition delay-": "hidden"}`}>
            Log
            </span>
            <span className={`ml-1 pl- text-white ${ asideOpen ? " group-hover:text-gray-900 transition delay-": "hidden"}`}>
          Out
            </span>
          </button>
          </div>
        </div>
        
      </aside>
      <div className="flex-grow overflow-y-auto">
        <div
          className={`transition-all duration-300 ${
            asideOpen ? "ml-10 mt-20 lg:ml-72 lg:mt-24 mr-8" : "ml-10 lg:ml-24 mt-20 mr-8"
          }`}>
          <Outlet className={'bg-white'}/>
        </div>
      </div>
    </div>
  );
}