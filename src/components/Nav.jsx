
const Navbar = () => {
    return ( 
        <div>
           <nav className="flex justify-between py-3 px-5 mt-5 sm:mx-20">
                 
           <h1 className="text-4xl font-poppins font-medium text-gray-800">Soetan.dev</h1>

            <div className="">
                <ul className="hidden sm:flex font-poppins text-xl font-light gap-4 mt-3">

                    <li><a className="bg-gradient-to-r from-cyan-500 to-blue-500 text-slate-50 px-4 py-2 rounded-md hover:opacity-75"href="">Projects</a></li>

                    <li><a className="bg-gradient-to-r from-cyan-500 to-blue-500 text-slate-50 px-4 py-2 rounded-md hover:opacity-75"href="">Contact</a></li>

                    <li><a className="text-blue-400 px-4 py-2 rounded-md hover:opacity-75 border border-blue-500/40"href="" download>Resume</a></li>
                </ul>

            </div>
    
           </nav>
           
            
        </div>
     );
}
 
export default Navbar;