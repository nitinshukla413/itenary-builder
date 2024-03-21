import DropDown from '@/components/dropDown';
import { FormControl, OutlinedInput, TextField } from '@mui/material';
import React from 'react';
import AttachFileIcon from "@mui/icons-material/AttachFile";
import Button from '@/components/button';

const ActivityForm = () => {
  return (
    <div className='max-md:w-full shadow-lg p-10 w-[80%] border rounded-xl'>
      <div className="flex justify-between mb-5">
        <h3 className="text-2xl font-bold text-black">Add Activity</h3>
      </div>
      <div className="w-full flex flex-col justify-start items-start">
        <div className="flex flex-wrap w-full">
          <div className="w-[45%]  mr-10 mb-5 max-md:w-full ">
            <TextField
              id="outlined"
              label="Activity Name"
              placeholder="Enter name of activity name"
              className="w-full max-md:w-full "
            />
          </div>

          <div className="w-[45%] mr-10 mb-10 max-md:w-full ">
            <TextField
              id="outlined"
              label="Location"
              placeholder="Enter location"
              className="w-full max-md:w-full"
            />
          </div>
          <div className="w-[90%]  mb-10 max-md:w-full ">
            <FormControl className="w-full" >
              <OutlinedInput minRows={6} placeholder="Enter description " multiline />
            </FormControl>
          </div>
          <div className="w-[45%] mr-10 mb-10 max-md:w-full ">
            <TextField
              id="outlined"
              label="Duration"
              placeholder="Enter duration"
              className="w-full max-md:w-full"
            />
          </div>
          <div className="w-[45%] mr-10 mb-10 max-md:w-full ">
            <TextField
              id="outlined"
              label="Cost"
              placeholder="Enter cost"
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
        <div
          className="w-[50%] max-md:w-full mb-2">
          <label
            for="uploadFile1"
            className="flex cursor-pointer space-x-3  bg-gray-200/70 w-[50%] justify-center items-center text-white ">
            <AttachFileIcon
              fontSize="small"
              className="text-[#707070ee]"
            />
            <h1 className="cursor-pointer text-[#707070ee] py-2 px-4 rounded">
              Upload File

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
        <div>
          <label htmlFor="destinations" className="block text-gray-700 font-semibold">Associated Destinations</label>
          <select id="destinations" name="destinations" multiple className="select select-bordered w-full max-w-xs">
            <option>Destination 1</option>
            <option>Destination 2</option>
            <option>Destination 3</option>
          </select>
        </div>
        <button type="submit" className="bg-[#4D9FD7] hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md shadow-md">Submit</button>
      </form>
      </div>
    </div>
  );
};

export default ActivityForm;
