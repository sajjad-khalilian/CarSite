import Categories from '@/components/module/Categories'
import FilterCars from '@/components/module/FilterCars'
import CarsPage from '@/components/templates/CarsPage'
import carsData from '@/data/CarsData'
import React from 'react'

function page() {
    return (
        <div>
            <FilterCars/>
            <Categories/>
            <CarsPage data={carsData}/>
        </div>
    )
}

export default page
