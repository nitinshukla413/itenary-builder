import React from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { CardHeader, Checkbox, Divider, TextField } from '@mui/material';
import DropDown from '@/components/dropDown';
import AttachFileIcon from "@mui/icons-material/AttachFile";
import Button from '@/components/button';
import { typeOfFood } from '@/utils/constants';
const label = { inputProps: { "aria-label": "Checkbox demo" } };


const HotelForms = () => {
  return (
    <div className='max-md:w-full  p-10 w-[90%] bg-white border   shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-xl '>
      <CardHeader title='Add Hotel' className='font-bold text-[#696969ee]' sx={{ px: 1, py: 2, '& .MuiCardHeader-title': { letterSpacing: '.15px' } }} />
      <Divider />
      <div className='py-5 w-full flex flex-col justify-center items-center'>
        <div className="w-full flex flex-col justify-center items-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full">
            <div className="">
              <TextField
                id="outlined"
                label="Hotel Name"
                placeholder="Hotel Name"
                className="w-full"
              />
            </div>
            <div className="">
              <TextField
                id="outlined"
                label="Hotel Address"
                placeholder="Hotel Address"
                className="w-full"
              />
            </div>
            <div className="">
              <DropDown
                menuItems={['Paris', 'New York', 'XYS']}
                handleChange={() => { }}
                title="City"
                label="City"
              />
            </div>
            <div className="">
              <DropDown
                menuItems={['UK', 'New York', 'XYS']}
                handleChange={() => { }}
                title="Country"
                label="Country"
              />
            </div>
            <div className="">
              <DropDown
                menuItems={['Deluxe Room', 'Mini Suite', 'Double room', 'President Suite']}
                handleChange={() => { }}
                title="Room Type"
                label="Room Type"
              />
            </div>
            <div className="flex">
              <div className="w-[35%] mr-5">
                <DropDown
                  menuItems={['Peak Price', 'Normal Price']}
                  handleChange={() => { }}
                  title="Price Type"
                  label="Price Type"
                />
              </div>
              <div className="w-[65%]">
                <TextField
                  id="outlined"
                  label="Room Rate"
                  placeholder="$100"
                  className="w-full"
                  type="number"
                  inputProps={{ min: 0, pattern: '[0-9]*' }}
                />
              </div>
            </div>
            <div className="">
              <label className="flex cursor-pointer space-x-3 bg-gray-200/70 w-full justify-center items-center text-white">
                <AttachFileIcon fontSize="small" className="text-[#707070ee]" />
                <h1 className="cursor-pointer text-[#707070ee] py-2 px-4 rounded">Upload Hotel Images</h1>
                <input type="file" id="uploadFile1" className="hidden" />
              </label>
              <span className="ml-2 text-sm text-gray-600">(Max file size: 5MB)</span>
            </div>
            <div className="flex space-x-3 max-md:space-x-0 flex-wrap justify-start items-start">
              {[
                typeOfFood.Breakfast,
                typeOfFood["Packed Lunch"],
                typeOfFood.Lunch,
                typeOfFood.Dinner
              ].map((elem, i) => (
                <div key={i} className="flex items-center">
                  <Checkbox {...label} onChange={() => { }} />
                  <h3 className="text-[#707070ee]">{elem}</h3>
                </div>
              ))}
            </div>
          </div>


        </div>
        <div className='w-full flex justify-center items-center'>
          <div className="w-[40%] flex justify-center items-center  my-10 max-md:w-full ">
            <Button title="Submit"></Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelForms;
