import linkedin from '../assets/Images/linkedin.png'
import whatsapp from '../assets/Images/whatsapp.jpg'


const Projects = () => {
    return (  
        <div>
            <div>
                <h3 className="text-2xl font-poppins font-medium text-center mt-14 mb-5 sm:text-4xl">Projects</h3>
            </div>

            {/* Projects card */}
            <div className='w-96 mx-auto sm:flex gap-6'>
                <div className='border rounded-b-2xl mb-5 shadow-xl sm:basis-4/12'>
                    <img src={linkedin} alt="" className=''/>
                    <div className='flex justify-around p-4'>
                        <a href="" className='text-lg font-poppins bg-gradient-to-br from-cyan-500 to-blue-600 px-8 rounded-full text-white hover:opacity-90'>View Demo</a>

                        <a href="" className='text-lg font-poppins bg-gradient-to-br from-cyan-500 to-blue-600 px-8 rounded-full text-white hover:opacity-80'>Github</a>
                    </div>
                </div>

                <div className='border rounded-b-2xl shadow-xl mb-5 basis-4/12'>
                    <img src={whatsapp} alt="" className=''/>
                    <div className='flex justify-around p-4'>
                        <a href="" className='text-lg font-poppins bg-gradient-to-br from-cyan-500 to-blue-600 px-8 rounded-full text-white hover:opacity-80'>View Demo</a>

                        <a href="" className='text-lg font-poppins bg-gradient-to-br from-cyan-500 to-blue-600 px-8 rounded-full text-white hover:opacity-80'>Github</a>
                    </div>
                </div>

                {/* Third project here */}

            </div>
        </div>
    );
}
 
export default Projects;
<div>
    This is the projects section
</div>