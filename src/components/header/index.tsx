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
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import { ArrowDownward } from "@mui/icons-material";
import * as React from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CustomMenu from "../ItemDropDown";
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

const Header = () => {
    const [showMenu, setShowMenu] = useState(false);
    const currentPage = usePathname();
    const router = useRouter()
    const toggleDrawer = () => {
        setShowMenu(val=>!val)
    }
    const pathName = usePathname()
    if (currentPage === "/login")
        return <></>

    const DrawerList = () => (
        <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer}>
            <List className="py-10  w-full flex flex-col justify-center items-center">
               <Divider/>
                <ListItem key={'profile'}>
                    <Link href={'/profile'} className="w-full">
                        Profile
                    </Link>
                </ListItem>
                {links.map((text, index) => (
                    <ListItem key={index}>
                        <Link href={text.link} className="w-full">
                            {text.title}
                        </Link>
                    </ListItem>
                ))}
                <ListItem key={'logout'}>
                    <Link href={'/logout'} className="w-full">
                        Logout
                    </Link>
                </ListItem>
            </List>
        </Box>
    );

    return (
        <header
            className={`sticky top-0 z-50 bg-[#fff] rounded-b-[30px] max-md:rounded-b-lg shadow-md duration-300`}
        >
            <div className="px-20 max-md:px-2">
                <div className="flex items-center justify-between py-5 max-md:py-3 lg:py-0">
                    <div className='flex'>
                        <div
                            className="flex justify-end items-end py-2">
                            <div
                                data-aos={'fade-in'}
                                className={`h-25 w-20 max-md:h-13 max-md:w-10`}>
                                <Image
                                    src={Logo} alt="image" objectFit="contain" className='w-full h-full' />
                            </div>
                        </div>
                    </div>
                    <div className="flex w-[40%] max-md:w-full items-center ">
                        <div
                            className={`flex w-full ${showMenu ? "overflow-y-auto ltr:!right-0 rtl:!left-0" : ""
                                }`}
                        >
                            <ul className="max-md:hidden flex w-full justify-evenly space-x-10">
                                {links.map((nav, index) => {
                                    if (nav?.sublinks) {
                                        const isActive = pathName.includes('admin')
                                        return (
                                            <div  key={index} >
                                                <CustomMenu key={index} menuItems={nav?.sublinks}
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
                                                        <ExpandMoreIcon className={`text-black hover:rotate-180  hover:text-[#4D9FD7] ${isActive ? 'text-[#4D9FD7]' : ''}`} />
                                                    </div>
                                                </CustomMenu>
                                            </div>
                                        )
                                    }
                                    console.log(pathName,nav.link,"<pathName")
                                    return (
                                        <li key={index} className={`p-3 hover:scale-110 cursor-pointer hover:text-[#4D9FD7] rounded-md flex justify-center items-center`}>
                                            <Link
                                                href={nav.link}
                                                className={`text-black hover:text-[#4D9FD7]  font-[600] tracking-[0.9px] text-lg ${pathName == nav.link ? "text-[#4D9FD7]" : "text-black"}`}
                                            >
                                                {nav.title}
                                            </Link>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                        <Drawer open={showMenu} anchor="right" onClose={toggleDrawer}>
                            <DrawerList />
                        </Drawer>
                        <button
                            type="button"
                            className="flex h-10 w-10 items-center justify-center rounded-full  lg:hidden"
                            onClick={() => toggleDrawer()}
                        >
                            <MenuIcon fontSize="large" className="text-black" />
                        </button>
                        <div className="border-l-[2px] max-md:hidden max-md:px-2 px-5 cursor-pointer border-[#d8d8d8] ">
                            <div>
                                <CustomMenu menuItems={[{ title: 'Logout', link: '/login' }, { title: 'My Profile', link: '/profile' }]}
                                    onClick={(av: { title: string, link: string }) => {
                                        if (av.link.includes('logout')) {
                                            localStorage.removeItem('login')
                                        }
                                        router.push(av.link)
                                    }
                                    }>
                                    <AccountCircleIcon className="text-[#242424]" fontSize="large" />
                                </CustomMenu>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </header>
    )

}
export default Header