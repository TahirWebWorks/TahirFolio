import React from 'react';
import { ArrowRight } from 'lucide-react';

function CtaSection() {
    return (
        <div className='w-[1300px] mx-auto'>
            <div className='grid grid-cols-2 justify-between items-center gap-8 bg-[#141414] p-20 rounded-3xl'>
                <div>
                    <h4>Get In Touch</h4>
                    <h3 className='text-3xl sm:text-4xl lg:text-5xl font-semibold my-4'>Elevate your brand <br/> with Me</h3>
                    <p>ished fact that a reader will be distrol acted bioiiy desig ished fact that a reader will acted ished fact that a reader will be distrol acted.</p>
                </div>

                <div>
                    <form className="flex-1 space-y-4">
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
                            className="flex items-center justify-center w-full md:w-auto bg-[#c9f31d] hover:bg-[#c9f31d] text-white font-semibold py-4 px-10 rounded-full transition-all text-lg"
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