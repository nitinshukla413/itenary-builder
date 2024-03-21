'use client'
import { links } from "@/utils/constants"
import Link from "next/link"
import { usePathname } from 'next/navigation'
import MenuIcon from '@mui/icons-material/Menu';
import Image from "next/image";
import Logo from '../../../public/travel-tara.png'
const Header = () => {
    const currentPage = usePathname();
    if (currentPage === "/login")
        return <></>
    return <div className="p-2  px-10 flex justify-between items-center bg-[#F7F7F9]  w-full">
        <div className='flex'>
            <div
                className="flex justify-end items-end">
                <div
                data-aos={'fade-in'} 
                    className={`h-30 w-20 `}>
                    <Image
                        src={Logo} alt="image" objectFit="contain" className='w-full h-full' />
                </div>
                <div data-aos={'zoom-out'} data-aos-offset="0" data-aos-delay="300" className={`flex -ml-5 -mb-2 relative flex-col justify-center items-center`}>
                    <h2 className={`font-[700] text-[#4e4e4eee]  text-md tracking-[5px] `}>Tara</h2>
                    <h2 className={`text-[#5d5d5dee] text-md tracking-widest -mt-1`}>Travels</h2>
                </div>
            </div>
        </div>
        <div className="flex max-md:hidden w-[70%] justify-end space-x-20 items-center">
            {links.map((l,i) => <Link key={i} href={l.link} className="link link-hover text-[18px] wider font-[600] text-black">{l.title}</Link>)}
            <div className="avatar">
                <div className="w-10 rounded-full">
                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
            </div>
        </div>
        <div className="lg:hidden">
            <MenuIcon fontSize="large" className="text-black " />
        </div>
    </div >
}
export default Header