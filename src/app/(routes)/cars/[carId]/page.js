"use client"

import CarsDetailPage from '@/components/templates/CarsDetailPage'
import carsData from '@/data/CarsData'
import { useParams } from 'next/navigation'
import React from 'react'

function page() {
    const params = useParams()
    const {carId} = params
    const detailes = carsData[carId - 1]
    return <CarsDetailPage {...detailes} />
}

export default page
