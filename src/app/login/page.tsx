'use client'
import { useState } from 'react';
import Image from 'next/image';
import Logo from '../../../public/travel-tara.png';
import TextField from '@mui/material/TextField';
import Link from 'next/link';
import { Box, Button, InputAdornment } from '@mui/material';
import { AccountCircle } from '@mui/icons-material';
import { useRouter } from 'next/navigation';
import KeyIcon from '@mui/icons-material/Key';

const Login = (props: any) => {
    const [isClicked, setIsClicked] = useState(false);
    const handleClick = () => {
        setIsClicked(true);
    };
    const router=useRouter()
    const handleLogin = () => {
        router.push('/')
        localStorage.setItem('login',"true")
    }

    return (
        <div className={`flex flex-col justify-center bg-black/20 bg-blend-overlay items-center h-screen bg-[url('../../public/assets/background.png')] bg-fill w-[100vw] h-[100vh]  no-repeat`}>
        <div onClick={handleClick} className={`w-full flex flex-col justify-center items-center relative ${isClicked ? '-top-20 max-md:top-0' : ''}`}>
            <div
                className="flex flex-col relative justify-center items-center">
                <div
                    data-aos={isClicked ? 'fade-up' : 'zoom-in'}
                    className={` py-3 ${isClicked ? 'h-[30vh] w-[20vw] relative -right-5 max-md:right-0 max-md:w-full max-md:h-[25vh]' : 'h-[45vh] w-[30vw] relative -right-10 max-md:-right-3 max-md:h-[40vh] max-md:w-full '}`}>
                    <Image
                        src={Logo} alt="image" objectFit="contain" className='w-full h-full' />
                </div>
                <div data-aos={'zoom-out'} data-aos-offset="0" data-aos-delay="300" className={`flex ${isClicked ? 'flex-row justify-end items-end space-x-2 relative left-[5px] ' : 'relative left-[10px]  flex-col justify-center items-center '}`}>
                    <h2 className={`font-[700] text-[#4e4e4eee]   ${isClicked ? 'text-3xl tracking-[3px]' : 'text-[70px] tracking-[10px]  -mt-3'}`}>Tara</h2>
                    <h2 className={` text-[#5d5d5dee]  ${isClicked ? 'text-lg tracking-[3px]' : 'text-2xl -mt-4 tracking-widest'}`}>Travels</h2>
                </div>
            </div>
            {isClicked && (
                <div data-aos="slide up" data-aos-delay="1000" className="py-10 w-[20%] max-md:w-4/5 flex flex-col justify-center items-center ">
                    <div className='w-full flex-col justify-center items-center'>
                        <Box className='flex items-end w-full justify-center ' >
                            <AccountCircle sx={{ color: '#4e4e4eee', mr: 1, my: 0.5 }} />
                            <TextField InputLabelProps={{
                                style: { color: '#4e4e4eee', fontWeight: 500, letterSpacing: 1 },
                            }}
                                id="input-with-sx" label="Username" className={`text-[#4e4e4eee]  w-full`} variant="standard" />
                        </Box>
                        <Box className='flex items-end w-full justify-center my-5 ' >
                            <KeyIcon sx={{ color: '#4e4e4eee', mr: 1, my: 0.5 }} />
                            <TextField InputLabelProps={{
                                style: { color: '#4e4e4eee', fontWeight: 500, letterSpacing: 1 },
                            }}
                                id="input-with-sx" label="Password" className={`text-[#4e4e4eee]  w-full`} variant="standard" />
                        </Box>

                    </div>
                    <Button variant="contained" onClick={handleLogin} style={{
                        backgroundColor: "#4e4e4eee",
                        margin: 20,
                        width: '70%'
                    }}>
                        Login
                    </Button>

                </div>

            )}
        </div>
        </div>

    );
};

export default Login;
