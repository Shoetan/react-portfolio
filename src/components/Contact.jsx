const Contact = () => {
    return (  
        <div>
        <h3 className="text-2xl font-poppins font-medium text-center mt-14 mb-5 sm:text-4xl">
            Send me an email
        </h3>
         <form action="" method="post" className="flex flex-col w-96 mx-auto sm:w-2/5">
            <input type="text" className="m-2 p-2 outline-none border-b-2 border-blue-500 font-poppins bg-inherit" placeholder="Fullname"/>
            <input type="email" name="" id="" className="font-poppins m-2 p-2 outline-none border-b-2 border-blue-500 bg-inherit" placeholder="Your email"/>
            <textarea name="" id="" cols="30" rows="10" className="m-2 p-2 outline-none border-b-2 border-blue-500 bg-inherit">

            </textarea>
            <button type='submit' className="bg-blue-500 text-slate-100 font-poppins m-2 p-2 rounded-full hover:scale-95"> SEND</button>
         </form>
        </div>
    );
}
 
export default Contact
