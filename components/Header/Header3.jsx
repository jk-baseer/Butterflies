import React, { useEffect, useState } from 'react';
import HeaderProfile from '../HeaderProfileBox/HeaderProfile';
import SearchBox from '../SearchBox/SearchBox';
import StoreButton from '../StoreButton/StoreButton';
import Link from 'next/link';
import Image from 'next/image';
import HeaderCategories from './HeaderCategories';
import OutsideClickHandler from 'react-outside-click-handler';
import Drawer from './Drawer';

const Header3 = () => {
  const [logo, setLogo] = useState(null);
  useEffect(() => {
    setLogo(localStorage.getItem('logo'));
  }, [0]);

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [showUserMenus, setShowUserMenus] = useState(false);

  const drawerOpen = () => {
    const drawer = document.getElementById('sideDrawer');
    drawer.classList.remove('-translate-x-full');
    setIsDrawerOpen(true);
  };
  const closeDrawer = () => {
    const drawer = document.getElementById('sideDrawer');
    setIsDrawerOpen(false);
  };

  return (
    <>
      <div className="hidden md:block">
        {showUserMenus ? (
          <div className=" w-[100vw] h-[100vh]   top-0 z-[60] fixed    bg-transparent    opacity-100" />
        ) : (
          ''
        )}
        <div className="  min-h-[70px] px-[25px] 2xl:px-[10%]  shadow-c-sm   bg-white top-0    overflow-x-hidden relative">
          <div className="flex pt-[24px]  w-full">
            <div className="  absolute left-0 right-0    flex  justify-center     ">
              {logo && (
                <Link href="/" passHref={true}>
                  <div className=" flex items-center   relative cursor-pointer ">
                    <Image
                      src={logo}
                      height={44}
                      width={250}
                      objectFit="contain"
                      alt="logo"
                    />
                  </div>
                </Link>
              )}
            </div>
            <div className="   z-[100] ml-auto">
              <div className=" flex items-center justify-between">
                <div className="  mr-[12px]  lg:mr-8  xl:mr-9 ">
                  <StoreButton />
                </div>
                <div>
                  <HeaderProfile
                    showUserMenus={showUserMenus}
                    setShowUserMenus={setShowUserMenus}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="mt-3 pb-[16px] flex justify-between items-center">
            <div>
              <HeaderCategories />
            </div>
            <div>
              <SearchBox />
            </div>
          </div>
        </div>
      </div>
      <div className=" md:hidden  bg-white shadow-c-sm ">
        {isDrawerOpen ? (
          <div className="  top-0 z-40 fixed  h-full w-full bg-black   opacity-30" />
        ) : (
          ''
        )}
        {showUserMenus ? (
          <div className=" w-[100vw] h-[100vh]   top-0 z-[60] fixed   bg-transparent    opacity-100" />
        ) : (
          ''
        )}

        <div className="w-screen px-[35px]  ">
          <div className="flex justify-between items-center py-[26px] ">
            <div className="  flex items-center">
              <button className="outline-none" onClick={drawerOpen}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 mr-[13px] cursor-pointer"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
              {logo && (
                <Link href="/" passHref={true}>
                  <Image
                    src={logo}
                    height={44}
                    width={150}
                    objectFit="contain"
                    alt="logo"
                  />
                </Link>
              )}
            </div>
            <div className=" flex items-center justify-between">
              <div className="  mr-[12px]  lg:mr-8  xl:mr-9 ">
                <StoreButton />
              </div>
              <div>
                <HeaderProfile
                  showUserMenus={showUserMenus}
                  setShowUserMenus={setShowUserMenus}
                  // dropdownRef={
                  // 	dropdownRef
                  // }
                />
              </div>
            </div>
          </div>
          <div className="pb-[25px]">
            <SearchBox />
          </div>
        </div>
        <OutsideClickHandler
          onOutsideClick={() => {
            closeDrawer();
          }}
        >
          <div
            id="sideDrawer"
            className={
              isDrawerOpen
                ? 'z-50 bg-gray-50  w-[245px] fixed inset-y-0 left-0  transform  transition  ease-in-out  duration-500 overflow-y-scroll'
                : '  order-9 bg-gray-50  w-[245px] fixed inset-y-0 left-0  transform  transition -translate-x-full ease-in-out  duration-500'
            }
          >
            <button
              onClick={closeDrawer}
              className=" absolute  top-0 right-0  mt-[19px] mr-[19px] z-50 "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
                      <div className="">
                          {<Drawer/>}
            </div>
          </div>
        </OutsideClickHandler>
      </div>
    </>
  );
};

export default Header3;
