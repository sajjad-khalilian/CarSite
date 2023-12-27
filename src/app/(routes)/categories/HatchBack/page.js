import CarsList from '@/components/templates/CarsList'
import carsData from '@/data/CarsData'
import React from 'react'

function page() {
    const hatchbackcars = carsData.filter(car => car.category === "hatchback")
    return <CarsList data={hatchbackcars}/>
}

export default page
