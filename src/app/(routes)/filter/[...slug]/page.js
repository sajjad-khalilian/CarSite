"use client"

import CarsList from '@/components/templates/CarsList'
import carsData from '@/data/CarsData'
import { useParams } from 'next/navigation'
import React from 'react'

function FilterdCars() {


    const router = useParams()
    const [min , max] = router.slug

    const filteredcars = carsData.filter(car => car.price > min && car.price < max)
    
    if(!filteredcars.length) return <h2 style={{textAlign:"center"}}>Not Found!!!</h2>
    return <CarsList data={filteredcars}/>
}

export default FilterdCars
