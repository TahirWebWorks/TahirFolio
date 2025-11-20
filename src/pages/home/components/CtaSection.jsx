import React from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../../../hooks/useScrollAnimation';
import { ArrowRight, Mail, Phone, MapPin } from 'lucide-react';

function CtaSection() {
    const { ref, isInView } = useScrollAnimation();

    return (
        <div className='max-w-[1300px] mx-auto mb-15 px-4'>
            <motion.div
                ref={ref}
                className='grid grid-cols-1 lg:grid-cols-2 justify-between items-center gap-8 bg-[#0a0a0a] border border-[#cdff001a] p-8 sm:p-12 lg:p-16 rounded-3xl'
                initial={{ opacity: 0, y: 60 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.7, delay: 0.2 }}
                >
                    <h4>Get In Touch</h4>
                    <h3 className='text-3xl sm:text-4xl lg:text-5xl font-semibold my-4'>Elevate your brand <br /> with Me</h3>
                    <p className='mb-8 text-xl'>ished fact that a reader will be distrol acted bioiiy desig ished fact that a reader will acted ished fact that a reader will be distrol acted.</p>
                    <motion.div
                        className="space-y-4"
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        variants={{
                            hidden: { opacity: 0 },
                            visible: {
                                opacity: 1,
                                transition: {
                                    staggerChildren: 0.1,
                                    delayChildren: 0.4
                                }
                            }
                        }}
                    >
                        <motion.div
                            className="flex items-start gap-3"
                            variants={{
                                hidden: { opacity: 0, x: -20 },
                                visible: { opacity: 1, x: 0 }
                            }}
                            whileHover={{ x: 5 }}
                        >
                            <motion.div
                                className="bg-[#c9f31d] p-3 rounded-xl flex-shrink-0"
                                whileHover={{ scale: 1.1, rotate: 5 }}
                            >
                                <Mail size={20} className="text-black" />
                            </motion.div>
                            <div>
                                <h4 className="text-white font-semibold mb-1">Email Us</h4>
                                <a href="mailto:tahirwebworks@gmail.com" className="text-gray-300 hover:text-[#c9f31d] transition-colors">
                                    tahirwebworks@gmail.com
                                </a>
                            </div>
                        </motion.div>

                        <motion.div
                            className="flex items-start gap-3"
                            variants={{
                                hidden: { opacity: 0, x: -20 },
                                visible: { opacity: 1, x: 0 }
                            }}
                            whileHover={{ x: 5 }}
                        >
                            <motion.div
                                className="bg-[#c9f31d] p-3 rounded-xl flex-shrink-0"
                                whileHover={{ scale: 1.1, rotate: 5 }}
                            >
                                <Phone size={20} className="text-black" />
                            </motion.div>
                            <div>
                                <h4 className="text-white font-semibold mb-1">Call Us</h4>
                                <a href="tel:+923045665615" className="text-gray-300 hover:text-[#c9f31d] transition-colors">
                                    +92 304 5665615
                                </a>
                            </div>
                        </motion.div>

                        <motion.div
                            className="flex items-start gap-3"
                            variants={{
                                hidden: { opacity: 0, x: -20 },
                                visible: { opacity: 1, x: 0 }
                            }}
                            whileHover={{ x: 5 }}
                        >
                            <motion.div
                                className="bg-[#c9f31d] p-3 rounded-xl flex-shrink-0"
                                whileHover={{ scale: 1.1, rotate: 5 }}
                            >
                                <MapPin size={20} className="text-black" />
                            </motion.div>
                            <div>
                                <h4 className="text-white font-semibold mb-1">Location</h4>
                                <p className="text-gray-300">
                                    Taxila, District Rawalpindi, Pakistan
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>
                </motion.div>

                <motion.div
                    className='lg:pl-8'
                    initial={{ opacity: 0, x: 40 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.7, delay: 0.3 }}
                >
                    <form className="justify-end flex-1 space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <motion.input
                                type="text"
                                placeholder="Your Name"
                                className="bg-transparent border border-gray-700 rounded-lg p-4 w-full focus:outline-none focus:border-[#c9f31d] transition"
                                whileFocus={{ scale: 1.02, borderColor: "#c9f31d" }}
                            />
                            <motion.input
                                type="text"
                                placeholder="Phone Number"
                                className="bg-transparent border border-gray-700 rounded-lg p-4 w-full focus:outline-none focus:border-[#c9f31d] transition"
                                whileFocus={{ scale: 1.02, borderColor: "#c9f31d" }}
                            />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <motion.input
                                type="email"
                                placeholder="Your Email"
                                className="bg-transparent border border-gray-700 rounded-lg p-4 w-full focus:outline-none focus:border-[#c9f31d] transition"
                                whileFocus={{ scale: 1.02, borderColor: "#c9f31d" }}
                            />
                            <motion.input
                                type="text"
                                placeholder="Subject"
                                className="bg-transparent border border-gray-700 rounded-lg p-4 w-full focus:outline-none focus:border-[#c9f31d] transition"
                                whileFocus={{ scale: 1.02, borderColor: "#c9f31d" }}
                            />
                        </div>
                        <motion.textarea
                            rows="5"
                            placeholder="Your Message"
                            className="bg-transparent border border-gray-700 rounded-lg p-4 w-full focus:outline-none focus:border-[#c9f31d] transition resize-none"
                            whileFocus={{ scale: 1.02, borderColor: "#c9f31d" }}
                        ></motion.textarea>

                        <motion.button
                            type="submit"
                            className="flex items-center justify-center w-full bg-[#CDFF00] hover:bg-[#c9f31d] text-black font-semibold py-2.5 px-10 rounded-xl transition-all text-lg"
                            whileHover={{ scale: 1.02, y: -2 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            Appointment Now <ArrowRight className="ml-2" size={20} />
                        </motion.button>
                    </form>
                </motion.div>
            </motion.div>
        </div>
    )
}

export default CtaSection;