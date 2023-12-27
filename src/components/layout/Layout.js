import Link from 'next/link'
import React from 'react'
import styles from "./Layout.module.css"



function Layout({children}) {
    return (
        <>
            <header className={styles.header}>
                <Link href="/">
                    <h2>Sajjad Cars</h2>
                    <p>Choose And Buy Your Cars</p>
                </Link>
            </header>
            <div className={styles.container}>{children}</div>
            <footer className={styles.footer}>
                <Link href="/">Sajjad Cars</Link>
            </footer>
        </>
    )
}

export default Layout
