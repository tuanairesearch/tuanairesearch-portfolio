const Navbar = () => {
    return (
        <header className="bg-slate-900/70 backdrop-blur-lg sticky top-0 z-50 border-b border-slate-800">
            <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
                <a href="#" className="text-xl font-bold text-white">
                    Bùi Anh Tuấn
                </a>
                <ul className="hidden md:flex items-center space-x-6">
                    <li><a href="#about" className="hover:text-blue-400 transition-colors">About</a></li>
                    <li><a href="#projects" className="hover:text-blue-400 transition-colors">Projects</a></li>
                    <li><a href="#blog" className="hover:text-blue-400 transition-colors">Blog</a></li>
                    <li><a href="#contact" className="bg-slate-800 hover:bg-slate-700 text-white font-medium py-2 px-4 rounded-lg transition-colors">
                        Contact
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Navbar;