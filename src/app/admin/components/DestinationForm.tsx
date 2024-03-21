import DropDown from '@/components/dropDown';
import { CardHeader, Divider, FormControl, InputAdornment, OutlinedInput, TextField } from '@mui/material';
import React from 'react';
import AttachFileIcon from "@mui/icons-material/AttachFile";
import Button from '@/components/button';

const DestinationForm = () => {
  return (
    <div className='max-md:w-full bg-white shadow-lg p-10 w-[90%] border rounded-xl'>
      <CardHeader title='Add Destination' className='font-bold text-[#000]' sx={{ px: 1, py: 2, '& .MuiCardHeader-title': { letterSpacing: '.15px' } }} />
      <Divider />
      <div className='py-5'>
        <div className="w-full flex flex-col justify-start items-start">
          <div className="flex flex-wrap w-full">
            <div className="w-[45%]  mr-10 mb-5 max-md:w-full ">
              <TextField
                id="outlined"
                label="Vendor Name"
                placeholder="Vendor Name"
                className="w-full max-md:w-full "
              />
            </div>
            <div className="w-[45%]  mb-10 max-md:w-full ">
              <DropDown
                className="w-full"
                menuItems={['Two Wheeler', 'four Wheeler', 'XYS']}
                handleChange={(event) => {
                }}
                title="Type of Vehicle" label="Type of Vehicle"
              />
            </div>
            <div className="w-[45%] mr-10  mb-10 max-md:w-full ">
              <DropDown
                className="w-full"
                menuItems={['Petrol', 'Diesel', 'Gas']}
                handleChange={(event) => {
                }}
                title="Type Of Fuel" label="Type Of Fuel"
              />
            </div>
            <div className="w-[45%]  mb-10 max-md:w-full ">
              <DropDown
                className="w-full"
                menuItems={['Paris', 'New york', 'XYS']}
                handleChange={(event) => {
                }}
                title="City" label="City"
              />
            </div>
            <div className="w-[45%] mr-10  mb-10 max-md:w-full ">
              <DropDown
                className="w-full"
                menuItems={['UK', 'New york', 'XYS']}
                handleChange={(event) => {
                }}
                title="Country" label="Country"
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
                className="w-full"
                menuItems={['Destination 1', 'Destination 2', 'Destination 3']}
                handleChange={(event) => {
                }}
                title="Associated Destinations" label="Associated Destinations"
              />
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

export default DestinationForm;
