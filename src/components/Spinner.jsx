import '@/app/globals.css'
import Image from "next/image"
import Link from 'next/link'
import { Button } from './ui/button'
import { LogIn } from 'lucide-react'

const Spinner = () => {
    return(
    
        <div className='h-screen flex flex-col gap-14 items-center justify-center '>
            <p className=' text-2xl font-bold'>You will not be able to enter until you log in</p>
            <div className='bg-lime-800 rounded-full overflow-hidden transition ease-out delay-100 scale-105 rep'>
                <Image
                    src="/img/spinner.png"
                    width={200}
                    height={200}
                    fit="contain"
                    alt="spinner Image"
                    priority="true"
                    className='w-auto h-auto animate-bounce-slow'
                />
            </div>

            <Link href='/login'>
            <Button className="bg-cyan-600 hover:bg-cyan-700 text-zinc-200  rounded text-1xl">
                <LogIn  className="mr-2 h-6 w-6" /> LogIn
            </Button>
        </Link>
        </div>


    )

}

export default Spinner