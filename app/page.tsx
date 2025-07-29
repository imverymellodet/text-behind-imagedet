'use client';

import React from 'react';
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from '@/components/ui/hero-highlight';
import { HeroImages } from '@/components/hero-images';
import { HoverBorderGradient } from '@/components/ui/hover-border-gradient';
import { HeroParallaxImages } from '@/components/hero-parallax-images';
import { AdditionalInfo } from '@/components/additional-info';
import Link from 'next/link';
import FirecrawlAd from '@/ads/firecrawl';

const page = () => {
    return ( 
        <div className='flex flex-col min-h-screen items-center w-full'>
            <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1609710199882100" crossOrigin="anonymous"></script>
            <FirecrawlAd />
            
            <HeroHighlight>
                <motion.h1
                    initial={{ opacity: 0, y: 20 }} 
                    animate={{ opacity: 1, y: [20, -5, 0] }} 
                    transition={{ duration: 0.5, ease: [0.4, 0.0, 0.2, 1] }}
                    className="text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-bold text-black dark:text-white"
                >
                    Build beautiful{" "}
                    <Highlight className='text-white'>
                        layered text visuals
                    </Highlight>{" "}
                    in seconds
                </motion.h1>
            </HeroHighlight>

            {/* 🔥 SaaS-style conversion callout */}
            <div className="text-center max-w-xl mx-auto my-6">
                <h2 className="text-xl md:text-2xl font-semibold text-gray-800 dark:text-white">
                    Tired of boring text overlays?
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mt-2">
                    LayerText lets you create eye-catching text-behind-image visuals in under 30 seconds — no design skills required.
                </p>

                <Link href="/app">
                    <button className="mt-6 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition duration-200">
                        Launch the App →
                    </button>
                </Link>
            </div>

            {/* Optional: Keep one Product Hunt badge */}
            <div className="flex space-x-4">
                <a href="https://www.producthunt.com/posts/text-behind-image?embed=true&utm_source=badge-top-post-badge&utm_medium=badge" target="_blank">
                    <img src="https://api.producthunt.com/widgets/embed-image/v1/top-post-badge.svg?post_id=494264&theme=light&period=daily" alt="Top Post on Product Hunt" width="250" height="54" />
                </a>
            </div>

            <div className='w-full h-full mt-2'>
                <HeroImages />
                <HeroParallaxImages />
            </div>

            <div className="flex flex-col items-center justify-center my-10">
                <AdditionalInfo />
                <div className='text-sm mt-10 text-gray-500 dark:text-gray-400'>
                    2025 © <Link href={'https://www.yourdomain.com'} target="_blank" rel="noopener noreferrer" className='hover:font-bold'>yourdomain.com</Link> — Created with 💡 by Romello
                </div> 
            </div>
        </div>
    );
}

export default page;
