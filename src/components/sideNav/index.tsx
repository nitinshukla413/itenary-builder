'use client'
import { navBarLinks } from "@/utils/constants";
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
const SideNavBar = () => {
    const [expand, setExpand] = useState(true)
    const pathName = usePathname()
    // const searchParams = ''
    const type ='' 
    // searchParams.get('type')
    return (
        <div className="flex py-10">
            <div className="h-[100vh] w-[15vw] max-md:hidden">
                <List>
                    {navBarLinks.map((elem, index) => {
                        const Icons = elem.icon;
                        const isActive = pathName === elem.link;
                        return (
                            <>
                                <ListItem key={index} className={`${isActive ? 'bg-[#4D9FD7]  ' : ''}`}>
                                    <Link href={elem.link} className="w-full" >
                                        <ListItemButton>
                                            <ListItemIcon className="m-0 p-0">
                                                <Icons fontSize="medium" className={`${isActive ? ' text-[#fff]' : 'text-[#000]'}`} />
                                            </ListItemIcon>
                                            <h2 className={`-ml-5 text-lg font-bold ${isActive ? 'text-[#fff]' : 'text-[#5d5d5dee]'}`}>{elem?.title}</h2>
                                        </ListItemButton>
                                    </Link>

                                </ListItem >
                                {elem?.sublinks && expand && <List>
                                    {elem?.sublinks?.map((link: any, i: number) => {
                                        const SubIcon = link.icon
                                        const isLinkActive = elem.link + `?type=${type}` === link.link
                                        return (
                                            <ListItem key={index} className={`ml-10 ${i === 0 ? '' : ''} ${isLinkActive ? 'bg-[#d7efff]' : ''}`}>
                                                <Link href={link.link} className="w-auto" >
                                                    <ListItemButton >
                                                        <ListItemIcon className="m-0 p-0 ml-2">
                                                            <SubIcon fontSize="small" className={`${isLinkActive ? ' text-[#000]' : 'text-[#000]'}`} />
                                                        </ListItemIcon>
                                                        <h2 className={`-ml-6 text-md font-bold ${isLinkActive ? 'text-[#000]' : 'text-[#5d5d5dee]'}`}>{link?.title}</h2>

                                                    </ListItemButton>
                                                </Link>

                                            </ListItem>)
                                    })}
                                </List>
                                }
                            </>
                        )
                    })}
                </List>
            </div>
        </div >
    )
}
export default SideNavBar;