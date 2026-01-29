import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="absolute top-0 left-0 w-full z-50 p-6 flex justify-center items-center pointer-events-none">
            <Link href="/" className="pointer-events-auto">
                <Image
                    src="/Stadtlicht_Logo.png"
                    alt="Stadtlicht Lemgo Logo"
                    width={200}
                    height={80}
                    className="w-32 sm:w-48 h-auto drop-shadow-md"
                    priority
                />
            </Link>
        </nav>
    );
}
