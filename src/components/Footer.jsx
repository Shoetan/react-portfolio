import { 
    FaLinkedin, 
    FaGithub,
    FaTwitterSquare
} from "react-icons/fa";


const Footer = () => {
    return ( 
        <div className='' >
            <div className="p-4 mt-10 mx-4 border-t-2 border-slate-300">
                <h1 className="text-2xl font-poppins text-gray-800 mx-2">Soetan.dev</h1>
                <div className="text-2xl text-gray-700 p-2 flex gap-6 sm:text-3xl">
                <a href="https://www.linkedin.com/in/emmanuelsoetan/" target='_blank'> <FaLinkedin/></a>
                <a href="https://github.com/Shoetan" target = '_blank'> <FaGithub/> </a>
                <a href="https://twitter.com/immanuelsoetan" target='_blank' > <FaTwitterSquare/> </a>
            </div>
            </div>
            
        </div>
     );
}
 
export default Footer;