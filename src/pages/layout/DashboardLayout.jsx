import '@/app/globals.css'
import React, { useEffect } from 'react';
import Sidebar from '@/components/Sidebar';
import Spinner from '@/components/Spinner';
import useAuth from "@/hooks/useAuth"
import AuthLayout from './AuthLayout';

const DashboardLayout = ({children, page}) => {
    
    const {loading, user} = useAuth();
    
    return (
        <AuthLayout
            page="Dashboard"
        >
            {loading ? <Spinner/> :
                user && (
                    <div className='relative md:flex h-screen overflow-hidden'>
                        <Sidebar/>
                        <main className='flex-1 p-10 h-screen overflow-y-auto'>
                            {children}
                        </main>
                    </div> 

                ) 
            }
        </AuthLayout>
    )
}

export default DashboardLayout