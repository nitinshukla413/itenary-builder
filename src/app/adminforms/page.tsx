import React from 'react'
import HotelForms from './components/HotelForms'
import ActivityForm from './components/ActivityForm'
import DestinationForm from './components/DestinationForm'

const AdminForms = () => {
  return (
    <div>
        <HotelForms/>
        <ActivityForm/>
        <DestinationForm/>
    </div>
  )
}

export default AdminForms