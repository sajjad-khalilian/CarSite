import Link from 'next/link'
import React from 'react'
import styles from "./Card.module.css"
import { SlLocationPin } from "react-icons/sl";


function Card(props) {
    const {id , name , year, model , location , distance , price , image} = props

    
    return (
        <Link href={`/cars/${id}`}>
            <div className={styles.container}>
                <img src={image} alt="cars" className={styles.image}/>
                <h4 className={styles.title}>{name} {model}</h4>
                <p className={styles.detail}>{year} . {distance} km</p>
                <div className={styles.footer}>
                    <p className={styles.price}>{price} $</p>
                    <div className={styles.location}>
                        <p>
                            {location}
                            <SlLocationPin/>
                        </p>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default Card
