import React from 'react'
import '@/app/globals.css'
import DashboardLayout from '../layout/DashboardLayout'
import TableCh from '@/components/TableCh'

const Characters = () => {
  return (
    
    <DashboardLayout>
        <div className='mt-10'>
            <h1 className='mt-2 text-4xl font-extrabold tracking-tight lg:text-5xl text-center'>Characters</h1>
            <p className='text-xl mt-8 text-center'>You will find all the characters from the Rick and Morty universe. Find the characters you like the most</p>
        </div>

        <TableCh/>
    </DashboardLayout>
  )
}

export default Characters