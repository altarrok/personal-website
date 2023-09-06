import Head from 'next/head';
import React from 'react';
import { BackToMainPageButton } from '@/components/BackToMainPageButton';

const Custom404: React.FC = () => {
    return (
        <>
            <Head>
                <title>Altay Batuhan | Not Found</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/images/favicon-light.ico" media="(prefers-color-scheme: light)" />
                <link rel="icon" href="/images/favicon-dark.ico" media="(prefers-color-scheme: dark)" />
            </Head>
            <main className="w-full min-h-screen bg-black relative flex flex-col gap-4 items-center justify-center">
                <h1 className='text-8xl text-white'>404</h1>
                <h2 className='text-4xl text-white'>Not Found :{"("}</h2>
                <BackToMainPageButton />
            </main>
        </>
    );
};

export default Custom404;
