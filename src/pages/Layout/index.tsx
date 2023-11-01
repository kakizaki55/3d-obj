// @ts-nocheck
import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import styles from './styles/Layout.module.css'
 
export default function Layout({ children }: React.JSX.Element) {
  console.log('styles LAYOUT', styles)
  return (
    <>
      <Navbar className={`${styles.nav}`}/>
        <main>{children}</main>
      <Footer />
    </>
  )
}