// @ts-nocheck
import React from 'react'
import { Inter } from 'next/font/google'

import styles from '@/styles/Home.module.css'

import { useSession, signIn, signOut } from "next-auth/react"
const inter = Inter({ subsets: ['latin'] })

const Home = () => {
   const { data: session } = useSession()

  return (
    <div>
      <main className={`${styles.main} ${inter.className}`}>
        <h1>Home</h1>
      </main>
    </div>
  )
}

export default Home