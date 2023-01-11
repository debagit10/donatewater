import Motto from './components/Motto';
import ProbStatement from './components/ProbStatement';
import SlidePage from './components/SlidePage';
import Footer from './components/Footer';
import NavBar from './components/Navbar';
import Contact from './components/Contact';
// import {Switch, Route} from "react-router-dom";


export default function App() {
  return (
    
    <div className="p-5 sm:m-[-0] flex flex-col md:justify-center md:items-center overflow-hidden">
      <NavBar />
        <Motto />
        <ProbStatement />
        <SlidePage />
        <Contact />
      <Footer />
    </div>
   
  );
}

{/* <NavBar />
<Switch>
    <Route exact path="/" component={Motto} />
    <Route path="/blog" component={SlidePage} />
    <Route path="/contact" component={Contact} />
</Switch>
<ProbStatement />
<Footer /> */}


