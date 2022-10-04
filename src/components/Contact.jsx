import { useRef } from "react"
import emailjs from '@emailjs/browser'


const Contact = () => {


    const form = useRef()

    const sendEmail = (e) =>{

        e.preventDefault()

        emailjs.sendForm('service_8d6knol', 'contact_form', form.current, 'fTupcckvN7eMdMKo9')
        .then((result) => {
            console.log(result.text)
            e.target.reset();
        }, (error) => {
            console.log(error.text);
        });



    }

    
    return ( 

        <div>
        <h3 className="text-2xl font-poppins font-medium text-center mt-14 mb-5 text-gray-800 sm:text-4xl">
            Send me an email
        </h3>
         <form ref = {form} onSubmit={sendEmail} action="" method="post" className="flex flex-col w-96 mx-auto sm:w-2/5">
            <input type="text" className="m-2 p-2 outline-none border-b-2 border-blue-500 font-poppins bg-inherit" placeholder="Fullname" required name = 'user_name'/>

            <input type="email" name="user_email" id="" className="font-poppins m-2 p-2 outline-none border-b-2 border-blue-500 bg-inherit" placeholder="Your email" required />

            <input type="text" name="subject" id="" className="font-poppins m-2 p-2 outline-none border-b-2 border-blue-500 bg-inherit" placeholder="subject" required/>
            
            <textarea name="message" id="" cols="30" rows="10" className="m-2 p-2 outline-none border-b-2 border-blue-500 bg-inherit font-poppins"placeholder="Your message" required>

            </textarea>
            <button type='submit' className="bg-blue-500 text-slate-100 font-poppins m-2 p-2 rounded-full hover:scale-95"> SEND</button>
         </form>
        </div>
    );
}
 
export default Contact
