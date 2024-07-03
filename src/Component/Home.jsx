import { FaGithub, FaLinkedinIn, FaQuora, FaWhatsapp } from "react-icons/fa";
import {  FaTwitter } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";
import { PiWhatsappLogoFill } from "react-icons/pi";



function Home() {
  return (
    <div className="home-div">
        <h1>My Creative Showcase: A Labor of Love</h1>
        <p>
        Welcome to my digital domain! I'm Suraj Bhan Singh, a passionate Full Stack Web Developer dedicated to crafting cutting-edge solutions. Dive into my journey of innovation, where every line of code is a step towards reshaping the digital landscape. Join me in exploring how technology can make a real-world impact.
        </p>

        <h2>Connect with me:</h2>

        <div className="cnt-me">
          <div className="div1">
          <button> <FaGithub size={30}/>  <br /> Github</button>
          <span>
          GitHub is a platform for hosting, sharing, and collaborating on code</span>
          </div>
          <div className="div2">
          <button> <FaLinkedinIn size={30}/>  <br /> LinkedIn</button>
          <span>
          GitHub is a platform for hosting, sharing, and collaborating on code</span>
          </div>
          <div className="div3">
          <button> <FaTwitter size={30}/> <br /> Twitter</button>
          <span>
          GitHub is a platform for hosting, sharing, and collaborating on code</span>
          </div>
          <div className="div4">
          <button> <PiWhatsappLogoFill size={30}/> <br />WhatsApp</button>
          <span>
          GitHub is a platform for hosting, sharing, and collaborating on code</span>
          </div>
          <div className="div5">
          <button> <BiLogoGmail size={30}/> <br /> Gmail</button>
          <span>
          GitHub is a platform for hosting, sharing, and collaborating on code</span>
          </div>
          <div className="div6">
          <button> <FaQuora size={30}/> <br /> Quora</button>
          <span>
          GitHub is a platform for hosting, sharing, and collaborating on code</span>
          </div>
          
        </div>
   <div className="bottom-div">
    helo

   </div>
       
    </div>
  )
}

export default Home