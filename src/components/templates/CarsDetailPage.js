"use client"

import React from 'react'
import styles from "./CarsDetailPage.module.css"
import { IoBuild } from "react-icons/io5";
import { HiAdjustmentsHorizontal } from "react-icons/hi2";
import { SlCalender } from "react-icons/sl";
import { TbRoad } from "react-icons/tb";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineAttachMoney } from "react-icons/md";
import { useRouter } from 'next/navigation';



function CarsDetailPage({image , location, name, model, year, distance, description, price}) {
    const router = useRouter()
    const buyHandler = () => {
        router.push("/")
    }

    return (
        <div className={styles.container}>
            <img src={image} className={styles.image}/>
            <h3 className={styles.header}>
                <p>{name} {model}</p>
            </h3>
            <div className={styles.details}>
                <div>
                    <IoBuild size={25}/>
                    <p>Company</p>
                    <span>{name}</span>
                </div>
                <div>
                    <HiAdjustmentsHorizontal size={25}/>
                    <p>Model</p>
                    <span>{model}</span>
                </div>
                <div>
                    <SlCalender size={25}/>
                    <p>Final Registration</p>
                    <span>{year}</span>
                </div>
                <div>
                    <TbRoad size={25}/>
                    <p>Kms Driven</p>
                    <span>{distance} Km</span>
                </div>
            </div>
            <div className={styles.details}>
                <div>
                    <IoLocationOutline size={25}/>
                    <p>Location</p>
                    <span>{location}</span>
                </div>
            </div>
            <div className={styles.details}>
                <p className={styles.descriptionTitle}>Extra information</p>
                <p className={styles.descriptionText}>{description}</p>
            </div>
            <div className={styles.details}>
                <div className={styles.price}>
                    <MdOutlineAttachMoney size={35}/>
                    <p>Price:</p>
                    <span>{price} $</span>
                </div>
            </div>
            <button className={styles.button} onClick={buyHandler}>Buy</button>
        </div>
    )
}

export default CarsDetailPage
