import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { SiShopware } from "react-icons/si";
import { MdOutlineCancel } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { links } from "../data/dummy";
import { useStateContext } from "../contexts/ContextProvider";
import { useThemeContext } from "../contexts/ThemeProvider";
const Sidebar = () => {
  const { activeMenu, setActiveMenu, screenSize } = useStateContext();
  const [path, setPath] = useState(window.location.pathname);
  const { currentColor } = useThemeContext();
  const handleCloseSideBar = () => {
    if (activeMenu && screenSize <= 900) {
      //if on mobile, we want to close the side bar automatically when clicked on links
      setActiveMenu(false);
    }
  };

  const activeLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white text-md m-2 text-xl";
  const normalLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-stone-400 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2";
  return (
    <div className="h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10 shadow-xl">
      {activeMenu && (
        <>
          <div className="flex justify-between items-center">
            <Link
              to="/"
              onClick={() => {
                setActiveMenu(false);
                handleCloseSideBar();
              }}
              className="items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900"
            >
              <SiShopware style={{ color: currentColor }} />{" "}
              <span style={{ color: currentColor }}>MyAssets</span>
            </Link>
            <TooltipComponent content="Menu" position="BottomCenter">
              <button
                type="button"
                className="text-xl rounded-full p-3 hover:bg-light-gray mt-4 block md:hidden"
                onClick={() => {
                  setActiveMenu((prev) => !prev); //toggle
                }}
              >
                <MdOutlineCancel />
              </button>
            </TooltipComponent>
          </div>
          <div className="mt-10">
            {links.map((item, index) => {
              return (
                <div key={index}>
                  <p
                    className=" m-3 mt-4 uppercase"
                    style={{ color: currentColor }}
                  >
                    {item.title}
                  </p>
                  {item.links.map((link, index1) => {
                    if (index == 0) {
                      return (
                        <NavLink
                          to={`/${link.name}`}
                          key={index1}
                          onClick={() => {
                            setPath("/expense");
                            handleCloseSideBar();
                          }}
                          className={
                            path === "/expense" || path === "/"
                              ? activeLink
                              : normalLink
                          }
                          style={{
                            backgroundColor:
                              path === "/expense" || path === "/"
                                ? currentColor
                                : "",
                          }}
                        >
                          {link.icon}
                          <span className="capitalize">{link.name}</span>
                        </NavLink>
                      );
                    } else {
                      return (
                        <NavLink
                          to={`/${link.name}`}
                          key={index1}
                          onClick={() => {
                            handleCloseSideBar();
                            setPath("lol");
                          }}
                          className={({ isActive }) => {
                            return isActive ? activeLink : normalLink;
                            //isActive state, given to us by NavLink component
                          }}
                          style={({ isActive }) => {
                            return {
                              backgroundColor: isActive && currentColor,
                            };
                          }}
                        >
                          {link.icon}
                          <span className="capitalize">{link.name}</span>
                        </NavLink>
                      );
                    }
                  })}
                </div>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
};

export default Sidebar;
