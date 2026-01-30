"use client";

import { createContext, useContext, useState, useCallback, useRef, ReactNode } from "react";

interface TypewriterSequenceContextType {
    currentIndex: number;
    isActive: (index: number) => boolean;
    notifyComplete: (index: number) => void;
    register: () => number;
}

const TypewriterSequenceContext = createContext<TypewriterSequenceContextType | null>(null);

export function useTypewriterSequence() {
    return useContext(TypewriterSequenceContext);
}

interface TypewriterSequenceProviderProps {
    children: ReactNode;
    onSequenceComplete?: () => void;
}

export function TypewriterSequenceProvider({
    children,
    onSequenceComplete
}: TypewriterSequenceProviderProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const nextIndexRef = useRef(0); // Changed from useState to useRef
    const [completedIndices, setCompletedIndices] = useState<Set<number>>(new Set());

    const register = useCallback(() => {
        const index = nextIndexRef.current;
        nextIndexRef.current += 1; // Direct mutation instead of setState
        return index;
    }, []); // Empty deps since we're using ref

    const isActive = useCallback((index: number) => {
        return index === currentIndex;
    }, [currentIndex]);

    const notifyComplete = useCallback((index: number) => {
        setCompletedIndices(prev => {
            const newSet = new Set(prev);
            newSet.add(index);
            return newSet;
        });

        setCurrentIndex(prev => {
            const nextIdx = prev + 1;
            // Check if we've completed all typewriters
            if (nextIdx >= nextIndexRef.current && onSequenceComplete) {
                onSequenceComplete();
            }
            return nextIdx;
        });
    }, [onSequenceComplete]);

    const value: TypewriterSequenceContextType = {
        currentIndex,
        isActive,
        notifyComplete,
        register,
    };

    return (
        <TypewriterSequenceContext.Provider value={value}>
            {children}
        </TypewriterSequenceContext.Provider>
    );
}
