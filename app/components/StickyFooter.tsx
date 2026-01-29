"use client";

import React from "react";

export default function StickyFooter() {
    return (
        <div className="fixed bottom-0 left-0 right-0 z-50 flex items-center justify-center gap-4 bg-neutral-950/80 p-4 pb-6 backdrop-blur-md border-t border-white/10 sm:hidden animate-in slide-in-from-bottom-full duration-500">
            {/* Call Button */}
            <a
                href="tel:+49526112304" // Replace with new number if known.
                className="flex flex-1 items-center justify-center rounded-lg border border-white/20 bg-white/5 py-3 text-sm font-medium text-white transition-colors hover:bg-white/10 active:scale-95"
            >
                <span className="mr-2">📞</span> Anrufen
            </a>

            {/* Booking Button */}
            <a
                href="https://luisa-restaurant.de"
                className="flex flex-[2] items-center justify-center rounded-lg bg-amber-600 py-3 text-sm font-bold text-white shadow-lg transition-transform hover:bg-amber-500 active:scale-95"
            >
                <span className="mr-2">📅</span> Tisch reservieren
            </a>
        </div>
    );
}
