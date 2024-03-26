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
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import { SingleInputDateRangeField } from '@mui/x-date-pickers-pro/SingleInputDateRangeField';
import { LicenseInfo } from "@mui/x-license";
import Distance from "../../../public/assets/distance.svg"
import {
  FormControl,
  OutlinedInput,
} from '@mui/material';
import { typeOfFood, typeOfFuel, typeOfVehicle } from '@/utils/constants';
import DropDown from '@/components/dropDown';
import Image from 'next/image';
import { DirectionsBoat, Flight } from '@mui/icons-material';
import { useRouter } from 'next/navigation';
import PreviewPdf from '../previewPdf/page';
import { pdf } from '@react-pdf/renderer';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
LicenseInfo.setLicenseKey(
  'x0jTPl0USVkVZV0SsMjM1kDNyADM5cjM2ETPZJVSQhVRsIDN0YTM6IVREJ1T0b9586ef25c9853decfa7709eee27a1e',
);

const Travel = () => {
  const [noOfDays, setNoOfDays] = useState<any[]>([0, 1, 2, 3, 4, 5]);
  const scrollContainerRef = useRef<any>(null); // Create a ref for the scroll container
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
  const handleChangeDays = () => { };
  const route=useRouter();
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

  const [selectedOption, setSelectedOption] = useState(null);

  const handleCheckboxChange = (option: any) => {
    setSelectedOption(option);
  };
  const [selectedRange, setSelectedRange] = useState([null, null]);

  const handleDateRangeChange = (newRange: any) => {
    setSelectedRange(newRange);
  };
  const [selectedFoods, setSelectedFoods] = React.useState([]);

  const handlePreview = async () => {
    const blob = await pdf(<PreviewPdf />).toBlob();
    const url = URL.createObjectURL(blob);
    window.open(url);
  };

  const handleFoodSelection = (event:any) => {
    const value = event.target.value;
    setSelectedFoods((selected:any) => {
      if (selected.includes(value)) {
        return selected.filter((item:any) => item !== value);
      } else {
        return [...selected, value];
      }
    });
  };


  return (
    <div className=' item-center flex w-[100vw] justify-center  bg-[#F7F7F9]'>
      <div className='h-full  w-[80%] py-20 max-md:w-full max-md:p-2 max-md:py-10'>
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
                  className={`flex min-w-60 cursor-pointer items-center justify-center  rounded-3xl p-3 max-md:min-w-full max-md:p-2 ${selectedDay === no ? 'bg-[#4D9FD7]' : 'bg-gray-200 '
                    }`}
                >
                  <h3
                    className={`text-center text-lg font-[400] text-black ${selectedDay === no ? 'text-white' : ''
                      }`}
                  >
                    {value}
                  </h3>
                </div>
              );
            })}
          </div>
          <div
            className={`flex cursor-pointer items-center justify-center  w-10 h-10 rounded-3xl bg-[#4D9FD7] text-white shadow-lg`}
          >
            <AddIcon
              onClick={handleAdd}
              fontSize='medium'
            />
          </div>
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
                <div className='relative -left-2 mb-10 max-md:left-0'>
                  <div className='flex items-center justify-start'>
                    <Checkbox

                      checked={selectedOption === 'Continue'}
                      onChange={() => handleCheckboxChange('Continue')}
                    />
                    <h3 className='text-[#707070ee]'>
                      Continue with Tara Travel logo
                    </h3>
                  </div>
                  <div className='flex items-center justify-start'>
                    <Checkbox

                      checked={selectedOption === 'Custom'}
                      onChange={() => handleCheckboxChange('Custom')}
                    />
                    <h3 className='text-[#707070ee]'>Add Custom</h3>
                  </div>
                  <div className='w-full px-3'>
                    <label className='flex w-[45%] cursor-pointer items-center justify-center space-x-3 bg-gray-200/70 text-white shadow-sm'>
                      <AttachFileIcon fontSize='small' className='text-[#707070ee]' />
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
                      Vendor Name
                    </h2>
                    <TextField
                      id='outlined'
                      label='Name of Vendor'
                      className='w-full'
                      size='small'
                    />
                  </div>
                  <div>
                    <h2 className='mb-4 text-lg font-bold tracking-[0.6px]  text-black'>
                      Vendor Email
                    </h2>
                    <TextField
                      id='outlined'
                      label='Email'

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
                      Select Dates
                    </h2>
                    {/* <DatePicker label="Basic date picker" /> */}
                    <div className='flex w-[80%] cursor-pointer  items-center justify-center space-x-3 bg-gray-200/70'>

                      <LocalizationProvider dateAdapter={AdapterDayjs}>

                        <DateRangePicker
                          slots={{ field: SingleInputDateRangeField }}
                          name="allowedRange"
                          className='w-full'
                          onChange={handleDateRangeChange}

                        />

                      </LocalizationProvider>
                    </div>
                  </div>
                  <div className='mb-10 flex w-full justify-between'>
                    <TextField
                      id='outlined'
                      label='Days'
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
                    menuItems={['Auckland', 'Dunedin', "Hamilton", "Rotorua", "Wellington"]}
                    handleChange={(event: any) => { }}
                    title='Select City'
                    label='Select City'
                    size="small"
                  />
                  <DropDown
                    menuItems={["Sky Tower", "Avon River", " Wellington Museum ", "Harbor City", " Wildlife Sanctuary"]}
                    handleChange={() => { }}
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
                        onChange={handleFoodSelection}
                        value={elem}
                        checked={selectedFoods.includes(elem as never)}
                      />
                      <h3 className='text-[#707070ee]'>{elem}</h3>
                    </div>
                  ))}
                </div>
                <DropDown
                  menuItems={["Delux", "Suite", " Twin Room ", "Double Room", " Triple Room"]}
                  handleChange={() => { }}
                  title='Type of Room'
                  label='Type of Room'
                  size="small"
                />
                <TextField
                  id='outlined'
                  label='Number of Rooms'
                  className='w-full'
                  size="small"
                  type='number'
                  inputProps={{ min: 0, pattern: '[0-9]*' }}
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
                      type='number'
                      inputProps={{ min: 0, pattern: '[0-9]*' }}
                    />
                    <TextField
                      id='outlined'
                      label='Children'
                      placeholder='Children'
                      className='w-[40%]'
                      size="small"
                      type='number'
                      inputProps={{ min: 0, pattern: '[0-9]*' }}
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
                  <div>
                    <div className='flex items-center justify-start space-x-4'>
                      <Checkbox
                        {...label}
                        onChange={() => {
                          handleUpdatePackage({
                            key1: 'transport',
                            key2: 'flightAvailable',
                            elem: !selectedDayPackage['transport']['flightAvailable'],
                          });
                        }}
                        checked={selectedDayPackage['transport']['flightAvailable']}
                      />
                      <h3 className='text-[#707070ee]'>Flight Available</h3>
                    </div>
                    <div className='flex items-center justify-between space-x-4 py-2'>
                      <div className="relative flex items-center rounded-3xl bg-gray-900/10 py-1.5 px-3 text-xs uppercase text-gray-900">
                        <span className="text-[#6F7787] p-1">Queenstown</span>
                      </div>
                      <div>
                        <Image height={30} alt='distance' width={30} src={Distance} />
                      </div>
                      <div className="relative flex items-center rounded-3xl bg-gray-900/10 py-1.5 px-3 text-xs uppercase text-gray-900">
                        <span className="text-[#6F7787] p-1">Auckland</span>
                      </div>
                      <div className="relative flex text-xs items-center space-x-2">
                        <Flight style={{ color: '#707070ee', transform: 'rotate(320deg)' }} />
                        <span className="text-lg text-[#707070ee]">3.2 hr </span>
                      </div>
                    </div>
                  </div>
                  <div className='flex flex-col items-start justify-start'>
                    <div className='flex items-center'>
                      <Checkbox
                        {...label}
                        onChange={() => {
                          handleUpdatePackage({
                            key1: 'transport',
                            key2: 'baggageIncluded',
                            elem: !selectedDayPackage['transport']['baggageIncluded'],
                          });
                        }}
                        checked={selectedDayPackage['transport']['baggageIncluded']}
                      />
                      <h3 className='text-[#707070ee] ml-2'>Include baggage</h3>
                    </div>
                    <div className='w-full py-2'>
                      <TextField
                        id='outlineds'
                        label='Baggage Weight'
                        placeholder='Baggage Weight'
                        className='w-full'
                        size="small"
                      />
                    </div>
                  </div>

                  <div>
                    <div className='flex items-center justify-start space-x-4'>
                      <Checkbox
                        {...label}
                        onChange={() => {
                          handleUpdatePackage({
                            key1: 'transport',
                            key2: 'flightAvailable',
                            elem: !selectedDayPackage['transport']['flightAvailable'],
                          });
                        }}
                        checked={selectedDayPackage['transport']['flightAvailable']}
                      />
                      <h3 className='text-[#707070ee]'>Ferry Available</h3>
                    </div>
                    <div className='flex items-center justify-between space-x-4 py-2'>
                      <div className="relative flex items-center rounded-3xl bg-gray-900/10 py-1.5 px-3 text-xs uppercase text-gray-900">
                        <span className="text-[#6F7787] p-1">Queenstown</span>
                      </div>
                      <div>
                        <Image height={30} alt="distance" width={30} src={Distance} />
                      </div>
                      <div className="relative flex items-center rounded-3xl bg-gray-900/10 py-1.5 px-3 text-xs uppercase text-gray-900">
                        <span className="text-[#6F7787] p-1">Auckland</span>
                      </div>
                      <div className="relative flex text-xs items-center space-x-2">
                        <DirectionsBoat style={{ color: '#707070ee' }} />
                        <span className="text-lg text-[#707070ee]">3.2 hr </span>
                      </div>
                    </div>
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
                <div className='flex w-full justify-between '>
                  {!lastDay && (
                    <div className='w-[45%] flex justify-between space-x-8'>
                      <CustomButton title='Preview' variant='secondary' onClick={handlePreview} />
                      <CustomButton title='Save PDF' variant='secondary' onClick={() => { }} />
                    
                    </div>
                  )}
                  <div className={`${!lastDay ? 'w-[50%]' : 'w-full'}`}>
                    {' '}
                    <CustomButton title='Continue' onClick={handleContinue} />
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
