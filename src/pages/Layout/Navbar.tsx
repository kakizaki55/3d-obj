import React, { useState } from 'react'
import { Inter } from 'next/font/google'
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';

import styles from './styles/Layout.module.css'

import { useSession, signIn, signOut } from "next-auth/react"
const inter = Inter({ subsets: ['latin'] })

const Navbar = () => {
    const { data: session } = useSession()

    const [drawer, setDrawer] = useState(false)
  


  return (
    <div>
      <main className={`${styles.navbar}`} >
      <div>Navbar</div>
      <Drawer 
        open={drawer}
        elevation={0}
        hideBackdrop={false}>
          { !session && <button onClick={ ()=> signIn() }>Sign In with Github</button> }
          { session && <button onClick={ ()=> signOut() }>Sign Out ({ session?.user.name})</button> }
      </Drawer>
      <Button 
        onClick={() => setDrawer(!drawer)}>
        { drawer ? 'close' : 'open' }
      </Button>
      </main>
    </div>
  )
}

export default Navbar
