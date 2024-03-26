'use client';
import { useState } from 'react';
import Image from 'next/image';
import Logo from '../../../public/travel-tara.png';
import TextField from '@mui/material/TextField';
import { motion } from 'framer-motion';
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
      className="h-screen w-full  bg-[#8dd7fe5e] bg-[url('../../public/assets/dubai.webp')] bg-blend-overlay "
      style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <motion.div
        initial={{ y: 0 }}
        animate={{
          y: isClicked ? -60 : 0,
        }}
        transition={{ duration: 0.5 }}
        onClick={handleClick}
        className={` relative flex h-full w-full flex-col items-center justify-center`}
      >
        <motion.div
          animate={{
            scale: isClicked ? [] : [1, 0.9, 0.8, 0.7],
          }}
          transition={{ type: 'spring', duration: 1 }}
          className='relative flex flex-col items-center justify-center'
        >
          <motion.div
            className={` py-3 ${isClicked ? 'relative -right-5 h-[30vh] w-[20vw] max-md:right-0 max-md:h-[25vh] max-md:w-full' : 'relative -right-14 h-[50vh] w-[35vw] max-md:-right-3 max-md:h-[40vh] max-md:w-full '}`}
          >
            <Image
              src={Logo}
              alt='image'
              objectFit='contain'
              className='h-full w-full'
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
            className={`flex ${isClicked ? 'relative left-[5px] flex-row items-end justify-end space-x-2 ' : 'relative left-[10px]  flex-col items-center justify-center '}`}
          >
            <h2
              className={`font-[700] text-[#032e56ee]   ${isClicked ? 'text-3xl tracking-[3px]' : '-mt-3 text-[70px]  tracking-[10px]'}`}
            >
              Tara
            </h2>
            <h2
              className={` text-[#032e56ee]  ${isClicked ? 'text-lg tracking-[3px]' : '-mt-4 text-3xl font-[600] tracking-widest'}`}
            >
              Travels
            </h2>
          </motion.div>
        </motion.div>
        {isClicked && (
          <motion.div className='flex w-[20%] flex-col items-center justify-center py-10 max-md:w-4/5 '>
            <div className='w-full flex-col items-center justify-center'>
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1 }}
                style={{ transformOrigin: 'left' }}
              >
                <Box className='flex w-full items-end justify-center '>
                  <AccountCircle
                    fontSize='large'
                    sx={{ color: '#4e4e4eee', mr: 2 }}
                  />
                  <TextField
                    InputLabelProps={{
                      style: {
                        color: '#4e4e4eee',
                        fontWeight: 500,
                        letterSpacing: 1,
                      },
                    }}
                    id='input-with-md'
                    label='Username'
                    className={`w-full  text-[#4e4e4eee]`}
                    variant='standard'
                  />
                </Box>
              </motion.div>
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 0.4 }}
                style={{ transformOrigin: 'left' }}
              >
                <Box className='my-5 flex w-full items-end justify-center '>
                  <KeyIcon
                    fontSize='large'
                    sx={{ color: '#4e4e4eee', mr: 2 }}
                  />
                  <TextField
                    InputLabelProps={{
                      style: {
                        color: '#4e4e4eee',
                        fontWeight: 500,
                        letterSpacing: 1,
                      },
                    }}
                    id='input-with-md'
                    label='Password'
                    className={`w-full  text-[#4e4e4eee]`}
                    variant='standard'
                  />
                </Box>
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
            >
              <Button
                variant='contained'
                onClick={handleLogin}
                style={{
                  backgroundColor: '#4e4e4eee',
                  margin: 20,
                  width: '70%',
                }}
              >
                Login
              </Button>
            </motion.div>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default Login;
