

export default function Footer(){
    return (
        <footer className="w-screen  flex-1 bg-[#22879e] h-20 flex flex-row justify-between sm:justify-evenly p-7 items-center">
            <div className="justify-self-start flex flex-1 text-white font-bold text-lg content-center  items-center ">
                    <span 
                        className="w-[25px] ml-2 p-2 h-[10px] items-center shadow-xl rounded-full bg-[#1d9cb3]">C</span>
                    <span className="ml-2">2022</span>
                    <img 
                    className="self-center ml-5 shadow-md w-32 "
                    src="images/donatewater3-logo.png" alt="donate water logo"
                    />
            </div>
            <div className="justify-self-end flex sm:flex-1">
                    <img className="m-1" src="images/unicef-img.jpg" alt="unicef logo"/>
                    <img className="m-1" src="images/un-img.jpg" alt="UN logo"/>
                    <img className="m-1 " src="images/waid-img.jpg" alt="WAID logo"/>
            </div>
                
        </footer>
    )
}