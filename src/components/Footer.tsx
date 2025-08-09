import github from "../assets/logo/github.png"
import tiktok from "../assets/logo/tiktok.png"
function Footer() {
  return (
    <footer>
      <div className="relative flex items-center justify-center h-16 bg-black">
        <div className="absolute left-0 px-3">
          <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-indigo-100">Andreanus Eko Putra</h1>
        </div>
        <div>
          <ul className="flex space-x-4">
            <li className="w-7 h-6"><a href="https://github.com/AndreEkoPutra" target="_blank"><img src={github} alt="GitHub"/></a></li>
            <li className="w-7 h-6"><a href="https://www.linkedin.com/in/andreanus-eko-putra-127191312?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank"><img src="https://www.citypng.com/public/uploads/preview/linkedin-square-white-icon-transparent-png-701751694974206tsxnbf2rft.png" alt="LinkedIn"/></a></li>
            <li className="w-7 h-6"><a href="https://www.tiktok.com/@andreputranot?_t=ZS-8yi2rkRkjVB&_r=1" target="_blank"><img src={tiktok} alt="TikTok"/></a></li>
            <li className="w-7 h-6"><a href="https://www.instagram.com/npmrun_dev?igsh=eGk5ZWs5b2tha2N6" target="_blank"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/1200px-Instagram_logo_2022.svg.png" alt="Instagram"/></a></li>
          </ul>
        </div>
        <div className="absolute right-0 px-3">
          &copy; {new Date().getFullYear()} Andreanus Eko Putra. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer
