
const Navbar = () => {
    return ( 
        <div>
           <nav className="flex justify-between p-5 mt-5 m-10  sm:mx-20">
                 
           <h1 className="text-4xl font-poppins font-medium text-gray-800">Soetan.dev</h1>

            <div className="">
                <ul className=" hidden sm:flex font-poppins text-xl font-light gap-4 mt-3">
                    <li><a className="bg-gradient-to-r from-cyan-500 to-blue-500 text-slate-50 px-4 py-2 rounded-md hover:opacity-75 "href="">About</a></li>

                    <li><a className="bg-gradient-to-r from-cyan-500 to-blue-500 text-slate-50 px-4 py-2 rounded-md hover:opacity-75"href="">Projects</a></li>

                    <li><a className="bg-gradient-to-r from-cyan-500 to-blue-500 text-slate-50 px-4 py-2 rounded-md hover:opacity-75"href="">Contact</a></li>

                    <li><a className="text-blue-400 px-4 py-2 rounded-md hover:opacity-75 border border-blue-500/40"href="">Resume</a></li>
                </ul>

                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                     <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" className="text-2xl sm:hidden" />
                    </svg>
            </div>
    
           </nav>
           
            
        </div>
     );
}
 
export default Navbar;