import CarsList from '@/components/templates/CarsList'
import carsData from '@/data/CarsData'
import React from 'react'

function page() {
    const suvcars = carsData.filter(car => car.category === "suv")
    return <CarsList data={suvcars}/>
}

export default page
