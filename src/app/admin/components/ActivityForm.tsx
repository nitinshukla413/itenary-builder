import React from 'react';

const ActivityForm = () => {
  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded-md p-6">
      <h2 className="text-2xl font-bold mb-4">Activity Form</h2>
      <form className="space-y-4">
        <div>
          <label htmlFor="activityName" className="block text-gray-700 font-semibold">Activity Name</label>
          <input type="text" id="activityName" name="activityName" className="input input-bordered w-full max-w-xs" />
        </div>
        <div>
          <label htmlFor="description" className="block text-gray-700 font-semibold">Description</label>
          <textarea id="description" name="description" rows={3} className="input input-bordered w-full max-w-xs"></textarea>
        </div>
        <div>
          <label htmlFor="location" className="block text-gray-700 font-semibold">Location</label>
          <input type="text" id="location" name="location" className="input input-bordered w-full max-w-xs" />
        </div>
        <div>
          <label htmlFor="duration" className="block text-gray-700 font-semibold">Duration</label>
          <input type="text" id="duration" name="duration" className="input input-bordered w-full max-w-xs" />
        </div>
        <div>
          <label htmlFor="cost" className="block text-gray-700 font-semibold">Cost</label>
          <input type="text" id="cost" name="cost" className="input input-bordered w-full max-w-xs" />
        </div>
        <div>
          <label htmlFor="image" className="block text-gray-700 font-semibold">Image Upload</label>
          <input type="file" id="image" name="image" className="file-input file-input-bordered w-full max-w-xs" />
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
  );
};

export default ActivityForm;
