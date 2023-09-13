import '@/app/globals.css'
import Image from 'next/image'

const Spinner = () => {
    return(

        <div className='h-screen flex flex-col gap-14 items-center justify-center '>
            <p className=' text-2xl font-bold'>You will not be able to enter until you log in</p>
            <div className='animate-bounce-slow bg-lime-800 rounded-full overflow-hidden transition ease-out delay-100 scale-105 rep'>
                <Image
                    src="/img/spinner.png"
                    width={200}
                    height={200}
                    fit="contain"
                    alt="spinner Image"
                />
            </div>
        </div>

    )

}

export default Spinner