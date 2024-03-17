import { useState } from 'react';
import Image from 'next/image';
import Logo from '../../../public/travel-tara.png';


const SplashScreen = (props: any) => {
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(true);
    };

    return (
        <div onClick={handleClick} className={`flex flex-col relative ${isClicked ? '-top-20' : ''}`}>
            <div data-aos={isClicked ? 'fade-up' : 'zoom-in'} className="flex flex-col relative">
                <Image src={Logo} alt="image" layout="responsive" objectFit="contain" className={`h-[25vh] w-[30vw] relative ${isClicked ? '' : ''}`} />
                <div className="flex flex-col justify-center items-center">
                    <h3 data-aos={isClicked ? 'fade-up' : ''} className={`text-[50px] font-bold max-md:text-[20px] ${isClicked ? 'invisible' : 'visible'}`}>Tara Travels</h3>
                </div>
            </div>
            {isClicked && (
                <div data-aos="slide up" data-aos-delay="1000" className="flex flex-col justify-center items-center">
                   
                </div>
            )}
        </div>
    );
};

export default SplashScreen;
