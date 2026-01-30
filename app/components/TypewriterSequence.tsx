"use client";

import { useInView } from "framer-motion";
import { useRef, ReactNode, Children, cloneElement, isValidElement, useState, useEffect, useMemo } from "react";
import { TypewriterSequenceProvider } from "./TypewriterSequenceContext";
import Typewriter from "./Typewriter";

interface TypewriterSequenceProps {
    children: ReactNode;
    baseDelay?: number;
    className?: string;
    onComplete?: () => void;
}

export default function TypewriterSequence({
    children,
    baseDelay = 0,
    className = "",
    onComplete
}: TypewriterSequenceProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });
    const [hasStarted, setHasStarted] = useState(false);

    // Use useEffect to handle delayed start (FIX: Move setTimeout here)
    useEffect(() => {
        if (isInView && !hasStarted) {
            if (baseDelay > 0) {
                const timer = setTimeout(() => setHasStarted(true), baseDelay);
                return () => clearTimeout(timer);
            } else {
                setHasStarted(true);
            }
        }
    }, [isInView, hasStarted, baseDelay]);

    // Recursively inject sequenceEnabled only to Typewriter components
    // Use useMemo to prevent infinite re-creation
    const enhancedChildren = useMemo(() => {
        const injectProp = (child: ReactNode): ReactNode => {
            if (isValidElement(child)) {
                // Only inject to Typewriter components, not to div or other DOM elements
                if (child.type === Typewriter) {
                    return cloneElement(child as any, {
                        sequenceEnabled: hasStarted,
                    });
                }
                // Recursively process children for nested elements
                const childElement = child as React.ReactElement<{ children?: ReactNode }>;
                if (childElement.props.children) {
                    return cloneElement(childElement as any, {
                        children: Children.map(childElement.props.children, injectProp),
                    });
                }
            }
            return child;
        };

        return Children.map(children, injectProp);
    }, [children, hasStarted]);

    return (
        <div ref={ref} className={className}>
            <TypewriterSequenceProvider onSequenceComplete={onComplete}>
                {enhancedChildren}
            </TypewriterSequenceProvider>
        </div>
    );
}
