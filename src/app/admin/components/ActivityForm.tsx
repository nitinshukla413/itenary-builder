import DropDown from '@/components/dropDown';
import { CardHeader, Divider, FormControl, InputAdornment, OutlinedInput, TextField } from '@mui/material';
import React from 'react';
import AttachFileIcon from "@mui/icons-material/AttachFile";
import Button from '@/components/button';

const ActivityForm = () => {
  return (
    <div className='max-md:w-full bg-white shadow-lg p-10 w-[90%] border rounded-xl'>
      <CardHeader title='Add Activity' className='font-bold text-[#000]' sx={{ px: 1, py: 2, '& .MuiCardHeader-title': { letterSpacing: '.15px' } }} />
      <Divider />
      <div className='py-5'>
        <div className="w-full flex flex-col justify-start items-start">
          <div className="flex flex-wrap w-full">
            <div className="w-[93%]  mr-10 mb-5 max-md:w-full ">
              <TextField
                id="outlined"
                label="Activity Name"
                placeholder="Enter name of activity name"
                className="w-full max-md:w-full "
              />
            </div>
            <div className="w-[93%]  mb-10 max-md:w-full ">
              <FormControl className="w-full" >
                <OutlinedInput maxRows={6} minRows={5} placeholder="Enter description " multiline />
              </FormControl>
            </div>
            <div className='w-full flex flex-wrap space-x-10'>
              <div className="w-[45%]  mb-10 max-md:w-full ">
                <DropDown
                  menuItems={['Paris', 'New york', 'XYS']}
                  handleChange={() => {
                  }}
                  title="City" label="City"
                />
              </div>
              <div className="w-[45%]  mb-10 max-md:w-full ">
                <DropDown
                  menuItems={['UK', 'New york', 'XYS']}
                  handleChange={() => {
                  }}
                  title="Country" label="Country"
                />
              </div>
            </div>
          
            <div className="w-[45%] mr-10 mb-10 max-md:w-full ">
              <TextField
                id="outlined"
                label="Duration"
                placeholder="1 hour"
                type="number"
                className="w-full max-md:w-full"
              />
            </div>
            <div className="w-[45%] mr-10 mb-10 max-md:w-full ">
              <TextField
                id="outlined"
                label="Cost"
                placeholder="$100"
                type="number"
                className="w-full max-md:w-full"
              />
            </div>
            <div className="w-[45%]  mb-10 max-md:w-full ">
              <DropDown
                menuItems={['Destination 1', 'Destination 2', 'Destination 3']}
                handleChange={() => {
                }}
                title="Associated Destinations" label="Associated Destinations"
              />
            </div>
          </div>
          <div
            className="w-[50%] max-md:w-full mb-2">
            <label
              className="flex cursor-pointer space-x-3  bg-gray-200/70 w-[50%] justify-center items-center text-white ">
              <AttachFileIcon
                fontSize="small"
                className="text-[#707070ee]"
              />
              <h1 className="cursor-pointer text-[#707070ee] py-2 px-4 rounded">
                Upload Activity Images

              </h1>
              <input type="file" id='uploadFile1' className="hidden" />
            </label>
            <span className="ml-2 text-sm text-gray-600">(Max file size: 5MB)</span>
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

export default ActivityForm;
