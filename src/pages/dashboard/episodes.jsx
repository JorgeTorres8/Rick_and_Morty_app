import React from 'react'
import '@/app/globals.css'
import DashboardLayout from '../layout/DashboardLayout'
import TableEpi from '@/components/TableEpi'

const Episodes = () => {
  return (
    <DashboardLayout>
        <div className='mt-10'>
            <h1 className='mt-2 text-4xl font-extrabold tracking-tight lg:text-5xl text-center'>Episodes</h1>
            <p className='text-xl mt-8 text-center'>You will find all the Episodes from the Rick and Morty universe. Find the episodes you like the most</p>
        </div>

        <TableEpi/>
    </DashboardLayout>
  )
}

export default Episodes