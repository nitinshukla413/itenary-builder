'use client'
import React, { useState } from 'react'
import HotelForms from './components/HotelForms'
import ActivityForm from './components/ActivityForm'
import DestinationForm from './components/DestinationForm'
const typeOfForms = {
  'hotel': 'hotel',
  'activity': 'activity',
  'destination': 'destination',
}
const AdminForms = () => {
  const [typeOfForm, setTypeOfForm] = useState<'hotel' | 'activity' | 'destination'>('hotel')
  const forms = ['hotel', 'activity', 'destination']
  const handleSelect = (val: any) => {
    setTypeOfForm(val)
  }
  const getForm = () => {
    switch (typeOfForm) {
      case typeOfForms.hotel:
        return <HotelForms />
      case typeOfForms.activity:
        return <ActivityForm />
      case typeOfForms.destination:
        return <DestinationForm />
      default:
        break;
    }
  }
  return (
    <div className="bg-white w-[100vw] flex justify-center  item-center ">
      <div className="flex flex-col w-[15%] bg-[#dfdfdfee] py-10">
        {forms.map(elem => {
          return <h3 onClick={() => handleSelect(elem)} className={`${typeOfForm === elem ? 'bg-[#4D9FD7] text-white' : ''}  cursor-pointer p-3 px-10 text-black  text-xl font-[500]`}>{elem[0]?.toUpperCase() + elem?.slice(1)}</h3>
        })}
      </div>
      <div className='flex flex-col py-20 w-full justify-center items-center'>
        {getForm()}
      </div>
    </div>
  )
}

export default AdminForms