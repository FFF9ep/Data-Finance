import React from 'react'
import laptop from '../Assets/laptop.jpg'

const Analytics = () => {
    return (
        <div className='w-full bg-white py-16 px-4'>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
                <img className='w-[500px] mx-auto my-4' src={laptop} alt="/" />
                <div className='flex flex-col justify-center'>
                    <p className='text-[#00df9a] font-bold'>Data Analytics Dashboard</p>
                    <h1 className='md:text-4x sm:text-3xl text-2xl font-bold py-2'>Manage Data Analytics Centrally</h1>
                    <p className=''>
                    A Data Analytics Dashboard provides a centralized platform to monitor, analyze, and visualize your key data metrics. It empowers you to manage your data analytics efficiently, enabling informed decision-making and better business outcomes.
                    </p>
                    <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>Get Started</button>
                </div>
            </div>
        </div>
    )
}

export default Analytics
