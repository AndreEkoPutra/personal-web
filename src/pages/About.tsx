import profil from "../assets/logo/profil.png"
function About() {
  return (
    <section id="about" className="h-screen flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-indigo-100">About Me</h1>
        <div className="flex">
            <div className="kiri w-60 h-60">
                <img className="bg-gradient-to-t from-indigo-800 to-indigo-500 border-2 border-indigo-200 rounded-3xl" src={profil} />
            </div>


            <div className="kanan pl-11">
                <h1>I'm <span>Andreanus Eko Putra</span>, a Web Developer & Android Developer</h1>
                <p>Sayay adalah seorang mahasiswa</p>
                <p>Ketertarikan saya adalah pada web dan android</p>
                <ul className="flex space-x-1 space-y-1">
                    <li className="border-2 border-red-100 w-50 h-10 flex items-center">1</li>
                    <li className="border-2 border-red-100 w-50 h-10 flex items-center">2</li>
                </ul>
                <ul className="flex space-x-1 space-y-1">
                    <li className="border-2 border-red-100 w-50 h-10 flex items-center">3</li>
                    <li className="border-2 border-red-100 w-50 h-10 flex items-center">4</li>
                </ul>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#home">Home</a></li>
                </ul>
            </div>
        </div>
    </section>
  )
}

export default About
