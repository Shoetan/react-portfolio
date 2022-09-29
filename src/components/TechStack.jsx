import css from '../assets/Images/css.png'
import express from '../assets/Images/express.png'
import firebase from '../assets/Images/firebase.png'
import github from '../assets/Images/github.png'
import html from '../assets/Images/html.png'
import javascript from '../assets/Images/javascript.png'
import node from '../assets/Images/node.png'
import react from '../assets/Images/react.png'
import Tailwind from '../assets/Images/Tailwind.png'



const Tech = () => {
    return ( 
        <div>
            <div className=''>
                <h3 className='text-2xl font-poppins font-medium text-center mt-14 mb-10 sm:text-4xl'>Tools I use</h3>
                <p className='font-poppins text-center font-light text-lg sm:text-2xl mb-16'>I use these mordern technologies to breathe life into what I do</p>
            </div> 
            <div className='w-96 mx-auto grid grid-cols-4 gap-6 items-center'>
                <h4 className='text-lg font-poppins'>css</h4><img width = {100} height = {100} className='hover:opacity-70' src={css} alt="css" />
                <h4 className='text-lg font-poppins'>express js</h4><img width = {100} height = {100} className='hover:opacity-70' src={express} alt="express" />
                <h4 className='text-lg font-poppins'>firebase</h4><img width = {100} height = {100} className='hover:opacity-70' src={firebase} alt="firebase" />
                <h4 className='text-lg font-poppins'>github</h4><img width = {100} height = {100} className='hover:opacity-70' src={github} alt="github" />
                <h4 className='text-lg font-poppins'>html</h4><img width = {100} height = {100} className='hover:opacity-70' src={html} alt="html" />
                <h4 className='text-lg font-poppins'>javascript</h4><img width = {100} height = {100} className='hover:opacity-70' src={javascript} alt="javascript" />
                <h4 className='text-lg font-poppins'>node js</h4><img width = {100} height = {100} className='hover:opacity-70' src={node} alt="node" />
                <h4 className='text-lg font-poppins'>react js</h4><img width = {100} height = {100} className='hover:opacity-70' src={react} alt="react" />
                <h4 className='text-lg font-poppins'>tailwind CSS</h4><img width = {100} height = {100} className='hover:opacity-70' src={Tailwind} alt="tailwind css" />
               
            </div>
        </div>
     );
}
 
export default Tech;