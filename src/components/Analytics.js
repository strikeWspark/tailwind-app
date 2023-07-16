import React from "react";

const Analytics = () => {
    return (
        <div className="w-full bg-black py-16 px-4">
            <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
                <img className='w-[500px] mx-auto my-4' src="https://images.unsplash.com/photo-1515704089429-fd06e6668458?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDZ8fGNvbXB1dGVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" />
                <div className="flex flex-col justify-center">
                    <p className="text-[#00df9a] font-bold">DATA ANALYTICS DASHBOARD</p>
                    <h1 className="md:text-4xl sm:text-3xl text-2xl text-white font-bold py-2">Manage Data Analytics Centrally</h1>
                    <p className="text-white">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                    <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 px-6 py-3 text-black'>Get Started</button>
                </div>
            </div>


        </div>
    )
}

export default Analytics;