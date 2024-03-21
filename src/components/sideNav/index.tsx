'use client'
import { navBarLinks } from "@/utils/constants";
import { Icon, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import Link from "next/link";
import { useState } from "react";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
const SideNavBar = () => {
    const [expand, setExpand] = useState(true)
    return (
        <div className="flex py-10">
            <div className="h-[100vh] w-[15vw] ">
                <List>
                    {navBarLinks.map((elem, index) => {
                        const Icons = elem.icon;
                        console.log(Icons, ", {elem.icon}")
                        return (
                            <>
                                <ListItem key={index}>
                                    <ListItemButton>
                                        <ListItemIcon className="m-0 p-0">
                                            <Icons fontSize="medium" className="text-[#000]" />
                                        </ListItemIcon>
                                        <Link href={elem.link} className="-ml-5 text-lg font-bold text-[#5d5d5dee]">{elem?.title}</Link>
                                    </ListItemButton>
                                </ListItem>
                                {elem?.sublinks && expand && <List>
                                    {elem?.sublinks?.map((link: any, i: number) => {
                                        const SubIcon = link.icon
                                        return (
                                            <ListItem key={index} className={`ml-10 ${i === 0 ? '-mt-5' : ''}`}>
                                                <ListItemButton >
                                                    <ListItemIcon className="m-0 p-0 ml-2">
                                                        <SubIcon fontSize="small" className="text-[#000]" />
                                                    </ListItemIcon>
                                                    <Link href={link.link} className="-ml-6 text-md font-bold text-[#5d5d5dee]">{link?.title}</Link>
                                                </ListItemButton>
                                            </ListItem>)
                                    })}
                                </List>}
                            </>
                        )
                    })}
                </List>
            </div>
        </div>
    )
}
export default SideNavBar;