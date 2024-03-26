'use client'
import { links } from "@/utils/constants"
import Link from "next/link"
import { usePathname } from 'next/navigation'
import MenuIcon from '@mui/icons-material/Menu';
import Image from "next/image";
import Logo from '../../../public/tara-logo.svg'
import { Box, Drawer, List, ListItem, ListItemButton, ListItemIcon } from "@mui/material";
import { useState } from "react";
const Header = () => {
    const [open, setOpen] = useState(false)
    const currentPage = usePathname();
    const toggleDrawer = () => {
        setOpen(val => !val)
    }
    const pathName = usePathname()
    if (currentPage === "/login")
        return <></>
    const list = (anchor: any) => (
        <List>
            {links.map((elem, index) => {
                const isActive = pathName === elem.link;
                return <ListItem key={index} className={`${isActive ? 'bg-[#4D9FD7]  ' : ''}`}>
                    <Link href={elem.link} className="w-full" >
                        <ListItemButton>
                            <h2 className={`-ml-5 text-lg font-bold ${isActive ? 'text-[#fff]' : 'text-[#5d5d5dee]'}`}>{elem?.title}</h2>
                        </ListItemButton>
                    </Link>
                </ListItem>
            })}
        </List>

    );
    return <div className="p-2  px-10 flex justify-between items-center bg-[#F7F7F9]  w-full">
        <Drawer
            anchor={'right'}
            open={open}
            onClose={toggleDrawer}
        >
            {list('right')}
        </Drawer>
        <div className='flex'>
            <div
                className="flex justify-end items-end p-5 ">
                <div
                    data-aos={'fade-in'}
                    className={`h-30 w-20`}>
                    <Image
                        src={Logo} alt="image" objectFit="contain" className='w-full h-full' />
                </div>
             
            </div>
        </div>
        <div className="flex max-md:hidden w-[70%] justify-end space-x-20 items-center">
            {links.map((l, i) => <Link key={i} href={l.link} className="link link-hover text-[18px] wider font-[600] text-black">{l.title}</Link>)}
            <div className="avatar">
                <div className="w-10 rounded-full">
                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
            </div>
        </div>
        <div className="lg:hidden" onClick={toggleDrawer}>
            <MenuIcon fontSize="large" className="text-black " />
        </div>
    </div >
}
export default Header