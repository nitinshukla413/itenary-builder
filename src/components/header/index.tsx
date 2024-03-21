'use client'
import { links } from "@/utils/constants"
import Link from "next/link"
import { usePathname } from 'next/navigation'
import MenuIcon from '@mui/icons-material/Menu';
const Header = () => {
    const currentPage = usePathname();
    if (currentPage === "/login")
        return <></>
    return <div className="p-5 flex justify-between items-center bg-white  w-full">
        <h1 className="text-black text-lg font-bold widest">Tara Travels</h1>
        <div className="flex max-md:hidden w-[70%] justify-end space-x-20 items-center">
            {links.map(l => <Link href={l.link} className="link link-hover text-[18px] wider font-[600] text-black">{l.title}</Link>)}
            <div className="avatar">
                <div className="w-10 rounded-full">
                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
            </div>
        </div>
        <div className="lg:hidden">
        <MenuIcon fontSize="large" className="text-black "/>
        </div>
    </div>
}
export default Header