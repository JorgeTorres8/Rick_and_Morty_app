import '@/app/globals.css'
import React from 'react';
import { useRouter } from 'next/router';
import Footer from '@/components/Footer';
import Head from 'next/head';

const AuthLayout = ({children, page}) => {
      const router = useRouter()
    return (
        <>
            <Head> 
                <title>{`Rick and Morty App | ${page}`}</title>
                <meta property="og:site_name" content="Rick and Morty App | Jorge Torres" />
                <meta property="og:title" content="Welcome to my Rick and Morty app" />
                <meta property="og:description" content="Explore the multiverse, remember and edit the funniest moments, this app is one of the best ways to enjoy this great animated series." />
                <meta property="og:url" content=""/>
                <meta property="og:type" content="website" />
                <meta property="og:image" content="/img/readme/preview.png"/>
                <meta property="og:image:width" content="1280" />
                <meta property="og:image:height" content="640" />
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
                <link rel="manifest" href="/site.webmanifest"/>
                <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5"/>
                <meta name="msapplication-TileColor" content="#da532c"/>
                <meta name="theme-color" content="#ffffff"/>
            </Head>

            <div>
                {children}
            </div>

            {router.pathname == '/' &&
                <Footer/>
            }
        </>
    )
}

export default AuthLayout