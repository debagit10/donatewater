

export default function Footer(){
    return (
        <footer className="w-screen  flex-1 bg-[#22879e] h-20 flex flex-row justify-between p-7 items-center">
            <div className="justify-self-start flex flex-1 justify-between text-white font-bold text-lg content-center  items-center ">
                    <span 
                        className="w-6 ml-2 p-2 h-3 items-center text-xl shadow-2xl mb-6 rounded-full ">C</span>
                    <span className="ml-2 text-xl">2022</span>
                    <img 
                    className="mx-auto ml-5 shadow-md w-32 lg:w-1/6 sm:w-2/4 rounded-lg"
                    src="images/DonateWater-logo.jpg" alt="donate water logo"
                    />
            </div>
            <div className="justify-self-end flex sm:flex-1">
                    <img className="mx-1" src="images/unicef-img.jpg" alt="unicef logo"/>
                    <img className="mx-1" src="images/un-img.jpg" alt="UN logo"/>
                    <img className="mx-1" src="images/waid-img.jpg" alt="WAID logo"/>
            </div>
                
        </footer>
    )
}