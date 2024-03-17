'use client'
import React, { useRef, useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import Summary from '@/components/summary';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const Travel = () => {
  const [noOfDays, setNoOfDays] = useState<any[]>([0, 1, 2, 3, 4, 5]);
  const [selectedDay, setSelectedDay] = useState<any>(0)
  const handleSelect = (val: any) => {
    setSelectedDay(val)
  }
  const handleAdd = () => {
    let updatedDays = [...noOfDays]
    updatedDays.push(noOfDays?.length)
    setNoOfDays(updatedDays)
  }
  return (
    <div className="bg-white w-[100vw] flex justify-center  item-center">
      <div className="w-[80%] h-full p-10">
        {/* header */}
        <div className="flex justify-center items-center space-x-[10px] ">
          <div className="flex rounded-3xl w-full overflow-x-scroll scrollbar-hide no-scrollbar bg-gray-200 justify-between items-center">
            {noOfDays?.map((no: any) => {
              let value = `Day ${no}`
              if (no === 0) {
                value = `Cover`
              }
              return <div onClick={() => handleSelect(no)} className={`p-3 cursor-pointer min-w-60 rounded-3xl flex justify-center items-center ${selectedDay === no ? 'bg-blue-400' : 'bg-gray-200 '}`}>
                <h3 className={`text-black text-center text-[17px] font-[400] ${selectedDay === no ? 'text-white' : ''}`}>{value}</h3>
              </div>
            })
            }
          </div>
          <AddIcon onClick={handleAdd} color={'white'} fontSize='large' className={`cursor-pointer rounded-3xl flex justify-center items-center bg-blue-400`} />
        </div>
        {/* header */}
        <div className='flex flex-row justify-between items-center my-10'>
          <div className='w-[60%] space-y-4'>
            <h2 className="text-3xl font-[600] text-black">Cover</h2>
            <div className="flex justify-start items-center">
            <Checkbox {...label} defaultChecked />
              <h3 className="text-[#707070ee]">Continue with Tara Travel logo</h3>
            </div>
            <div className="flex justify-start items-center">
            <Checkbox {...label} defaultChecked />
              <h3 className="text-[#707070ee]">Add Custom</h3>
            </div>
            <div className="flex cursor-pointer space-x-3  bg-gray-200/70 w-[30%] justify-center items-center">
              <AttachFileIcon fontSize='small' className='text-[#707070ee]' />
              <h1 className="cursor-pointer text-[#707070ee] py-2 px-4 rounded">
                Upload File
              </h1>
              <input id="file-upload" type="file" className="hidden" />
            </div>
            <div className='w-[60%] space-y-5'>
              <div>
                <h2 className='text-black font-bold wider mb-5'>Company Name</h2>
                <TextField
                  id="outlined"
                  label="Name of company"
                  placeholder='Enter name of company'
                  className='w-full'
                />
              </div>
              <div>
                <h2 className='text-black font-bold wider mb-5'>Company Email</h2>
                <TextField
                  id="outlined"
                  label="Email"
                  placeholder='Enter email'
                  className='w-full'
                />
              </div>
              <div>
                <h2 className='text-black font-bold wider mb-5'>Contact Number</h2>
                <TextField
                  id="outlined"
                  label="Contact number"
                  placeholder='Enter contact number'
                  className='w-full'
                />
              </div>
              <div>
                <h2 className='text-black font-bold wider mb-5'>Title</h2>
                <TextField
                  id="standard-multiline-flexible"
                  label="Title"
                  variant="standard"
                  className="w-full"
                />
              </div>
            </div>
            <Button title="Continue"></Button>
          </div>

          <div className='w-[30%]'>
            <Summary />
          </div>
        </div>

      </div>
    </div>
  )
}

export default Travel