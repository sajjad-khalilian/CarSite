import CarsList from '@/components/templates/CarsList'
import carsData from '@/data/CarsData'
import React from 'react'

function page() {
    const sedancars = carsData.filter(car => car.category === "sedan")
    return <CarsList data={sedancars}/>
}

export default page
