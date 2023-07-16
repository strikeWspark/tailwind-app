import React from "react";
import {
    FaDribbbleSquare,
    FaFacebookSquare,
    FaGithubSquare,
    FaInstagramSquare,
    FaTwitterSquare
} from 'react-icons/fa';
import apple from '../assets/app_store.svg';
import google from '../assets/google_play.svg';
import logo from '../assets/tripma_logo.svg';
const Footer = () => {
    return (
        <div class='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
                <div>
                    <img src={logo}/>
                    <p className="py-4">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form</p>

                    <div className="flex justify-between md:w-[75%] my-6">
                        <FaFacebookSquare size={30}/>
                        <FaInstagramSquare size={30}/>
                        <FaTwitterSquare size={30}/>
                        <FaGithubSquare size={30}/>
                        <FaDribbbleSquare size={30}/>
                    </div>
                </div>
                <div className="lg:col-span-2 flex justify-between mt-6">
                    <div>
                        <h6 className="font-medium text-gray-400">Solutions</h6>
                        <ul>
                            <li className="py-2 text-sm">Analytics</li>
                            <li className="py-2 text-sm">Marketing</li>
                            <li className="py-2 text-sm">Commerece</li>
                            <li className="py-2 text-sm">Insights</li>
                        </ul>
                    </div>

                    <div>
                        <h6 className="font-medium text-gray-400">Support</h6>
                        <ul>
                            <li className="py-2 text-sm">Pricing</li>
                            <li className="py-2 text-sm">Documentation</li>
                            <li className="py-2 text-sm">Guides</li>
                            <li className="py-2 text-sm">API Status</li>
                        </ul>
                    </div>

                    <div>
                        <h6 className="font-medium text-gray-400">Company</h6>
                        <ul>
                            <li className="py-2 text-sm">About</li>
                            <li className="py-2 text-sm">Blogs</li>
                            <li className="py-2 text-sm">Jobs</li>
                            <li className="py-2 text-sm">Careers</li>
                        </ul>
                    </div>

                    <div>
                        <h6 className="font-medium text-gray-400">Legal</h6>
                        <ul>
                            <li className="py-2 text-sm">Claim</li>
                            <li className="py-2 text-sm">Policy</li>
                            <li className="py-2 text-sm">Terms</li>
                            <li className="py-2 sm:w-auto"><img src={apple}/></li>
                            <li className="py-2 sm:w-auto"><img src={google}/></li>
                            
                        </ul>
                    </div>
                </div>
        </div>
    )
}
export default Footer;