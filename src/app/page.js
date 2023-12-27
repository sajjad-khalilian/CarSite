"use client"

import AllButton from '@/components/module/AllButton'
import CarsPage from '@/components/templates/CarsPage'
import carsData from '@/data/CarsData'


export default function Home() {

  const cars = carsData.slice(0,3)

  return (
    <div>
      <CarsPage data={cars}/>
      <AllButton/>
    </div>
  )
}
