'use client';
import { useState } from 'react';
import Image from 'next/image';
import Logo from '../../../public/travel-logo.gif';
import TextField from '@mui/material/TextField';
import { motion, AnimatePresence } from 'framer-motion';
import { Box, Button, InputAdornment, makeStyles, styled } from '@mui/material';
import { AccountCircle } from '@mui/icons-material';
import { useRouter } from 'next/navigation';
import KeyIcon from '@mui/icons-material/Key';

const Login = (props: any) => {
  const [isClicked, setIsClicked] = useState(false);
  const handleClick = () => {
    setIsClicked(true);
  };
  const router = useRouter();
  const handleLogin = () => {
    router.push('/');
    localStorage.setItem('login', 'true');
  };

  return (
    <div
      className="h-screen w-full bg-[#fffefe47] bg-[url('../../public/assets/image.jpg')] bg-blend-lighten"
      style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <motion.div
        initial={{ y: 0 }}
        animate={{
          y: isClicked ? -10 : 0, // Adjusted the y value for smoother animation
        }}
        transition={{ duration: 1 }} // Increased the duration for smoother transition
        onClick={handleClick}
        className={` relative flex h-full w-full flex-col items-center justify-center`}
      >
        <motion.div
          initial={{ translateY: -30 }}
          transition={{ delay: 3, duration: 1 }}
          className={`flex flex-col justify-center item-center rounded-lg max-md:w-[90%] w-[30%] ${
            isClicked ? ' bg-white bg-opacity-30 shadow-lg backdrop-blur-4.5' : ''
          }`}
        >
          <motion.div
            layoutId="logo" // Added layoutId for shared layout animation
            animate={{
              scale: isClicked ? 1 : [1, 0.9, 0.5, 0.8],
            }}
            transition={{ type: 'spring', duration: 1.5 }} // Increased the duration for smoother transition
            className={`relative flex flex-col items-center justify-center`}
          >
            <motion.div
              className={` py-1 ${
                isClicked
                  ? 'relative -right-5 h-[19vh] w-[20vw] max-md:right-0 max-md:h-[25vh] max-md:w-full '
                  : 'relative -right-14 h-[60vh] w-[60vw] max-md:-right-3 max-md:h-[40vh] max-md:w-[90vw] max-md:mb-10 '
              }`}
            >
              <Image src={Logo} alt="image" objectFit="contain" className="h-full w-full" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 1 }}
              className={`flex  ${isClicked ? 'relative left-[5px] flex-row items-end justify-end space-x-2 -mt-5 ' : '-mt-20 relative left-[10px]  flex-col items-center justify-center '}`}
            >
              <h2 className={`font-[700] text-black   ${isClicked ? 'text-3xl tracking-[3px]' : '-mt-3 text-[70px]  tracking-[10px]'}`}>Tara</h2>
              <h2 className={` text-black  ${isClicked ? 'text-lg tracking-[3px]' : '-mt-4 text-3xl font-[600] tracking-widest'}`}>Travels</h2>
            </motion.div>
          </motion.div>
          <AnimatePresence>
            {isClicked && (
              <motion.div
                layoutId="form" // Added layoutId for shared layout animation
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }} // Added exit animation
                transition={{ duration: 0.8, delay: 0.2 }} // Added delay and increased duration for smoother transition
                className="flex w-full px-10 max-md:mx-0 flex-col items-center justify-center py-10 max-md:w-full rounded-lg p-5"
              >
                <div className="w-full flex-col items-center justify-center py-10 space-y-8">
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 1, delay: 0.4 }} // Added delay for smoother transition
                    style={{ transformOrigin: 'left' }}
                  >
                    <Box className="flex w-full items-end justify-center ">
                      <AccountCircle sx={{ color: '#333333', fontSize: 30, mr: 2 }} />
                      <input
                        type="text"
                        placeholder="Username"
                        className="text-lg w-full bg-transparent text-black placeholder-black outline-none border-b focus:border-b-2 border-black focus:border-blue-500 transition-colors duration-300 ease-in-out"
                      />
                    </Box>
                  </motion.div>
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 1, delay: 0.6 }} // Added delay for smoother transition
                    style={{ transformOrigin: 'left' }}
                  >
                    <Box className="my-5 flex w-full items-end justify-center ">
                      <KeyIcon fontSize="medium" sx={{ color: '#333333', fontSize: 30, mr: 2 }} />
                      <input
                        type="password"
                        placeholder="Password"
                        className="text-lg w-full bg-transparent text-black placeholder-black outline-none border-b focus:border-b-2 border-black focus:border-blue-500 transition-colors duration-300 ease-in-out"
                      />
                    </Box>
                  </motion.div>
                </div>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8, duration: 1 }}>
                  <Button variant="contained" onClick={handleLogin} style={{ backgroundColor: '#333333' }}>
                    Login
                  </Button>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Login;