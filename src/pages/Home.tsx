function Home() {
  return (
    <div>
      <section id="home" className="h-screen flex items-center justify-center">
        <div className="text-center">
            <div>
                <h1>Hello, I'm</h1>
                <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-indigo-100 py-4">Andreanus Eko Putra</h1>
                <h1>Web Developer & Mobile Developer</h1>
            </div>
            <div>
                <ul className="flex items-center justify-center space-x-5 py-4">
                    <li><a href="#projects">View Project</a></li>
                    <li><a href="#contact">Contact Me</a></li>
                </ul>
            </div>
        </div>
        
      </section>
    </div>
  )
}

export default Home
