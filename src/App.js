
import Header from './components/Header'
import Motto from './components/Motto';
import ProbStatement from './components/ProbStatement'
import SlidePage from './components/SlidePage'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="p-5 flex flex-col md:justify-center md:items-center">
       <Header />
       <Motto />
       <ProbStatement />
       <SlidePage />
       <Footer />
    </div>
  );
}


