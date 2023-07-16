import React from "react";

const Cards = () => {
    return (
        <div className="w-full py-[10rem] px-4 bg-white">
            <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8 justify-center">
                <div className="w-full shadow-xl border flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
                    <img src="https://images.unsplash.com/photo-1684785459021-761c8ee14e49?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60" alt="icon"/>
                    <h2 className="text-2xl font-bold text-center py-4">Single User</h2>
                    <p className="text-center">$149</p>
                    <div className="text-center font-medium">
                        <p className="py-2 border-b mx-8 mt-4">500 GB Storage</p>
                        <p className="py-2 border-b mx-8">1 Granted per user</p>
                        <p className="py-2 border-b mx-8">Send up to 2 GB</p>
                    </div>
                    <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">Start Trail</button>
                </div>

                <div className="w-full bg-gray-100 shadow-xl border flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300">
                    <img src="https://images.unsplash.com/photo-1684785459021-761c8ee14e49?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60" alt="icon"/>
                    <h2 className="text-2xl font-bold text-center py-4">Partnership</h2>
                    <p className="text-center">$249</p>
                    <div className="text-center font-medium">
                        <p className="py-2 border-b mx-8 mt-4">1000 GB Storage</p>
                        <p className="py-2 border-b mx-8">2 Granted per user</p>
                        <p className="py-2 border-b mx-8">Send up to 3 GB</p>
                    </div>
                    <button className="bg-[#000000] text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">Start Trail</button>
                </div>


                <div className="w-full shadow-xl border flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
                    <img src="https://images.unsplash.com/photo-1684785459021-761c8ee14e49?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60" alt="icon"/>
                    <h2 className="text-2xl font-bold text-center py-4">Group Account</h2>
                    <p className="text-center">$299</p>
                    <div className="text-center font-medium">
                        <p className="py-2 border-b mx-8 mt-4">1500 GB Storage</p>
                        <p className="py-2 border-b mx-8">3 Granted per user</p>
                        <p className="py-2 border-b mx-8">Send up to 5 GB</p>
                    </div>
                    <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">Start Trail</button>
                </div>

                

            </div>

        </div>
    )
}

export default Cards;