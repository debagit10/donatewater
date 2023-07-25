import { useState } from "react"

export default function Contact(){
    const [info, setInfo] = useState({
        senderName: '',
        email: '',
        message: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target 
        setInfo(prevState => (
            {...prevState, 
            [name]: value
            }
        ))
    }

    const handleSubmit = (e) => {
       e.preventDefault()
    }
    return (
        <>
        <section id="contact" className="relative pt-8 w-full min-h-screen bg-white text-[#cd0046]">
        <a  className="text-4xl p-4 font-bold tracking-wide">
            Contact Us 
        </a>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#2c9fb9] h-32 w-full"></div>
        
       
        <div className="relative p-5 lg:px-20 flex flex-col md:flex-row items-center justify-center">
        
           
            <div className="w-full md:w-1/2 p-5 md:px-0 mx-5">
            <div className="bg-[#76c0d0] border border-[#cd0046] w-full lg:w-1/2 h-full p-5 pt-8">
                <h3 className="text-2xl font-semibold mb-5">
                 Social Media
                </h3>
               
                <div className="flex flex-col gap-3">
                <a 
                  href="https://twitter.com/WaterDonate" 
                  className="flex items-center hover:text-white hover:bg-[#cd0046] p-2"
                  >
                        <svg 
                            viewBox="0 0 50 50" 
                            fill="currentColor" 
                            className="w-10 h-10 m-2"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                        <path d="M39.2 16.8c-1.1.5-2.2.8-3.5 1 1.2-.8 2.2-1.9 2.7-3.3-1.2.7-2.5 1.2-3.8 1.5-1.1-1.2-2.7-1.9-4.4-1.9-3.3 0-6.1 2.7-6.1 6.1 0 .5.1.9.2 1.4-5-.2-9.5-2.7-12.5-6.3-.5.7-.8 1.7-.8 2.8 0 2.1 1.1 4 2.7 5-1 0-1.9-.3-2.7-.8v.1c0 2.9 2.1 5.4 4.9 5.9-.5.1-1 .2-1.6.2-.4 0-.8 0-1.1-.1.8 2.4 3 4.2 5.7 4.2-2.1 1.6-4.7 2.6-7.5 2.6-.5 0-1 0-1.4-.1 2.4 1.9 5.6 2.9 9 2.9 11.1 0 17.2-9.2 17.2-17.2V20c1.2-.9 2.2-1.9 3-3.2z"/>
                        </svg>
                        Twitter
                </a>
                <a 
                  href="https://www.linkedin.com/company/donatewater/" 
                  className="flex items-center hover:text-white hover:bg-[#cd0046] p-2"
                  >
                        <svg 
                            fill="currentColor" 
                            className="w-6 h-6 m-2"
                            xmlns="http://www.w3.org/2000/svg" 
                            viewBox="0 0 24 24" 
                            >
                            <path d="M 21.800781 0 L 2.199219 0 C 1 0 0 1 0 2.199219 L 0 21.800781 C 0 23 1 24 2.199219 24 L 21.800781 24 C 23 24 24 23 24 21.800781 L 24 2.199219 C 24 1 23 0 21.800781 0 Z M 7 20 L 3 20 L 3 9 L 7 9 Z M 5 7.699219 C 3.800781 7.699219 3 6.898438 3 5.898438 C 3 4.800781 3.800781 4 5 4 C 6.199219 4 7 4.800781 7 5.800781 C 7 6.898438 6.199219 7.699219 5 7.699219 Z M 21 20 L 17 20 L 17 14 C 17 12.398438 15.898438 12 15.601563 12 C 15.300781 12 14 12.199219 14 14 C 14 14.199219 14 20 14 20 L 10 20 L 10 9 L 14 9 L 14 10.601563 C 14.601563 9.699219 15.601563 9 17.5 9 C 19.398438 9 21 10.5 21 14 Z"/>
                        </svg>
                        Linkedin
                </a>
                <a 
                   href="info@donatewater.ng"
                   className="flex items-center hover:text-white hover:bg-[#cd0046] p-2"
                   >
                    <svg 
                        fill="currentColor" 
                        className="w-6 h-6 m-2" 
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24" 
                        >
                       <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                    </svg>
                    
                    info@donatewater.ng
                </a>
                <a 
                   href="https://www.facebook.com/profile.php?id=100069924513582&mibextid=ZbWKwL" 
                   className="flex items-center hover:text-white hover:bg-[#cd0046] p-2"
                   >
                    <svg
                        fill="currentColor" 
                        className="w-6 h-6 m-2"
                        xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 24 24" >
                      <path d="M12,0C5.373,0,0,5.373,0,12c0,6.016,4.432,10.984,10.206,11.852V15.18H7.237v-3.154h2.969V9.927c0-3.475,1.693-5,4.581-5 c1.383,0,2.115,0.103,2.461,0.149v2.753h-1.97c-1.226,0-1.654,1.163-1.654,2.473v1.724h3.593L16.73,15.18h-3.106v8.697 C19.481,23.083,24,18.075,24,12C24,5.373,18.627,0,12,0z"/>
                    </svg>
                    Facebook
                </a>
                </div>
            </div>
            </div>
        
          
            <form 
              action="#"
              className="w-full md:w-1/2 border border-[#cd0046] p-6 bg-white"
              onSubmit={handleSubmit}
              >
            <h2 className="text-2xl pb-3 font-semibold">
                Send Message
            </h2>
            <div>
                <div className="flex flex-col mb-3">
                    <label htmlFor="name">Name</label>
                    <input 
                        type="text"
                         id="name" 
                         className="px-3 py-2 bg-[#a7e0ec] border border-gray-900 focus:outline-none focus:bg-gray-100 focus:border-gray-500 focus:text-black"
                         autoComplete="off"
                         name='senderName'
                         value={info.senderName}
                         onChange={handleChange}
                    />
                </div>
                <div className="flex flex-col mb-3">
                    <label htmlFor="email">Email</label>
                    <input 
                         type="text"
                         id="email" 
                         required
                        className="px-3 py-2 bg-[#a7e0ec] border border-gray-900  focus:outline-none focus:bg-gray-100 focus:border-gray-500 focus:text-black"
                        autoComplete="off"
                        name='email'
                        value={info.email}
                        onChange={handleChange}
                    />
                </div>
                <div className="flex flex-col mb-3">
                    <label htmlFor="message">Message</label>
                    <textarea 
                        rows="4" 
                        id="message" 
                        required
                        className="px-3 py-2 bg-[#a7e0ec] border border-gray-900 focus:outline-none focus:bg-gray-100 focus:border-gray-500 focus:text-black"
                        onChange={handleChange}
                        name='message'
                        value={info.message}
                    ></textarea>
                </div>
            </div>
            <div className="w-full pt-3">
                <button 
                    type="submit" 
                    className="w-full bg-[#3aadc4] border border-[#cd0046] px-4 py-2 transition duration-50 focus:outline-none font-semibold hover:bg-[#cd0046] hover:text-white text-xl cursor-pointer">
                    Send
                </button>
            </div>
            </form>
        </div>
        </section>
        </>
    )
}