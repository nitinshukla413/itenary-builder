'use client'
import React, { useState } from 'react'
import HotelForms from './components/HotelForms'
import ActivityForm from './components/ActivityForm'
import DestinationForm from './components/DestinationForm'
import Layout from '@/components/layout'
import { usePathname, useSearchParams } from 'next/navigation'
const typeOfForms = {
  'hotel': 'hotel',
  'activity': 'activity',
  'destination': 'destination',
}
const AdminForms = () => {
  const searchParams = useSearchParams()
  const type = searchParams.get('type')||'hotel'
 
 
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
  return (
    <Layout>
      <div className="w-[80vw] flex justify-center  item-center ">
        <div className='flex flex-col py-10 w-full justify-start items-center'>
          {getForm()}
        </div>
      </div>
    </Layout>

  )
}

export default AdminForms