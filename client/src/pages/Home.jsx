import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSnapshot } from "valtio";
import {
    headContainerAnimation,
    headContentAnimation,
    headTextAnimation,
    slideAnimation
} from "../config/motion";
import state from '../store';
import CustomButton from "../components/CustomButton";


function Home() {
    const snap = useSnapshot(state);
    return (
        <>

            <AnimatePresence>
                {snap.intro && (
                    <motion.section className="home" {...slideAnimation('left')}>
                        <motion.header {...slideAnimation('down')}>
                            {/* <img src="./threejs.png" alt="logo" className="w-8 h-8 object-contain" /> */}
                            <h1 className="font-bold text-2xl">KRYS</h1>
                        </motion.header>

                        <motion.div className="home-content" {...headTextAnimation}>
                            <h1 className="head-text">LET'S <br className="xl:block hidden" />Do It..</h1>
                        </motion.div>
                        <motion.div className="flex flex-col gap-5" {...headContentAnimation}>
                            <p className="max-w-md font-normal text-gray-600 text-base">
                                create your unique and exclusive shirt with our brand new 3D Customization tool.<strong>Unleash you Imagination</strong>
                            </p>
                            <CustomButton
                                type='filled'
                                title='Customize it'
                                handleClick={() => state.intro = false}
                                customStyles='w-fit px-4 py-2.5 font-bold text-sm' />
                        </motion.div>
                    </motion.section>
                )}
            </AnimatePresence >
        </>
    );
};

export default Home;