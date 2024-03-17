'use client'
import Header from '@/components/header'
import React, { useRef, useState } from 'react'

const Travel = () => {
  const [noOfDays, setNoOfDays] = useState<any[]>([0, 1, 2, 3, 4, 5]);
  const [selectedDay, setSelectedDay] = useState<any>(0)
  const handleSelect = (val: any) => {
    setSelectedDay(val)
  }
  const handleAdd = () => {
    let updatedDays = [...noOfDays]
    updatedDays.push(noOfDays?.length)
    setNoOfDays(updatedDays)
  }
  return (
    <div className="bg-white h-[100vh] w-[100vw] flex justify-center  item-center">
      <div className="w-[80%] h-full p-10">
        <div className="flex space-x-30 ">
          <div className="flex rounded-3xl w-full overflow-x-scroll scrollbar-hide no-scrollbar bg-gray-200 justify-between items-center">
            {noOfDays?.map((no: any) => {
              let value = `Day ${no}`
              if (no === 0) {
                value = `Cover`
              }
              return <div onClick={() => handleSelect(no)} className={`bg-gray-200 p-3 cursor-pointer min-w-60 rounded-3xl flex justify-center items-center ${selectedDay === no ? 'bg-blue-400' : ''}`}>
                <h3 className={`text-black text-center text-[17px] font-[400] ${selectedDay === no ? 'text-white' : ''}`}>{value}</h3>
              </div>
            })
            }
          </div>
          <div onClick={handleAdd} className={`p-4 cursor-pointer rounded-3xl flex justify-center items-center bg-blue-400`}>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Travel