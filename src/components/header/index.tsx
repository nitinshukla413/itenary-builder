'use client'
import { links } from "@/utils/constants"
import Link from "next/link"
import { usePathname, useRouter } from 'next/navigation'
import MenuIcon from '@mui/icons-material/Menu';
import Image from "next/image";
import Logo from '../../../public/tara-logo.svg'
import { useState } from "react";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CloseIcon from '@mui/icons-material/Close';
import * as React from 'react';
import Button from '@mui/material/Button';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import { ArrowDownward } from "@mui/icons-material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CustomMenu from "../ItemDropDown";

const Header = () => {
    const [open, setOpen] = useState(false)
    const [showMenu, setShowMenu] = useState(false);
    const toggleMenu = () => {
        if (window.innerWidth < 1024) {
            setShowMenu(!showMenu);
        } else {
            setShowMenu(false);
        }
    };
    const anchorRef = React.useRef<any>(null);

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event: Event | React.SyntheticEvent) => {
        if (
            anchorRef.current &&
            anchorRef.current.contains(event.target as HTMLElement)
        ) {
            return;
        }

        setOpen(false);
    };
    const currentPage = usePathname();
    const router = useRouter()
    const toggleDrawer = () => {
        setOpen(val => !val)
    }
    const pathName = usePathname()
    if (currentPage === "/login")
        return <></>
    function handleListKeyDown(event: React.KeyboardEvent) {
        if (event.key === 'Tab') {
            event.preventDefault();
            setOpen(false);
        } else if (event.key === 'Escape') {
            setOpen(false);
        }
    }

    return (
        <header
            className={`sticky top-0 z-50 bg-[#fff] rounded-b-[30px] shadow-md duration-300`}
        >
            <div className="px-20">
                <div className="flex items-center justify-between py-5 lg:py-0">
                    <div className='flex '>
                        <div
                            className="flex justify-end items-end py-2">
                            <div
                                data-aos={'fade-in'}
                                className={`h-25 w-20`}>
                                <Image
                                    src={Logo} alt="image" objectFit="contain" className='w-full h-full' />
                            </div>
                        </div>
                    </div>
                    <div className="flex w-[40%] max-md:w-full  items-center ">
                        <div onClick={() => toggleMenu()}
                            className={` overlay fixed inset-0 z-[51] bg-black/60 lg:hidden ${showMenu ? "" : "hidden"
                                }`}
                        ></div>
                        <div
                            className={`flex w-full ${showMenu ? "overflow-y-auto ltr:!right-0 rtl:!left-0" : ""
                                }`}
                        >
                            <div className="border-b border-gray/10 ltr:text-right rtl:text-left lg:hidden">
                                <button
                                    onClick={() => toggleMenu()}
                                    type="button"
                                    className="p-4"
                                >
                                    <CloseIcon className="text-black" />
                                </button>
                            </div>
                            <ul className="flex w-full justify-evenly space-x-10" onClick={() => toggleMenu()}>
                                {links.map((nav, index) => {
                                    if (nav?.sublinks) {
                                        const isActive = pathName.includes('admin')
                                        return (
                                            <div>
                                                <CustomMenu menuItems={nav?.sublinks}
                                                    onClick={(val: { link: string }) => {
                                                        router.push(val.link)
                                                    }
                                                    }>
                                                    <div
                                                        key={index} className={`space-x-2 p-3 px-0 hover:scale-110 cursor-pointer hover:text-[#4D9FD7] rounded-md flex justify-center items-center`}>
                                                        <h2
                                                            className={`text-black hover:text-[#4D9FD7]  font-[600] tracking-[0.9px] text-lg ${isActive ? "text-[#4D9FD7]" : "text-black"}`}
                                                        >
                                                            {nav.title}
                                                        </h2>
                                                        <ExpandMoreIcon className={`text-black hover:rotate-180  hover:text-[#4D9FD7] ${open ? 'rotate-180  text-[#4D9FD7]' : ''} ${isActive ? 'text-[#4D9FD7]' : ''}`} />
                                                    </div>
                                                </CustomMenu>
                                            </div>
                                        )
                                    }
                                    return (
                                        <li key={index} className={`p-3 hover:scale-110 cursor-pointer hover:text-[#4D9FD7] rounded-md flex justify-center items-center`}>
                                            <Link
                                                href={nav.link}
                                                className={`text-black hover:text-[#4D9FD7]  font-[600] tracking-[0.9px] text-lg ${pathName === nav.link ? "text-[#4D9FD7]" : "text-black"}`}
                                            >
                                                {nav.title}
                                            </Link>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                        <div className="border-l-[2px] px-5 cursor-pointer border-[#d8d8d8] ">
                            <div>
                                <CustomMenu menuItems={[{ title: 'Logout', link: '/login' },{ title: 'My Profile', link: '/profile' }]}
                                    onClick={(av: {title:string, link: string }) => {
                                        if(av.link.includes('logout'))
                                        {
                                            localStorage.removeItem('login')
                                        }
                                        router.push(av.link)
                                    }
                                    }>
                                    <AccountCircleIcon className="text-[#242424]" fontSize="large" />
                                </CustomMenu>
                            </div>
                        </div>
                        <button
                            type="button"
                            className="flex h-10 w-10 items-center justify-center rounded-full bg-primary lg:hidden"
                            onClick={() => toggleMenu()}
                        >
                            <MenuIcon className="text-black" />
                        </button>
                    </div>

                </div>
            </div>
        </header>
    )

}
export default Header