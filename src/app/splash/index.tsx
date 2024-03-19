import { useState } from 'react';
import Image from 'next/image';
import Logo from '../../../public/travel-tara.png';
import TextField from '@mui/material/TextField';
import Link from 'next/link';

const SplashScreen = (props: any) => {
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(true);
    };

    return (
        <div onClick={handleClick} className={`flex flex-col relative ${isClicked ? '-top-20' : ''}`}>
            <div data-aos={isClicked ? 'fade-up' : 'zoom-in'} className="flex flex-col relative">
                <Image src={Logo} alt="image" layout="responsive" objectFit="contain" className={`h-[25vh] w-[30vw] relative ${isClicked ? 'h-[10vh] w-[10vw]' : ''}`} />
                <div className="flex flex-col justify-center items-center">
                    <h3 data-aos={isClicked ? 'fade-up' : ''} className={`text-[50px] font-bold max-md:text-[20px] ${isClicked ? 'invisible' : 'visible'}`}>Tara Travels</h3>
                </div>
            </div>
            {isClicked && (
                <div data-aos="slide up" data-aos-delay="1000" className="flex flex-col justify-center items-center w-full">
                    <TextField id="standard-basic" label="User Name" variant="standard" />
                    <TextField id="standard-basic" label="Password" variant="standard" />
                    <Link href="/itenary-builder">
                    <button className="btn m-5 btn-xs sm:btn-sm md:btn-md lg:btn-lg">Submit</button>
                    </Link>
                </div>
            )}
        </div>
    );
};

export default SplashScreen;
