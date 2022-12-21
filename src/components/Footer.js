

export default function Footer(){
    return (
        <footer className="w-[100%] h-10 flex flex-row justify-between ">
       <div className="justify-self-start text-white font-bold text-lg ">
             <span 
                className="w-[25px] p-2 h-[10px] shadow-xl rounded-full bg-[#1d9cb3]">C</span>
            <span>2022</span>
       </div>
       <div className="justify-self-end flex">
            <img className="m-1" src="images/unicef-img.jpg" alt="unicef logo"/>
            <img className="m-1" src="images/un-img.jpg" alt="UN logo"/>
            <img className="m-1" src="images/waid-img.jpg" alt="WAID logo"/>
       </div>
          
        </footer>
    )
}