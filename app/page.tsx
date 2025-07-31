'use client';

import React from 'react';
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from '@/components/ui/hero-highlight';
import { HoverBorderGradient } from '@/components/ui/hover-border-gradient';
import { AdditionalInfo } from '@/components/additional-info';
import Link from 'next/link';
import FirecrawlAd from '@/ads/firecrawl';

const page = () => {
    return ( 
        <div className='flex flex-col min-h-screen items-center w-full bg-gradient-to-br from-gray-100 to-white dark:from-gray-900 dark:to-black'>
            <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1609710199882100" crossOrigin="anonymous"></script>
            <FirecrawlAd />
            
            <HeroHighlight>
                <motion.h1
                    initial={{ opacity: 0, y: 20 }} 
                    animate={{ opacity: 1, y: [20, -5, 0] }} 
                    transition={{ duration: 0.5, ease: [0.4, 0.0, 0.2, 1] }}
                    className="text-4xl lg:text-6xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-extrabold text-black dark:text-white"
                >
                    <Highlight className='text-white bg-gradient-to-r from-purple-600 to-indigo-500 px-3 py-1 rounded-lg'>LayerText</Highlight> lets your visuals speak volumes
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: [10, 0] }}
                    transition={{ delay: 0.3, duration: 0.6, ease: 'easeOut' }}
                    className="mt-4 text-lg max-w-2xl text-center mx-auto text-gray-700 dark:text-gray-300"
                >
                    A fast, free tool to put text behind your images like a pro. From memes to portfolios, give your content an unforgettable visual identity.
                </motion.p>
                <Link href="/app">
                    <button className="mt-6 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold px-8 py-3 rounded-full shadow-lg transition-all">
                        Start Designing →
                    </button>
                </Link>
            </HeroHighlight>

            <section className="w-full px-6 py-10 md:py-16 text-center">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white">Why creators love LayerText</h2>
                <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                    Whether you're building a brand, launching a project, or just flexing your creativity—LayerText makes it effortless to turn ideas into visuals.
                </p>
            </section>

            <div className="flex flex-col items-center justify-center my-16">
                <AdditionalInfo />
                <div className='text-sm mt-10 text-gray-500 dark:text-gray-400'>
                    2025 © <Link href={'https://www.layertext.app'} target="_blank" rel="noopener noreferrer" className='hover:font-bold'>LayerText</Link> — Built with 💡 by Romello
                </div> 
            </div>
        </div>
    );
}

export default page;
