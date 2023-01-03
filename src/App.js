
import Header from './components/Header'
import Motto from './components/Motto';
import ProbStatement from './components/ProbStatement'
import SlidePage from './components/SlidePage'
import Footer from './components/Footer'
import NavBar from './components/Navbar'
import Slogan from './components/Slogan'
import Contact from './components/Contact'
import {Link, Switch, Route} from "react-router-dom"

export default function App() {
  return (
    <div className="p-5 sm:m-[-0] flex flex-col md:justify-center md:items-center overflow-hidden">
       <NavBar />
       {/*<Header />*/}
       <Motto />
       {/* {<Slogan />} */}
       <ProbStatement />
       <SlidePage />
       <Contact/>
       <Footer />
    </div>
   
  );
}


