import css from '../assets/Images/css.png'
import express from '../assets/Images/express.png'
import firebase from '../assets/Images/firebase.png'
import github from '../assets/Images/github.png'
import html from '../assets/Images/html.png'
import nodejs from '../assets/Images/nodejs.png'
import react from '../assets/Images/react.png'
import Tailwind from '../assets/Images/Tailwind.png'
import js from '../assets/Images/js.png'




const Tech = () => {
    return ( 
        <div>
            <div className=''>
                <h3 className='text-2xl font-poppins font-medium text-center mt-14 mb-5 sm:text-4xl'>Tools I use</h3>
                <p className='font-poppins text-center font-light text-lg p-2 mx-4 sm:text-2xl mb-16'>I use these mordern technologies to breathe life into what I do</p>
            </div> 

            <div className='w-96 mx-auto flex flex-wrap justify-center gap-5 sm:max-w-2xl '>

                <div className=''>
                    <h4 className='text-lg font-poppins text-center'>css</h4>
                    <img width = {100} height = {100} className='hover:opacity-70' src={css} alt="css" />
                </div>

                <div className='text-center '>
                    <h4 className='text-lg font-poppins'>express js</h4>
                    <img width = {100} height = {100} className='hover:opacity-70' src={express} alt="css" />
                </div>

                <div className='text-center'>
                    <h4 className='text-lg font-poppins'>firebase</h4>
                    <img width = {100} height = {100} className='hover:opacity-70' src={firebase} alt="css" />
                </div>

                <div className='text-center'>
                    <h4 className='text-lg font-poppins'>github</h4>
                    <img width = {100} height = {100} className='hover:opacity-70' src={github} alt="css" />
                </div>

                <div className='text-center'>
                    <h4 className='text-lg font-poppins'>html</h4>
                    <img width = {100} height = {100} className='hover:opacity-70' src={html} alt="css" />
                </div>

                <div className='text-center'>
                    <h4 className='text-lg font-poppins'>node js</h4>
                    <img width = {100} height = {100} className='hover:opacity-70' src={nodejs} alt="css" />
                </div>

                <div className='text-center'>
                    <h4 className='text-lg font-poppins'>react js</h4>
                    <img width = {100} height = {100} className='hover:opacity-70' src={react} alt="css" />
                </div>

                <div className='text-center'>
                    <h4 className='text-lg font-poppins'>Tailwind CSS</h4>
                    <img width = {100} height = {100} className='hover:opacity-70' src={Tailwind} alt="css" />
                </div>

                <div className='text-center'>
                    <h4 className='text-lg font-poppins'>javascript</h4>
                    <img width = {100} height = {100} className='hover:opacity-70' src={js} alt="css" />
                </div>
               
            </div>
        </div>
     );
}
 
export default Tech;