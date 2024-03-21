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
      <CardHeader title='Add Hotel' className='font-bold text-[#000]' sx={{ px: 1, py: 2, '& .MuiCardHeader-title': { letterSpacing: '.15px' } }} />
      <Divider />
      <div className='py-5'>
        <div className="w-full flex flex-col justify-start items-start">
          <div className="flex flex-wrap w-full">
            <div className="w-[45%]  mr-10 mb-5 max-md:w-full ">
              <TextField
                id="outlined"
                label="Hotel Name"
                placeholder="Hotel Name"
                className="w-full max-md:w-full "
              />
            </div>
            <div className="w-[45%]  mb-10 max-md:w-full ">
              <TextField
                id="outlined"
                label=" Hotel Address"
                placeholder="Hotel Address"
                className="w-full max-md:w-full"
              />
            </div>
            <div className='w-full flex flex-wrap space-x-10'>
              <div className="w-[45%]  mb-10 max-md:w-full ">
                <DropDown
                  className="w-full"
                  menuItems={['Paris', 'New york', 'XYS']}
                  handleChange={(event) => {
                  }}
                  title="City" label="City"
                />
              </div>
              <div className="w-[45%]  mb-10 max-md:w-full ">
                <DropDown
                  className="w-full"
                  menuItems={['UK', 'New york', 'XYS']}
                  handleChange={(event) => {
                  }}
                  title="Country" label="Country"
                />
              </div>
            </div>
            <div className="w-[45%] mr-10 mb-10 max-md:w-full ">
              <DropDown
                className="w-full"
                menuItems={['Double Bed', 'Single Bed', 'Delux']}
                handleChange={(event) => {
                }}
                title="Room Type" label="Room Type"
              />
            </div>
            <div className="w-[45%]  mb-10 max-md:w-full ">
              <TextField
                id="outlined"
                label=" Room Rate"
                placeholder=" Room Rate"
                className="w-full max-md:w-full"
              />
            </div>
            <div
              className="w-[30%] mx-4 mr-10 max-md:w-full mb-2">
              <label
                for="uploadFile1"
                className="flex cursor-pointer space-x-3  bg-gray-200/70 w-full justify-center items-center text-white ">
                <AttachFileIcon
                  fontSize="small"
                  className="text-[#707070ee]"
                />
                <h1 className="cursor-pointer text-[#707070ee] py-2 px-4 rounded">
                  Upload Hotel Images
                </h1>
                <input type="file" id='uploadFile1' className="hidden" />
              </label>
              <span className="ml-2 text-sm text-gray-600">(Max file size: 5MB)</span>
            </div>
            <div className="flex  justify-start items-start space-x-5">
              {[typeOfFood.Breakfast, typeOfFood["Packed Lunch"], typeOfFood.Lunch, typeOfFood.Dinner].map(elem => <div className="flex justify-start items-center">
                <Checkbox {...label} onChange={() => { }} />
                <h3 className="text-[#707070ee]">
                  {elem}
                </h3>
              </div>)}
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
