"use client";

import { motion, useInView, Variants } from "framer-motion";
import { useRef, useState } from "react";

interface TypewriterProps {
    text: string;
    className?: string;
    speed?: number;
    delay?: number;
    mode?: "char" | "word";
    cursor?: boolean;
}

export default function Typewriter({
    text,
    className = "",
    speed = 0.03,
    delay = 0,
    mode = "char",
    cursor = false,
}: TypewriterProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.5 });
    const [isComplete, setIsComplete] = useState(false);

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: speed,
                delayChildren: delay,
                ease: "linear" as const,
            },
        },
    };

    const childVariants: Variants = {
        hidden: { opacity: 0, y: 5 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.3,
                ease: "easeOut" as const
            }
        },
    };

    const cursorVariants: Variants = {
        blinking: {
            opacity: [0, 0, 1, 1],
            transition: {
                duration: 1,
                repeat: Infinity,
                repeatDelay: 0,
                ease: "linear" as const,
                times: [0, 0.5, 0.5, 1]
            }
        }
    };

    const handleComplete = () => {
        setIsComplete(true);
    };

    if (mode === "word") {
        const words = text.split(" ");
        return (
            <motion.span
                ref={ref}
                className={`inline-block ${className}`}
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                onAnimationComplete={handleComplete}
            >
                {words.map((word, index) => (
                    <motion.span
                        key={index}
                        variants={childVariants}
                        className="inline-block mr-1"
                    >
                        {word}
                    </motion.span>
                ))}
                {cursor && !isComplete && (
                    <motion.span
                        variants={cursorVariants}
                        animate="blinking"
                        className="inline-block text-amber-600 font-bold ml-0.5"
                    >
                        |
                    </motion.span>
                )}
            </motion.span>
        );
    }

    // Character mode
    const characters = Array.from(text);
    return (
        <motion.span
            ref={ref}
            className={`inline-block ${className}`}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            onAnimationComplete={handleComplete}
        >
            {characters.map((char, index) => (
                <motion.span key={index} variants={childVariants}>
                    {char}
                </motion.span>
            ))}
            {cursor && !isComplete && (
                <motion.span
                    variants={cursorVariants}
                    animate="blinking"
                    className="inline-block text-amber-600 font-bold ml-[1px]"
                >
                    |
                </motion.span>
            )}
        </motion.span>
    );
}
