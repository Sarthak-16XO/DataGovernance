/* eslint-disable no-unused-vars */
import React from "react"
import HeroImage from "../assets/Hero.png"
import { Link } from "react-router-dom";

const Hero = () => {
    return (
        <section className="bg-white dark:bg-gray-900" >
            <div className="flex z-50 max-w-screen-xl px-2 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                <div className="text-center md:mr-auto place-self-center lg:col-span-7"
                >
                    <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white"><span className="bg-gradient-to-r from-purple-500 via-cyan-500 to-blue-600 bg-clip-text text-transparent">InfoGovern Solutions</span>: Empowering Businesses with Robust Data Governance Solutions</h1>
                    <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-lg dark:text-gray-400">Delivering tailor-made data governance solutions for businesses of all sizes, ensuring compliance, security, and performance</p>
                    <Link to="/dashboard" className="cursor-pointer">
                        <button className="inline-flex z-40 items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900 dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800  border border-gray-300  hover:bg-gray-100 focus:ring-gray-100 dark:text-white cursor-pointer">
                            <p>Get started</p>
                            <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        </button>
                    </Link>
                </div>
                <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                    <img src={HeroImage} alt="mockup" />
                </div>
            </div>
        </section>
    )
}

export default Hero