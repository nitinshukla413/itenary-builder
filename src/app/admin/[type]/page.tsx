'use client'
import React, { useState } from 'react'
import HotelForms from '../components/HotelForms'
import ActivityForm from '../components/ActivityForm'
import DestinationForm from '../components/DestinationForm'
import Layout from '@/components/layout'
import { usePathname, useRouter } from 'next/navigation'
import { AddIcCall } from '@mui/icons-material'
import HotelIcon from '@mui/icons-material/Hotel';
import AddLocationIcon from '@mui/icons-material/AddLocation';
import RowingIcon from '@mui/icons-material/Rowing';
const typeOfForms = {
  'hotel': 'hotel',
  'activity': 'activity',
  'destination': 'destination',
}
const AdminForms = () => {
  const router = usePathname();
  const route = useRouter()
  const type = router?.split?.('/')?.[2] || 'hotel'

  const getForm = () => {
    switch (type) {
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
  const handleOnClick = (link: string) => {
    route.push(link)
  }
  return (
    <Layout>
      <div className="w-full max-md:w-full flex justify-center  item-center ">
        <div className='flex pt-20  flex-col items-center space-y-10 max-md:hidden justify-start'>
          {[{ Icon: HotelIcon, link: '/admin/hotel' }, { Icon: AddLocationIcon, link: '/admin/destination' }, { Icon: RowingIcon, link: '/admin/activity' }].map(({ Icon, link },i) => <div  key={i}  className='flex flex-col justify-center items-center'><div onClick={() => { handleOnClick(link) }} className=' hover:scale-110 hover:bg-black cursor-pointer flex justify-center items-center rounded-[50px] p-8 h-10 w-10 bg-[#4D9FD7]'>
            <Icon className="text-white " fontSize='large'></Icon>
          </div>
          </div>
          )}
        </div>
        <div className='flex flex-col py-10 w-full justify-start items-center'>
          {getForm()}
        </div>
      </div>
    </Layout>

  )
}

export default AdminForms