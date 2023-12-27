import Link from 'next/link'
import React from 'react'
import Hatchback from '../icons/Hatchback'
import Sedan from '../icons/Sedan'
import Sport from '../icons/Sport'
import Suv from '../icons/Suv'
import styles from "./Categories.module.css"



function Categories() {
    return (
        <div className={styles.container}>
            <Link href="/categories/sedan">
                <div>
                    <p>Sedan</p>
                    <Sedan/>
                </div>
            </Link>
            <Link href="/categories/HatchBack">
                <div>
                    <p>HatchBack</p>
                    <Hatchback/>
                </div>
            </Link>
            <Link href="/categories/SUV">
                <div>
                    <p>SUV</p>
                    <Suv/>
                </div>
            </Link>
            <Link href="/categories/Sport">
                <div>
                    <p>Sport</p>
                    <Sport/>
                </div>
            </Link>
        </div>
    )
}

export default Categories
