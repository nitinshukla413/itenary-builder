'use client';
import React, { useRef, useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import Summary from '@/components/summary';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import CustomButton from '../../components/button';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import {
  FormControl,
  OutlinedInput,
} from '@mui/material';
import { typeOfFood, typeOfFuel, typeOfVehicle } from '@/utils/constants';
import DropDown from '@/components/dropDown';
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const Travel = () => {
  const [noOfDays, setNoOfDays] = useState<any[]>([0, 1, 2, 3, 4, 5]);
  const scrollContainerRef = useRef(null); // Create a ref for the scroll container
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
      summary: '',
    },
  });
  const handlePackage = (val: any) => {
    setSelectedDay({ ...selectedDayPackage, ...val });
  };
  const [selectedDay, setSelectedDay] = useState<any>(0);
  const handleSelect = (val: any) => {
    setSelectedDay(val);
  };
  const handleAdd = () => {
    let updatedDays = [...noOfDays];
    updatedDays.push(noOfDays?.length);
    setNoOfDays(updatedDays);
    setSelectedDay(updatedDays.length - 1);
    setTimeout(() => {
      const container = scrollContainerRef.current;
      if (container) {
        container.scrollLeft = container?.scrollWidth - container?.clientWidth;
      }
    }, 300);
  };
  const handleChangeDays = () => {};
  const handleUpdatePackage = ({
    key1,
    key2,
    elem,
  }: {
    key1: any;
    key2: any;
    elem: any;
  }) => {
    let updatedSelectedDayPackage = selectedDayPackage;
    updatedSelectedDayPackage[key1][key2] = elem;
    handlePackage(updatedSelectedDayPackage);
  };
  const handleContinue = () => {
    if (selectedDay < noOfDays?.length - 1) setSelectedDay(selectedDay + 1);
  };
  const lastDay = selectedDay === noOfDays?.length - 1;
  return (
    <div className=' item-center flex w-[100vw] justify-center  bg-[#F7F7F9]'>
      <div className='h-full  w-[80%] p-10 max-md:w-full max-md:p-2 max-md:py-10'>
        {/* header */}
        <div className='flex w-full items-center justify-center  space-x-[10px] max-md:space-x-2'>
          <div
            ref={scrollContainerRef}
            style={{
              scrollbarWidth: 'none',
            }}
            className='scrollbar-hide no-scrollbar flex w-full items-center justify-between overflow-x-scroll rounded-3xl bg-gray-200 shadow-md'
          >
            {noOfDays?.map((no: any) => {
              let value = `Day ${no}`;
              if (no === 0) {
                value = `Cover`;
              }
              return (
                <div
                  key={no}
                  onClick={() => handleSelect(no)}
                  className={`flex min-w-60 cursor-pointer items-center justify-center  rounded-3xl p-3 max-md:min-w-full max-md:p-2 ${
                    selectedDay === no ? 'bg-[#4D9FD7]' : 'bg-gray-200 '
                  }`}
                >
                  <h3
                    className={`text-center text-lg font-[400] text-black ${
                      selectedDay === no ? 'text-white' : ''
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
            fontSize='large'
            className={`flex cursor-pointer items-center justify-center rounded-3xl bg-[#4D9FD7] text-white shadow-lg`}
          />
        </div>
        {/* header */}
        <div className='my-10 flex flex-row items-start justify-between max-md:my-5 max-md:flex-col max-md:items-center max-md:justify-center'>
          <div className='w-[60%] space-y-5 max-md:w-full max-md:p-5'>
            <h2 className='mb-10 text-3xl font-[600] text-black'>
              {selectedDay === 0 ? 'Cover' : 'Day ' + selectedDay}
            </h2>
            {selectedDay === 0 ? (
              <div className='flex w-full flex-col '>
                <h2 className='mb-2 text-lg font-[600] text-black'>
                  Choose your logo
                </h2>
                <div className='relative -left-2 mb-10 max-md:left-0 '>
                  <div className='flex items-center justify-start'>
                    <Checkbox {...label} defaultChecked />
                    <h3 className='text-[#707070ee]'>
                      Continue with Tara Travel logo
                    </h3>
                  </div>
                  <div className='flex items-center justify-start'>
                    <Checkbox {...label} defaultChecked />
                    <h3 className='text-[#707070ee]'>Add Custom</h3>
                  </div>
                  <div className='w-full px-3'>
                    <label className=' flex w-[45%] cursor-pointer items-center  justify-center space-x-3 bg-gray-200/70 text-white shadow-sm '>
                      <AttachFileIcon
                        fontSize='small'
                        className='text-[#707070ee]'
                      />
                      <h1 className='cursor-pointer rounded px-4 py-2 text-[#707070ee]'>
                        Upload logo
                      </h1>
                      <input type='file' id='uploadFile1' className='hidden' />
                    </label>
                  </div>
                </div>
                <div className='mb-10 w-[60%] space-y-10'>
                  <div>
                    <h2 className='mb-4 text-lg font-bold tracking-[0.6px] text-black'>
                      Company Name
                    </h2>
                    <TextField
                      id='outlined'
                      label='Name of company'
                      placeholder='Enter name of company'
                      className='w-full'
                      size='small'
                    />
                  </div>
                  <div>
                    <h2 className='mb-4 text-lg font-bold tracking-[0.6px]  text-black'>
                      Company Email
                    </h2>
                    <TextField
                      id='outlined'
                      label='Email'
                      placeholder='Enter email'
                      className='w-full'
                      size='small'
                    />
                  </div>
                  <div>
                    <h2 className='mb-4 text-lg font-bold tracking-[0.6px]  text-black'>
                      Contact Number
                    </h2>
                    <TextField
                      id='outlined'
                      label='Contact number'
                      placeholder='Enter contact number'
                      className='w-full'
                      size='small'
                    />
                  </div>
                  <div>
                    <h2 className='mb-2 text-lg font-[600] tracking-[0.6px] text-black'>
                      Title
                    </h2>
                    <TextField
                      id='standard-multiline-flexible'
                      label='Title'
                      placeholder='Add title'
                      variant='standard'
                      className='w-full'
                    />
                  </div>
                  <div>
                    <h2 className='wider mb-5 text-lg font-[600] text-black'>
                      Selected Date
                    </h2>
                    {/* <DatePicker label="Basic date picker" /> */}
                    <div className='flex w-[80%] cursor-pointer  items-center justify-center space-x-3 bg-gray-200/70'>
                      <CalendarMonthIcon
                        fontSize='small'
                        className='text-[#707070ee]'
                      />
                      <h1 className='cursor-pointer rounded px-4 py-2 text-[#707070ee]'>
                        Select dates
                      </h1>
                      <input id='file-upload' type='file' className='hidden' />
                    </div>
                  </div>
                  <div className='mb-10 flex w-full justify-between'>
                    <TextField
                      id='outlined'
                      label='Days'
                      placeholder='Days'
                      className='w-[40%]'
                      type='number'
                      size='small'
                      inputProps={{ min: 0, pattern: '[0-9]*' }}
                    />
                    <TextField
                      id='outlined'
                      label='Nights'
                      placeholder='Nights'
                      className='w-[40%]'
                      type='number'
                      size='small'
                      inputProps={{ min: 0, pattern: '[0-9]*' }}
                    />
                  </div>
                </div>
                <CustomButton
                  title='Continue'
                  onClick={handleContinue}
                ></CustomButton>
              </div>
            ) : (
              <div className='flex w-[70%] flex-col space-y-10'>
                <div className='space-y-5'>
                  <h2 className='wider mb-2 text-lg font-bold text-black'>
                    City
                  </h2>
                  <DropDown
                    menuItems={['Paris', 'Italy']}
                    handleChange={(event: any) => {}}
                    title='Select City'
                    label='Select City'
                    size="small"
                  />
                  <DropDown
                    menuItems={['ParaCelling', 'Jumping']}
                    handleChange={() => {}}
                    title='Activities'
                    label='Activities'
                    size="small"
                  />
                </div>
                <div className='space-y-5 '>
                  <h2 className='wider mb-2  text-lg font-bold text-black'>
                    Accommodations
                  </h2>
                  <TextField
                    id='outlined'
                    label='Search hotel'
                    placeholder='Search hotel'
                    className='w-full'
                    size='small'
                  />
                </div>
                <div className='flex items-center justify-start space-x-5'>
                  {[
                    typeOfFood.Breakfast,
                    typeOfFood['Packed Lunch'],
                    typeOfFood.Lunch,
                    typeOfFood.Dinner,
                  ].map((elem, i) => (
                    <div key={i} className='flex items-center justify-start'>
                      <Checkbox
                        {...label}
                        onChange={() =>
                          handleUpdatePackage({
                            key1: 'accomodation',
                            key2: 'food',
                            elem: elem,
                          })
                        }
                        checked={
                          selectedDayPackage['accomodation']['food'] === elem
                        }
                      />
                      <h3 className='text-[#707070ee]'>{elem}</h3>
                    </div>
                  ))}
                </div>
                <TextField
                  id='outlined'
                  label='Type of Rooms'
                  placeholder='Enter type of rooms'
                  className='w-full'
                  size="small"
                />
                <TextField
                  id='outlined'
                  label='Number of Rooms'
                  placeholder='Enter number of rooms'
                  className='w-full'
                  size="small"
                />
                <div className='flex flex-col space-y-5'>
                  <h2 className='text-md wider mb-4 font-[300] text-black'>
                    Occupancy per room:
                  </h2>
                  <div className='flex items-start justify-between'>
                    <TextField
                      id='outlined'
                      label='Adults'
                      placeholder='Adults'
                      className='w-[40%]'
                      size="small"
                    />
                    <TextField
                      id='outlined'
                      label='Children'
                      placeholder='Children'
                      className='w-[40%]'
                      size="small"
                    />
                  </div>
                  <TextField
                    id='outlineds'
                    label='Bed configuration'
                    placeholder='Select bed configurations'
                    className='w-full'
                    size="small"
                  />
                </div>
                <div className='space-y-5 '>
                  <h2 className='wider mb-2  text-lg font-bold text-black'>
                    Transportation Details
                  </h2>
                  <DropDown
                    menuItems={[typeOfVehicle.Bike, typeOfVehicle.Car]}
                    handleChange={(event: any) => {
                      handleUpdatePackage({
                        key1: 'transport',
                        key2: 'vehicleType',
                        elem: event.target.value,
                      });
                    }}
                    size="small"
                    title='Select Vehicle'
                    label='Select Vehicle'
                    value={selectedDayPackage['transport']['vehicleType']}
                  />

                  <DropDown
                    menuItems={[typeOfFuel.Petrol, typeOfFuel.Diesel]}
                    handleChange={(event: any) => {
                      handleUpdatePackage({
                        key1: 'transport',
                        key2: 'fuelType',
                        elem: event.target.value,
                      });
                    }}
                    size="small"
                    title='Fuel Type'
                    label='Fuel Type'
                    value={selectedDayPackage['transport']['fuelType']}
                  />
                  <div className='flex items-center justify-start'>
                    <Checkbox
                      {...label}
                      onChange={() => {
                        handleUpdatePackage({
                          key1: 'transport',
                          key2: 'flightAvailable',
                          elem: !selectedDayPackage['transport'][
                            'flightAvailable'
                          ],
                        });
                      }}
                      checked={
                        selectedDayPackage['transport']['flightAvailable']
                      }
                    />
                    <h3 className='text-[#707070ee]'>Flight Available</h3>
                  </div>
                  <div className='flex items-center justify-start'>
                    <Checkbox
                      {...label}
                      onChange={() => {
                        handleUpdatePackage({
                          key1: 'transport',
                          key2: 'baggageIncluded',
                          elem: !selectedDayPackage['transport'][
                            'baggageIncluded'
                          ],
                        });
                      }}
                      checked={
                        selectedDayPackage['transport']['baggageIncluded']
                      }
                    />
                    <h3 className='text-[#707070ee]'>Include baggage</h3>
                  </div>
                  <div className='flex items-center justify-start'>
                    <Checkbox
                      {...label}
                      onChange={() => {
                        handleUpdatePackage({
                          key1: 'transport',
                          key2: 'ferryAvailable',
                          elem: !selectedDayPackage['transport'][
                            'ferryAvailable'
                          ],
                        });
                      }}
                      checked={
                        selectedDayPackage['transport']['ferryAvailable']
                      }
                    />
                    <h3 className='text-[#707070ee]'>Ferry Available</h3>
                  </div>
                  <FormControl className='w-full'>
                    <OutlinedInput
                      minRows={5}
                      maxRows={5}
                      placeholder='Enter summary of the day'
                      multiline
                    />
                  </FormControl>
                </div>
                <div className='flex w-full justify-between'>
                  {!lastDay && (
                    <div className='w-[35%]'>
                      <CustomButton
                        title='Save PDF'
                        variant='secondary'
                        onClick={() => {}}
                      ></CustomButton>
                    </div>
                  )}
                  <div className={` ${!lastDay ? 'w-[50%]' : 'w-full'}`}>
                    {' '}
                    <CustomButton
                      title='Continue'
                      onClick={handleContinue}
                    ></CustomButton>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className='w-[30%] max-md:w-full max-md:p-5'>
            <Summary />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Travel;
