import React from 'react';

const DestinationForm = () => {
  return (
    <div className="max-w-md mx-auto bg-white shadow-xl rounded-md p-6 m-5">
      <h2 className="text-2xl font-bold mb-4">Destination Form</h2>
      <form className="space-y-4">
        <div className="flex flex-col space-y-5">
          <input type="text" placeholder="Select Destination" className="input input-bordered w-full max-w-xs" />
          <textarea className="textarea textarea-bordered w-full max-w-xs" placeholder="Destination Description"></textarea>
          <select className="select select-bordered w-full max-w-xs">
            <option disabled selected>Location</option>
            <option>Country</option>
            <option>City</option>
          </select>
          <input type="text" placeholder="Points of Interest" className="input input-bordered w-full max-w-xs" />
          <div className="col-span-2">
            <label htmlFor="file" className="block text-gray-700 font-bold mb-2">Upload Image</label>
            <div className="flex items-center justify-between">
              <input type="file" id="file" className="file-input file-input-bordered w-full max-w-xs" />
              <span className="ml-2 text-sm text-gray-600">(Max file size: 5MB)</span>
            </div>
          </div>
        </div>
        <button type="submit" className="bg-[#4D9FD7] hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md shadow-md">Submit</button>
      </form>
    </div>
  );
};

export default DestinationForm;
