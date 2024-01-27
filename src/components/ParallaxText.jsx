import React from 'react';
import '../App.css';
import { useRef } from 'react';
import { IoStar } from "react-icons/io5";
import {
    motion,
    useScroll,
    useSpring,
    useTransform,
    useMotionValue,
    useVelocity,
    useAnimationFrame,
} from 'framer-motion';
import { wrap } from '@motionone/utils';

function ParallaxTextEfect({ children, baseVelocity = 100, index }) {
    const baseX = useMotionValue(0);
    const { scrollY } = useScroll();
    const scrollVelocity = useVelocity(scrollY);
    const smoothVelocity = useSpring(scrollVelocity, {
        damping: 50,
        stiffness: 400,
    });
    const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
        clamp: false,
    });

    const x = useTransform(baseX, (v) => `${wrap(0, -75, v)}%`);

    const directionFactor = useRef(1);
    useAnimationFrame((t, delta) => {
        let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

        if (velocityFactor.get() < 0) {
            directionFactor.current = -1;
        } else if (velocityFactor.get() > 0) {
            directionFactor.current = 1;
        }

        moveBy += directionFactor.current * moveBy * velocityFactor.get();

        baseX.set(baseX.get() + moveBy);
    });

    // Generate dynamic Tailwind CSS classes for different background colors
    const bgColorClasses = [
        'bg-yellow-500',
        'bg-purple-500',
        'bg-blue-500',
        'bg-green-500',
        'bg-red-500',
        'bg-indigo-500',
    ];

    return (
        <div className={`parallax py-2 ${bgColorClasses[index % bgColorClasses.length]}`}>
            <motion.div className="scroller" style={{ x }}>
                <span className="text-[10px] font-extrabold">{children} </span>
                <span className="text-[10px] font-extrabold">{children} </span>
                <span className="text-[10px] font-extrabold">{children} </span>
                <span className="text-[10px] font-extrabold">{children} </span>
                <span className="text-[10px] font-extrabold">{children} </span>
                <span className="text-[10px] font-extrabold">{children} </span>
                <span className="text-[10px] font-extrabold">{children} </span>
                <span className="text-[10px] font-extrabold">{children} </span>
            </motion.div>
        </div>
    );
}

function ParallaxText() {
    return (
        <section className="w-full">
            <ParallaxTextEfect baseVelocity={-5} index={0}>
                    <div className="text-xl font-extrabold flex space-x-8 items-center">
                    <p>Design </p>
                        <IoStar className='text-red-600' />
                        <p>Develop </p>
                        <IoStar className='text-red-600' />
                        <p>Discover</p>
                        <IoStar className='text-red-600' />
                    </div>
            </ParallaxTextEfect>

            <ParallaxTextEfect baseVelocity={5} index={1}>
                    <div className="text-xl font-extrabold flex space-x-8 items-center">
                        <p>Design </p>
                        <IoStar className='text-red-600' />
                        <p>Develop </p>
                        <IoStar className='text-red-600' />
                        <p>Discover</p>
                        <IoStar className='text-red-600' />
                    </div>
            </ParallaxTextEfect>
        </section>
    );
}

export default ParallaxText;
