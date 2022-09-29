import { 
    FaLinkedin, 
    FaGithub,
    FaTwitterSquare
} from "react-icons/fa";


const Hero = () => {
    return ( 
        <div>
            <div className="mt-20">
                <div className="text-center">
                    <h2 className="text-4xl font-poppins py-2 bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-600 font-medium sm:text-7xl">Emmanuel Soetan</h2>
                    <h3 className="text-2xl py-2 sm:text-4xl text-gray-900 font-poppins">Software developer</h3>
                    <p className="text-lg py-5 leading-8 text-gray-800 font-poppins sm:text-2xl mb-10">I’m a software developer focused in building bespoke and amazing digital experiences that are purely customer focused. Go on connect with me below.
                    </p>
                </div>

                {/* Social Icons from react icon library */}
                <div className="text-5xl flex justify-center gap-16 py-4 text-gray-700">
                    <a href="" className="hover:opacity-80" ><FaLinkedin/></a>
                    <a href="" className="hover:opacity-80" ><FaGithub/></a>
                    <a href="" className="hover:opacity-80" ><FaTwitterSquare/></a>
                   
                </div>
            </div>
        </div>
      );
}
 
export default Hero
