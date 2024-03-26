import DropDown from '@/components/dropDown';
import { CardHeader, Divider, FormControl, InputAdornment, OutlinedInput, TextField } from '@mui/material';
import React from 'react';
import AttachFileIcon from "@mui/icons-material/AttachFile";
import Button from '@/components/button';

const DestinationForm = () => {
  return (
    <div className='max-md:w-full bg-white shadow-lg p-10 w-[90%] border rounded-xl'>
      <CardHeader title='Add Destination' className='font-bold text-[#696969ee]' sx={{ px: 1, py: 2, '& .MuiCardHeader-title': { letterSpacing: '.15px' } }} />
      <Divider />
      <div className='py-5'>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          <div className="flex justify-center items-center">
            <TextField
              id="outlined"
              label="Vendor Name"
              placeholder="Vendor Name"
              className="w-full"
            />
          </div>
          <div className="flex justify-center items-center">
            <DropDown
              menuItems={['Two Wheeler', 'Four Wheeler', 'XYS']}
              handleChange={() => { }}
              title="Type of Vehicle"
              label="Type of Vehicle"
            />
          </div>
          <div className="flex justify-center items-center">
            <DropDown
              menuItems={['Petrol', 'Diesel', 'Gas']}
              handleChange={() => { }}
              title="Type Of Fuel"
              label="Type Of Fuel"
            />
          </div>
          <div className="flex justify-center items-center">
            <DropDown
              menuItems={['Paris', 'New York', 'XYS']}
              handleChange={() => { }}
              title="City"
              label="City"
            />
          </div>
          <div className="flex justify-center items-center">
            <DropDown
              menuItems={['UK', 'New York', 'XYS']}
              handleChange={() => { }}
              title="Country"
              label="Country"
            />
          </div>
          <div className="flex justify-center items-center">
            <TextField
              id="outlined"
              label="Cost"
              placeholder="$100"
              type="number"
              inputProps={{ min: 0, pattern: '[0-9]*' }}
              className="w-full"
            />
          </div>
          <div className="flex justify-center items-center">
            <DropDown
              menuItems={['Destination 1', 'Destination 2', 'Destination 3']}
              handleChange={() => { }}
              title="Associated Destinations"
              label="Associated Destinations"
            />
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
