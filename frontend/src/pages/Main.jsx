import Navigation from "../components/main/nav/Navigation";
import { Outlet, Navigate,NavLink } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { UserSettingsContext } from "../components/providers/UserSettingsProvider";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import { DarkModeContext } from "../components/providers/DarkModeProviders";
import LogoSet from "../components/main/globalParts/LogoSet";
import { auth } from "../firebase/config";
import { HashLink } from "react-router-hash-link";

const MainLayout = () => {
  const { userSettings } = useContext(UserSettingsContext);
  // console.log(userSettings.id);

  // ナビゲーションの開閉
  const closeNavTailwind = "hidden";
  const openNavTailwind =
    "absolute top-0 z-30 w-full h-full lg:left-0 lg:w-64 z-20";

  const [navTailwind, setNavTailwind] = useState(closeNavTailwind);

  const handleOpenCloseNav = () => {
    if (navTailwind === closeNavTailwind) {
      setNavTailwind(openNavTailwind);
    } else {
      setNavTailwind(closeNavTailwind);
    }
  };

  // ----------------------------
  // ログアウト・退会ボタンの表示
  const tailwindShowLeavePop =
    "absolute z-10 right-0 top-8 w-36 p-2 flex flex-col items-start justify-center rounded-lg bg-white shadow";
  const tailwindNotShowLeavePop = "hidden";

  const [showLeavePop, setShowLeavePop] = useState(tailwindNotShowLeavePop);

  const handleClickLeaveButton = () => {
    setShowLeavePop(tailwindShowLeavePop);
  };
  const handleClickOutsideLeaveButton = (event) => {
    try {
      const className = event.target.className;
      if (className) {
        if (className.baseVal) {
          if (!className.baseVal.includes("leaveButton")) {
            setShowLeavePop(tailwindNotShowLeavePop);
          }
        } else {
          if (!className.includes("leaveButton")) {
            setShowLeavePop(tailwindNotShowLeavePop);
          }
        }
      }
    } catch {}
  };
  // ------------------------------

  // ログアウトボタンの処理
  const handleClickLogOut = () => {
    // ここでログアウト処理をする
    auth.signOut();
    // ローカルストレージの情報を削除
    localStorage.removeItem("id");
    localStorage.removeItem("name");
    localStorage.removeItem("image");
    localStorage.removeItem("color");
    localStorage.removeItem("snsUrl");
    localStorage.removeItem("language");
    alert("ログアウトしました！");
    window.location.href = "/";
  };

  // --------------------------------
  // ダークモードの切り替え
  const { isDarkMode, setIsDarkMode } = useContext(DarkModeContext);

  const toggleDarkMode = (checked) => {
    setIsDarkMode(checked);
  };

  useEffect(() => {
    if (isDarkMode === true) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  if (userSettings.id === null) {
    console.log("ログインしていません");
    return <Navigate replace to="/" />;
  } else {
    return (
      <div
        className="h-full flex flex-col dark:bg-gray-900"
        onClick={handleClickOutsideLeaveButton}
      >
        <header className="py-2 z-20 md:py-4 flex-2 flex flex-row border-b shadow-sm px-4 bg-white dark:bg-gray-900 dark:border-gray-200 sticky top-0">
          <div className="flex-1 flex">
            <span
              onClick={handleOpenCloseNav}
              className="xl:hidden inline-block text-gray-700 hover:text-gray-900 align-bottom "
            >
              <span className="block h-6 w-6 p-1 rounded-md hover:bg-gray-400 dark:hover:bg-gray-700">
                <svg
                  className="w-5 h-5 dark:text-white"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </span>
            </span>
            <NavLink to="/main/home" className="hidden xl:flex text-3xl font-medium mx-4 dark:text-white items-center">
              <LogoSet />
            </NavLink>
            {/* <span className="lg:hidden inline-block ml-8 text-gray-700 hover:text-gray-900 align-bottom">
                        <span className="block h-6 w-6 p-1 rounded-full hover:bg-gray-400">
                            <svg className="h-4 w-4" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                        </span>
                    </span> */}
          </div>
          <div className="flex-1 flex items-center justify-center">
            <NavLink to="/main/home" className="xl:hidden visible text-xl font-medium dark:text-white flex items-center">
              <LogoSet />
            </NavLink>
          </div>
          <div className="flex-1 text-right">
            <span className="inline-block text-gray-700">
              <span className="flex items-center justify-center p-1 mr-1 rounded-md hover:bg-gray-300  cursor-pointer dark:hover:bg-gray-700">
                <DarkModeSwitch
                  checked={isDarkMode}
                  onChange={toggleDarkMode}
                  size={20}
                />
              </span>
            </span>
            <span className="relative inline-block text-gray-700">
              <span
                onClick={handleClickLeaveButton}
                className="leaveButton flex items-center justify-center p-1 rounded-md hover:bg-gray-300 text-black cursor-pointer dark:hover:bg-gray-700"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="leaveButton w-5 h-5 dark:text-white"
                >
                  {/* <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--> */}
                  <path
                    className="leaveButton"
                    fill="currentColor"
                    d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"
                  />
                </svg>
              </span>
              <div className={showLeavePop}>
                <div
                  onClick={handleClickLogOut}
                  className="px-2 rounded-md hover:bg-gray-200 w-full flex cursor-pointer dark:hover:bg-gray-800 dark:hover:text-white"
                >
                  <p>
                    {userSettings.language === "English"
                      ? "Log out"
                      : "ログアウト"}
                  </p>
                </div>
                <HashLink
                  to="/main/settings/#deleteAccount"
                  className="px-2 mt-1 rounded-md hover:bg-red-600 hover:text-white w-full flex cursor-pointer"
                >
                  <p>
                    {userSettings.language === "English"
                      ? "Delete account"
                      : "アカウント削除"}
                  </p>
                </HashLink>
              </div>
            </span>
          </div>
        </header>
        <div className="flex flex-1 min-h-0 relative">
          <Navigation
            handleOpenCloseNav={handleOpenCloseNav}
            navTailwind={navTailwind}
          />
          <div className="flex-1 bg-white w-full h-full dark:bg-gray-900">
            <div className="main-body w-full h-full flex flex-col">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default MainLayout;
