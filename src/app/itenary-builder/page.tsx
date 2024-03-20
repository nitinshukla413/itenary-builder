"use client";
import React, { useRef, useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Summary from "@/components/summary";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import CustomButton from "../../components/button";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { FormControl, InputLabel, MenuItem, OutlinedInput, Select } from "@mui/material";
import { typeOfFood, typeOfFuel, typeOfVehicle } from "@/utils/constants";
const label = { inputProps: { "aria-label": "Checkbox demo" } };

const Travel = () => {
  const [noOfDays, setNoOfDays] = useState<any[]>([0, 1, 2, 3, 4, 5]);
  const [package, setPackage] = useState<any[]>([]);
  const [selectedDayPackage, setSelectedDayPackage] = useState<any>({
    city: '',
    acitivity: '',
    accomodation: {
      hotel: '',
      food: '',
      typeOfRooms: '',
      noOfRooms: 0,
    },
    occupancy: {
      adults: 0,
      children: 0,
      bedConfig: '',
    },
    transport: {
      vehicleType: '',
      fuelType: '',
      flightAvailable: true,
      baggageIncluded: true,
      ferryAvailable: true,
      summary: ''
    }
  });
  const handlePackage = (val: any) => {
    setSelectedDay({ ...selectedDayPackage, ...val });
  }
  const [selectedDay, setSelectedDay] = useState<any>(1);
  const handleSelect = (val: any) => {
    setSelectedDay(val);
  };
  const handleAdd = () => {
    let updatedDays = [...noOfDays];
    updatedDays.push(noOfDays?.length);
    setNoOfDays(updatedDays);
  };
  const handleChangeDays = () => { };
  const handleUpdatePackage = ({ key1, key2, elem }) => {
    let updatedSelectedDayPackage = selectedDayPackage
    updatedSelectedDayPackage[key1][key2] = elem
    handlePackage(updatedSelectedDayPackage)
  }
  return (
    <div className="bg-white w-[100vw] flex justify-center  item-center">
      <div className="w-[80%]  max-md:w-full h-full p-10 max-md:p-2 max-md:p-2">
        {/* header */}
        <div className="flex justify-center items-center space-x-[10px] max-md:space-x-2 w-full">
          <div className="flex rounded-3xl w-full overflow-x-scroll scrollbar-hide no-scrollbar bg-gray-200 justify-between items-center">
            {noOfDays?.map((no: any) => {
              let value = `Day ${no}`;
              if (no === 0) {
                value = `Cover`;
              }
              return (
                <div
                  onClick={() => handleSelect(no)}
                  className={`p-3 cursor-pointer min-w-60 max-md:p-2 max-md:min-w-full  rounded-3xl flex justify-center items-center ${selectedDay === no ? "bg-blue-400" : "bg-gray-200 "
                    }`}
                >
                  <h3
                    className={`text-black text-center text-lg font-[400] ${selectedDay === no ? "text-white" : ""
                      }`}
                  >
                    {value}
                  </h3>
                </div>
              );
            })}
          </div>
          <AddIcon
            onClick={handleAdd}
            color={"white"}
            fontSize="large"
            className={`cursor-pointer rounded-3xl flex justify-center items-center bg-blue-400`}
          />
        </div>
        {/* header */}
        <div className="flex flex-row justify-between items-start my-10 max-md:my-5 max-md:flex-col max-md:justify-center max-md:items-center">
          <div className="w-[60%] space-y-5 max-md:w-full max-md:p-5">
            <h2 className="text-3xl font-[600] text-black">
              {selectedDay === 0 ? "Cover" : "Day " + selectedDay}
            </h2>
            {selectedDay === 0 ? (
              <div className="flex flex-col space-y-10 w-full">
                <div>
                  <div className="flex justify-start items-center">
                    <Checkbox {...label} defaultChecked />
                    <h3 className="text-[#707070ee]">
                      Continue with Tara Travel logo
                    </h3>
                  </div>
                  <div className="flex justify-start items-center">
                    <Checkbox {...label} defaultChecked />
                    <h3 className="text-[#707070ee]">Add Custom</h3>
                  </div>
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
                </div>
                <div className="w-[60%] space-y-10">
                  <div>
                    <h2 className="text-black font-bold wider mb-5">
                      Company Name
                    </h2>
                    <TextField
                      id="outlined"
                      label="Name of company"
                      placeholder="Enter name of company"
                      className="w-full"
                    />
                  </div>
                  <div>
                    <h2 className="text-black font-bold wider  mb-5">
                      Company Email
                    </h2>
                    <TextField
                      id="outlined"
                      label="Email"
                      placeholder="Enter email"
                      className="w-full"
                    />
                  </div>
                  <div>
                    <h2 className="text-black font-bold wider  mb-5">
                      Contact Number
                    </h2>
                    <TextField
                      id="outlined"
                      label="Contact number"
                      placeholder="Enter contact number"
                      className="w-full"
                    />
                  </div>
                  <div>
                    <h2 className="text-black text-lg font-[600] wider mb-2">
                      Title
                    </h2>
                    <TextField
                      id="standard-multiline-flexible"
                      label="Title"
                      placeholder="Add title"
                      variant="standard"
                      className="w-full"
                    />
                  </div>
                  <div>
                    <h2 className="text-black text-lg font-[600] wider mb-5">
                      Selected Date
                    </h2>
                    <div className="flex cursor-pointer space-x-3  bg-gray-200/70 w-[80%] justify-center items-center">
                      <CalendarMonthIcon
                        fontSize="small"
                        className="text-[#707070ee]"
                      />
                      <h1 className="cursor-pointer text-[#707070ee] py-2 px-4 rounded">
                        Select dates
                      </h1>
                      <input id="file-upload" type="file" className="hidden" />
                    </div>
                  </div>
                  <div className="w-full flex justify-between">
                    <TextField
                      id="outlined"
                      label="Days"
                      placeholder="Days"
                      className="w-[40%]"
                      type="number"
                    />
                    <TextField
                      id="outlined"
                      label="Nights"
                      placeholder="Nights"
                      className="w-[40%]"
                      type="number"
                    />
                  </div>
                </div>
                <CustomButton title="Continue"></CustomButton>
              </div>
            ) : (
              <div className="flex flex-col space-y-10 w-[70%]">
                <div className="space-y-5">
                  <h2 className="text-black text-lg font-bold wider mb-2">
                    City
                  </h2>
                  <TextField
                    id="outlined"
                    label="City"
                    placeholder="Select city"
                    className="w-full"
                  />
                  <TextField
                    id="outlined"
                    label="Activities"
                    placeholder="Select activities"
                    className="w-full"
                  />
                </div>
                <div className="space-y-5 ">
                  <h2 className="text-black text-lg  font-bold wider mb-2">
                    Accommodations
                  </h2>
                  <TextField
                    id="outlined"
                    label="Search hotel"
                    placeholder="Search hotel"
                    className="w-full"
                  />
                </div>
                <div className="flex justify-start items-center space-x-5">
                  {[typeOfFood.Breakfast, typeOfFood["Packed Lunch"], typeOfFood.Lunch, typeOfFood.Dinner].map(elem => <div className="flex justify-start items-center">
                    <Checkbox {...label} onChange={() => handleUpdatePackage({ key1: 'accomodation', key2: 'food', elem: elem })} checked={selectedDayPackage['accomodation']['food'] === elem} />
                    <h3 className="text-[#707070ee]">
                      {elem}
                    </h3>
                  </div>)}
                </div>
                <TextField
                  id="outlined"
                  label="Type of Rooms"
                  placeholder="Enter type of rooms"
                  className="w-full"
                />
                <TextField
                  id="outlined"
                  label="Number of Rooms"
                  placeholder="Enter number of rooms"
                  className="w-full"
                />
                <div className="flex flex-col space-y-5" >
                  <h2 className="text-black text-md wider font-[300] mb-4">
                    Occupancy per room:
                  </h2>
                  <div className="flex justify-between items-start">
                    <TextField
                      id="outlined"
                      label="Adults"
                      placeholder="Adults"
                      className="w-[40%]"
                    />
                    <TextField
                      id="outlined"
                      label="Children"
                      placeholder="Children"
                      className="w-[40%]"
                    />
                  </div>
                  <TextField
                    id="outlineds"
                    label="Bed configuration"
                    placeholder="Select bed configurations"
                    className="w-full"
                  />
                </div>
                <div className="space-y-5 ">
                  <h2 className="text-black text-lg  font-bold wider mb-2">
                    Transportation Details
                  </h2>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Select Vehicle</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={selectedDayPackage['transport']['vehicleType']}
                      label="Select Vehicle"
                      onChange={(event) => {
                        handleUpdatePackage({ key1: 'transport', key2: 'vehicleType', elem: event.target.value })
                      }}
                    >
                      {[typeOfVehicle.Bike, typeOfVehicle.Car].map(veh => <MenuItem value={veh}>{veh}</MenuItem>)}
                    </Select>
                  </FormControl>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Fuel Type</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={selectedDayPackage['transport']['fuelType']}
                      label="Fuel Type"
                      onChange={(event) => {
                        handleUpdatePackage({ key1: 'transport', key2: 'fuelType', elem: event.target.value })
                      }}
                    >
                      {[typeOfFuel.Petrol, typeOfFuel.Diesel].map(veh => <MenuItem value={veh}>{veh}</MenuItem>)}
                    </Select>
                  </FormControl>
                  <div className="flex justify-start items-center">
                    <Checkbox {...label} onChange={() => {
                      handleUpdatePackage({ key1: 'transport', key2: 'flightAvailable', elem: !selectedDayPackage['transport']['flightAvailable'] })

                    }} checked={selectedDayPackage['transport']['flightAvailable']} />
                    <h3 className="text-[#707070ee]">
                      Flight Available
                    </h3>
                  </div>
                  <div className="flex justify-start items-center">
                    <Checkbox {...label} onChange={() => {
                      handleUpdatePackage({ key1: 'transport', key2: 'baggageIncluded', elem: !selectedDayPackage['transport']['baggageIncluded'] })

                    }} checked={selectedDayPackage['transport']['baggageIncluded']} />
                    <h3 className="text-[#707070ee]">
                      Include baggage
                    </h3>
                  </div>
                  <div className="flex justify-start items-center">
                    <Checkbox {...label} onChange={() => {
                      handleUpdatePackage({ key1: 'transport', key2: 'ferryAvailable', elem: !selectedDayPackage['transport']['ferryAvailable'] })

                    }} checked={selectedDayPackage['transport']['ferryAvailable']} />
                    <h3 className="text-[#707070ee]">
                      Ferry Available
                    </h3>
                  </div>
                  <FormControl className="w-full" >
                 <OutlinedInput placeholder="Enter summary of the day" multiline />
               </FormControl>
                </div>
              </div>
            )}
          </div>
          <div className="w-[30%] max-md:w-full max-md:p-5">
            <Summary />
          </div>
        </div>
      </div>
    </div >
  );
};

export default Travel;
