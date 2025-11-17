import React from 'react';
import { ArrowRight, Mail, Phone, MapPin } from 'lucide-react';

function CtaSection() {
    return (
        <div className='w-[1300px] mx-auto mb-15'>
            <div className='grid grid-cols-2 justify-between items-center gap-8 bg-[#0a0a0a] border border-[#cdff001a] p-16 rounded-3xl'>
                <div>
                    <h4>Get In Touch</h4>
                    <h3 className='text-3xl sm:text-4xl lg:text-5xl font-semibold my-4'>Elevate your brand <br /> with Me</h3>
                    <p className='mb-8  text-xl'>ished fact that a reader will be distrol acted bioiiy desig ished fact that a reader will acted ished fact that a reader will be distrol acted.</p>
                    <div className="space-y-4">
                         <div className="flex items-start gap-3">
                            <div className="bg-[#c9f31d] p-3 rounded-xl flex-shrink-0">
                                <Mail size={20} className="text-black" />
                            </div>
                            <div>
                                <h4 className="text-white font-semibold mb-1">Email Us</h4>
                                <a href="mailto:tahirwebworks@gmail.com" className="text-gray-300 hover:text-[#c9f31d] transition-colors">
                                    tahirwebworks@gmail.com
                                </a>
                            </div>
                        </div>

                         <div className="flex items-start gap-3">
                            <div className="bg-[#c9f31d] p-3 rounded-xl flex-shrink-0">
                                <Phone size={20} className="text-black" />
                            </div>
                            <div>
                                <h4 className="text-white font-semibold mb-1">Call Us</h4>
                                <a href="tel:+923045665615" className="text-gray-300 hover:text-[#c9f31d] transition-colors">
                                    +92 304 5665615
                                </a>
                            </div>
                        </div>

                         <div className="flex items-start gap-3">
                            <div className="bg-[#c9f31d] p-3 rounded-xl flex-shrink-0">
                                <MapPin size={20} className="text-black" />
                            </div>
                            <div>
                                <h4 className="text-white font-semibold mb-1">Location</h4>
                                <p className="text-gray-300">
                                    Taxila, District Rawalpindi, Pakistan
                                </p>
                            </div>
                        </div>

                        
                    </div>
                </div>
                <div className='pl-20'>
                            <form className="justify-end  flex-1 space-y-4">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <input
                                        type="text"
                                        placeholder="Your Name"
                                        className="bg-transparent border border-gray-700 rounded-lg p-4 w-full focus:outline-none focus:border-[#ff0057] transition"
                                    />
                                    <input
                                        type="text"
                                        placeholder="Phone Number"
                                        className="bg-transparent border border-gray-700 rounded-lg p-4 w-full focus:outline-none focus:border-[#ff0057] transition"
                                    />
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <input
                                        type="email"
                                        placeholder="Your Email"
                                        className="bg-transparent border border-gray-700 rounded-lg p-4 w-full focus:outline-none focus:border-[#c9f31d] transition"
                                    />
                                    <input
                                        type="text"
                                        placeholder="Subject"
                                        className="bg-transparent border border-gray-700 rounded-lg p-4 w-full focus:outline-none focus:border-[#c9f31d] transition"
                                    />
                                </div>
                                <textarea
                                    rows="5"
                                    placeholder="Your Message"
                                    className="bg-transparent border border-gray-700 rounded-lg p-4 w-full focus:outline-none focus:border-[#c9f31d] transition resize-none"
                                ></textarea>

                                <button
                                    type="submit"
                                    className="flex items-center justify-center w-full  bg-[#CDFF00] hover:bg-[#c9f31d] text-black font-semibold py-2.5 px-10 rounded-xl transition-all text-lg"
                                >
                                    Appointment Now <ArrowRight className="ml-2" size={20} />
                                </button>
                            </form>
                        </div>
            </div>
        </div>
                )
}

                export default CtaSection;