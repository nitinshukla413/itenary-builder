import React from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { TextField } from '@mui/material';
const HotelForms = () => {
  return (
    // <div className='w-full shadow-lg '>
    //   <div className="p-5 flex justify-between ">
    //       <h3 className="text-2xl font-bold text-black">Add Hotel</h3>
    //   </div>
    //   <div className="p-2">
  //   <TextField
  //   id="outlined"
  //   label="Name of City"
  //   placeholder="Enter name of city"
  //   className="w-full"
  // />
  // <TextField
  //   id="outlined"
  //   label="Name of Area"
  //   placeholder="Enter name of area"
  //   className="w-full"
  // />
    //   </div>
    // </div>
    <div className="w-full">
      <div className="w-full flex justify-items-start items-start ml-10">
        <form className="w-full bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <p className="text-2xl font-bold mb-4">Hotel Form</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="destination" className="block text-gray-700 font-bold mb-2">City</label>
              <select id="destination" name="destination" className="select select-bordered w-full max-w-xs">
                <option disabled selected>Select City</option>
                <option>Italy</option>
                <option>Paris</option>
              </select>
            </div>
            <div>
              <label htmlFor="rent" className="block text-gray-700 font-bold mb-2">Rent</label>
              <input type="text" id="rent" name="rent" placeholder="Rent" className="input input-bordered w-full max-w-xs" />
            </div>
            <div>
              <label htmlFor="location" className="block text-gray-700 font-bold mb-2">Areas</label>
              <select id="location" name="location" className="select select-bordered w-full max-w-xs">
                <option disabled selected>Area</option>
                <option>Europe</option>
                <option>North America</option>
              </select>
            </div>
            <div className="col-span-2">
            <fieldset>
                <legend className="block text-gray-700 font-bold mb-2">Room Type</legend>
                <div className="flex space-x-4">
                  <input className="btn" type="radio" name="roomType" id="roomType1" />
                  <label htmlFor="roomType1">Single</label>
                  <input className="btn" type="radio" name="roomType" id="roomType2" />
                  <label htmlFor="roomType2">Double</label>
                  <input className="btn" type="radio" name="roomType" id="roomType3" />
                  <label htmlFor="roomType3">Suite</label>
                </div>
              </fieldset>
            </div>
            <div className="col-span-2">
              <label htmlFor="file" className="block text-gray-700 font-bold mb-2">Upload Image</label>
              <div className="flex items-center justify-between">
                <input type="file" id="file" className="file-input file-input-bordered w-full max-w-xs" />
                <span className="ml-2 text-sm text-gray-600">(Max file size: 5MB)</span>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-4">
            <button type="submit" className="bg-[#4D9FD7] hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md shadow-md">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default HotelForms;
