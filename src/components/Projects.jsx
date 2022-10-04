import linkedin from '../assets/Images/linkedin.png'
import whatsapp from '../assets/Images/whatsapp.jpg'


const Projects = () => {
    return (  
        <div>
            <div>
                <h3 className="text-2xl font-poppins font-medium text-center mt-14 mb-5 text-gray-800 sm:text-4xl">Projects</h3>
            </div>

            {/* Projects card */}
            <div className='flex flex-col w-full mx-auto sm:flex-row gap-20 justify-center items-center'>

                    {/* First project here */}
                <div className='max-w-sm rounded shadow-lg h-auto'>
                    <img src={linkedin} alt="" className='w-full'/>
                    <h3 className='font-poppins text-left p-2 m-2 text-lg'>Linkedin Clone</h3>
                    <p className='font-poppins p-2 m-2'>Recreation of the famous platform for professionals and job seekers.</p>
                    <div className='flex justify-between px-6 pt-4 pb-4'>
                    
                        <a href=" https://react-linkedin-clone.netlify.app/	" target='_blank' className='text-lg font-poppins bg-gradient-to-br from-cyan-500 to-blue-600 px-8 rounded-full text-white hover:opacity-90'>View Demo</a>

                        <a href="https://github.com/Shoetan/react-linkedin-clone" target='_blank' className='text-lg font-poppins bg-gradient-to-br from-cyan-500 to-blue-600 px-8 rounded-full text-white hover:opacity-80'>Github</a>
                    </div>
                </div>

                    {/* Second project here */}
                <div className='max-w-sm rounded shadow-lg'>
                    <img src={whatsapp} alt="" className='w-full'/>
                    <h3 className='font-poppins p-2 m-2'>Whatsapp Clone</h3>
                    <p className='font-poppins p-2 m-2'>Chatting application to send and recieve text and multimedia in real time</p>

                    <div className='flex justify-around px-6 pt-4 pb-4 '>

                        <a href="https://whatsapp-clone-black.vercel.app/" target="_blank" className='text-lg font-poppins bg-gradient-to-br from-cyan-500 to-blue-600 px-8 rounded-full text-white hover:opacity-80 '>View Demo</a>

                        <a href="https://github.com/Shoetan/whatsapp-clone" target = '_blank' className='text-lg font-poppins bg-gradient-to-br from-cyan-500 to-blue-600 px-8 rounded-full text-white hover:opacity-80'>Github</a>

                    </div>

                </div>

                {/* Third project here */}
{/* 
                <div className='max-w-sm rounded shadow-lg'>
                    <img src={whatsapp} alt="" className='w-full'/>

                    <div className='flex justify-around px-6 pt-4 pb-4'>

                        <a href="" className='text-lg font-poppins bg-gradient-to-br from-cyan-500 to-blue-600 px-8 rounded-full text-white hover:opacity-80 '>View Demo</a>

                        <a href="" className='text-lg font-poppins bg-gradient-to-br from-cyan-500 to-blue-600 px-8 rounded-full text-white hover:opacity-80'>Github</a>

                    </div>

                </div> */}

            </div>

                                    
        </div>
    );
}
 
export default Projects;
<div>
    This is the projects section
</div>