import Link from 'next/link';
import { Search, Bell, Menu, ShoppingCart } from 'lucide-react';

export default function Navbar() {
    return (
        <nav className="nav-meli sticky top-0 z-50 px-4 md:px-8 py-3 flex items-center justify-between shadow-sm">
            {/* Brand */}
            <div className="flex items-center gap-4">
                <Menu className="md:hidden text-gray-800" size={24} />
                <Link href="/" className="text-xl font-extrabold text-blue-800 tracking-tight">
                    MERCADO <span className="text-gray-800">LIBRE</span>
                </Link>
            </div>

            {/* Search Bar */}
            <div className="hidden md:flex flex-1 max-w-2xl mx-8 relative">
                <input
                    type="text"
                    placeholder="Buscar productos, marcas y más..."
                    className="w-full py-2 px-4 rounded-sm shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
                <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 border-l pl-3">
                    <Search size={18} />
                </div>
            </div>

            {/* Icons */}
            <div className="flex items-center gap-6 text-gray-800">
                <Link href="#" className="hidden md:block text-sm font-medium hover:text-blue-700">Vender</Link>
                <Bell size={20} className="cursor-pointer hover:text-blue-700" />
                <ShoppingCart size={20} className="cursor-pointer hover:text-blue-700" />
            </div>
        </nav>
    );
}
