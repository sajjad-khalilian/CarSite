import CarsList from '@/components/templates/CarsList'
import carsData from '@/data/CarsData'
import React from 'react'

function page() {
    const sportcars = carsData.filter(car => car.category === "sport")
    return <CarsList data={sportcars}/>
}

export default page
