"use client"

import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import styles from "./FilterCars.module.css"



function FilterCars() {
    const router = useRouter()
    const [min , setMin] = useState("")
    const [max , setMax] = useState("")

    const searchHandler = () => {
        if(max && min){
            router.push(`/filter/${min}/${max}`)
        }else{
            alert("Please Enter Max and Min Value")
        }
    }
    return (
        <div className={styles.container}>
            <div>
                <input type="text" placeholder="Enter a Max Value" value={min} onChange={e => setMin(e.target.value)}/>
                <input type="text" placeholder="Enter a Min Value" value={max} onChange={e => setMax(e.target.value)}/>
            </div>
            <button onClick={searchHandler}>Search</button>
        </div>
    )
}

export default FilterCars
