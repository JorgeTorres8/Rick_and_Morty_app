import Image from 'next/image'
import Link from 'next/link'
import '@/app/globals.css'
import { Button } from '@/components/ui/button'
import { LogIn  } from 'lucide-react';
import { UserPlus } from 'lucide-react';
import Footer from '@/components/Footer';
import AuthLayout from './layout/AuthLayout';

const Start = () => {
    
    return (
      <AuthLayout
        page="Index"
      >
        <header className=' bg-zinc-900 flex flex-col justify-center items-center gap-8 md:grid md:grid-cols-2 shadow-md shadow-cyan-700'>
          <Link href="/">
                  <img className="object-scale-down h-auto w-80 md:ml-5 md:mb-5" src="/img/logo.png" alt="Logo"/>
          </Link>

          <nav className='container mx-auto flex justify-center md:justify-end items-center gap-5 mb-5 md:mb-0'>
            <Link href='/login'>
              <Button className="bg-cyan-600 hover:bg-cyan-700 text-zinc-200  rounded text-1xl">
                <LogIn  className="mr-2 h-6 w-6" /> LogIn
              </Button>
            </Link>

            <Link href='/sign-up'>
              <Button variant="outline" className="border-cyan-600 border-2 text-zinc-200 rounded text-1xl">
                <UserPlus className="mr-2 h-6 w-6" /> SignUp
              </Button>
            </Link>
          </nav>
        </header>


        <main className="container mx-auto mt-20 flex items-center justify-center flex-col gap-5 md:flex-row">
          <div className="md:w-1/2 md:h-full flex justify-center items-center flex-col gap-10 text-center">
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
              Welcome to the Rick and Morty App
            </h1>

            <p className=' text-lg'>
              Explore the multiverse, remember and edit the funniest moments, this app is one of the best ways to
              enjoy this great animated series, which has made us laugh with some of the best, most popular and
              fun characters of recent times, think and surprise us all with all the ingenuity behind each chapter.
            </p>
          </div>

          <div className="max-w-full h-auto">
            <Image
              src="/img/login_1.png"
              width={500}
              height={300}
              fit="contain"
              alt="login image 1"
              priority="true"
              className="w-auto h-auto"
            />
          </div>
        </main>

        
        <section className='container mx-auto mt-20 flex flex-col justify-center items-center'>
            <h2 className='text-4xl text-center font-extrabold tracking-tight lg:text-5xl'>A fun application</h2>
            
            <p className='mt-5 text-center text-lg'>
              Feel part of all dimensions, Collect information from your favorite characters and episodes,
              so you can learn more about the interdimensional adventures of Rick And Morty. 
              Do you consider yourself a big fan? Test yourself with the content of this application!
            </p>
            
            <div className="max-w-full h-auto mt-10">
              <Image
                src="/img/login_2.png"
                width={350}
                height={150}
                fit="contain"
                alt="login image 2"
                priority="true"
                className="w-auto h-auto"
              />
          </div>
        </section>
        
      </AuthLayout>
      
    )
  }
  
export default Start