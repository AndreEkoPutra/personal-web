import profil from "../assets/logo/profil.png"
function About() {
  return (
    <div>
      <section id="about" className="h-screen flex">
        <div className="w-50 h-50 ">
            <img className="rounded-2xl" src={profil}/>
            <h1>My Photo Profil</h1>
        </div>
        <div>
            <h1>About Me</h1>
            <h1>I,m <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-indigo-100">Andreanus Eko Putra</span>, a Web Dev & Mobile Dev</h1>
            <p>Aku adalah mahasiswa Untan dari program studi sistem informasi</p>
            <p>Asal saya dari ponti, dan saya adalaah orang amang</p>
            <div className="flex space-x-5">
                <div className="flex py-1 rounded-lg border border-white font-bold">
                    <div className="w-7 h-7"><img src="https://www.citypng.com/public/uploads/preview/linkedin-square-white-icon-transparent-png-701751694974206tsxnbf2rft.png"/></div>
                    <h1>Dusun Amang</h1>
                </div>
                <div className="flex py-1 rounded-lg border border-white font-bold">
                    <div className="w-7 h-7"><img src="https://www.citypng.com/public/uploads/preview/linkedin-square-white-icon-transparent-png-701751694974206tsxnbf2rft.png"/></div>
                    <h1>h1101221059@student.untan.ac.id</h1>
                </div>
            </div>
            <div className="flex space-x-5">
                <div className="flex py-1 rounded-lg border border-white font-bold">
                    <div className="w-7 h-7"><img src="https://www.citypng.com/public/uploads/preview/linkedin-square-white-icon-transparent-png-701751694974206tsxnbf2rft.png"/></div>
                    <h1>083152005982</h1>
                </div>
                <div className="flex py-1 rounded-lg border border-white font-bold">
                    <div className="w-7 h-7"><img src="https://www.citypng.com/public/uploads/preview/linkedin-square-white-icon-transparent-png-701751694974206tsxnbf2rft.png"/></div>
                    <h1>Sistem Informasi, Universitas Tanjungpura</h1>
                </div>
            </div>
            <div className="">
                <ul className="flex space-x-5">
                    <li className="px-4 py-1 rounded-lg border border-white font-bold text-blue-300 hover:bg-gradient-to-r hover:from-indigo-400 hover:to-indigo-100 hover:text-black transition-colors duration-300 cursor-pointer"><a href="www.google.com" target="_blank">Download CV</a></li>
                    <li className="px-4 py-1 rounded-lg border border-white font-bold text-blue-300 hover:bg-gradient-to-r hover:from-indigo-400 hover:to-indigo-100 hover:text-black transition-colors duration-300 cursor-pointer"><a href="www.facebook.com" target="_blank">Hire Me</a></li>
                </ul>
            </div>
        </div>
      </section>
    </div>
  )
}

export default About
