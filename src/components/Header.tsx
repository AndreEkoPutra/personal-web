function Header() {
  return (
    <header className="sticky top-0">
        <div className="relative flex items-center justify-center h-16 bg-black shadow-lg">
            <div className="absolute left-0 px-3">
                <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-indigo-100">Andreanus Eko Putra</h1>
            </div>
            <div className="absolute right-0 px-3">
                <ul className="flex space-x-5">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
        </div>
    </header>
  )
}

export default Header
