

export default function Footer(){
    return (
        <footer className="w-full   bg-[#22879e] h-40 p-5  ">
         <div className="flex flex-1 flex-row  justify-center content-center w-screen  bg-white  m-0 p-10  items-center">
               <div className="  mr-10 text-black font-bold text-xl sm:w-16 w-5 items-center ">
                    <span 
                        className="ml-0 p-2 h-3 items-center shadow-2xl mb-6 rounded-full ">C</span>
                    <span className="ml-1 ">2022</span>
                   
                </div>
                 <img 
                    className=" ml-8 shadow-md sm:w-12 w-6  lg:w-28 bg-cover md:w-8 rounded-lg sm:mr-5"
                    src="images/DonateWater-logo.jpg" alt="donate water logo"
                 />
            
                    <img className="mx-3 md:w-14 sm:w-10 w-6 shadow-md bg-cover" src="images/unicef_logo.png" alt="unicef logo"/>
                    <img className="mx-3 md:w-24 sm:w-10 w-6 shadow-md bg-cover" src="images/UN_logo.png" alt="UN logo"/>
                    <img className="mx-3 sm:mr-8 sm:w-20 w-6 shadow-md" src="images/waid.png" alt="WAID logo"/>
            
         </div>
                
        </footer>
    )
}