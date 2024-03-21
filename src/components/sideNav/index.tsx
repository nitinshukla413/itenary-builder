'use client'
import { navBarLinks } from "@/utils/constants";
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import Link from "next/link";
import { useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
const SideNavBar = () => {
    const [expand, setExpand] = useState(true)
    const pathName = usePathname()
    const searchParams = useSearchParams()
    const type = searchParams.get('type')||'hotel'
    return (
        <div className="flex py-10">
            <div className="h-[100vh] w-[15vw] ">
                <List>
                    {navBarLinks.map((elem, index) => {
                        const Icons = elem.icon;
                        return (
                            <>
                                <ListItem key={index} className={`${pathName === elem.link ? 'bg-[#4D9FD7]  ' : ''}`}>
                                    <Link href={elem.link} className="w-full" >
                                        <ListItemButton>
                                            <ListItemIcon className="m-0 p-0">
                                                <Icons fontSize="medium" className={`${pathName === elem.link ? ' text-[#fff]' : 'text-[#000]'}`} />
                                            </ListItemIcon>
                                            <h2 className={`-ml-5 text-lg font-bold ${pathName === elem.link ? 'text-[#fff]' : 'text-[#5d5d5dee]'}`}>{elem?.title}</h2>
                                        </ListItemButton>
                                    </Link>

                                </ListItem >
                                {elem?.sublinks && expand && <List>
                                    {elem?.sublinks?.map((link: any, i: number) => {
                                        const SubIcon = link.icon
                                        return (
                                            <ListItem key={index} className={`ml-10 ${i === 0 ? '-mt-5' : ''}`}>
                                                <Link href={link.link} className="w-full" >
                                                    <ListItemButton >
                                                        <ListItemIcon className="m-0 p-0 ml-2">
                                                            <SubIcon fontSize="small" className="text-[#000]" />
                                                        </ListItemIcon>
                                                        <h3  className="-ml-6 text-md font-bold text-[#5d5d5dee]">{link?.title}</h3>
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