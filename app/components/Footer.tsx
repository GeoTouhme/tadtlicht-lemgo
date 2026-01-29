import Link from "next/link";

export default function Footer() {
    return (
        <footer className="w-full bg-neutral-950 text-white py-12 px-6 sm:px-12 border-t border-neutral-900">
            <div className="max-w-7xl mx-auto flex flex-col items-center justify-center space-y-6 text-center">
                {/* Address */}
                <p className="font-medium tracking-wide text-sm text-neutral-400">
                    ECHTERNSTRASSE 92 • LEMGO
                </p>

                {/* Legal Links */}
                <div className="flex gap-8 justify-center text-xs uppercase tracking-wider opacity-60">
                    <Link
                        href="/impressum"
                        className="text-neutral-400 hover:text-white hover:opacity-100 transition-all duration-300"
                    >
                        Impressum
                    </Link>
                    <Link
                        href="/datenschutz"
                        className="text-neutral-400 hover:text-white hover:opacity-100 transition-all duration-300"
                    >
                        Datenschutz
                    </Link>
                </div>

                {/* Copyright or Branding (Optional/Subtle) */}
                <div className="text-[10px] text-neutral-700 font-sans pt-4">
                    &copy; {new Date().getFullYear()} Stadtlicht Lemgo
                </div>
            </div>
        </footer>
    );
}
