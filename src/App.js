import './App.css';
import Header from './components/Header'
import Motto from './components/Motto';
import ProbStatement from './components/ProbStatement'
import SlidePage from './components/SlidePage'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="p-5">
       <Header />
       <Motto />
       <ProbStatement />
       <SlidePage />
       <Footer />
    </div>
  );
}


