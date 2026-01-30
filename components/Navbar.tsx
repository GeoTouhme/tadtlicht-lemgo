
import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="absolute top-0 left-0 w-full z-50 p-6 flex justify-center items-center pointer-events-none">
            <Link href="/" className="pointer-events-auto">
                <img
                    src="/tadtlicht-lemgo/Stadtlicht_Logo.png"
                    alt="Stadtlicht Lemgo Logo"
                    className="w-32 sm:w-48 h-auto drop-shadow-md"
                />
            </Link>
        </nav>
    );
}
