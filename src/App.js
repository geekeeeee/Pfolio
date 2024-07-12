import './App.css';
import { motion,useScroll, useSpring} from "framer-motion"
import SkillsStaggered from './Components/SkillsStaggered.jsx';
import {Projectreveal1, Projectreveal2} from './Components/Projectreveal.jsx';
import Hero from './Components/Hero.jsx';
import Footer from './Components/Footer.jsx';
import Useanimate from './Components/Useanimate.jsx';
import { useEffect ,useState } from 'react';

function App() {
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, { stiffness: 50, damping: 10 });
  const [animationLoaded, setAnimationLoaded] = useState(true);
  
  return (
    <>
    animationLoaded&&<Useanimate setLoading={setAnimationLoaded} />
    // <Useanimate setLoading={setAnimationLoaded} />
    <div className='main bg-slate-900 flex flex-col  min-h-screen w-auto items-center text-white justify-center font-mons scroll scroll-smooth scrollbar-hide'>
      <motion.div 
        className="bg-green-400 sticky top-0 w-full h-[10px] origin-center z-10 rounded-full 
        drop-shadow-md"
        style={{
          scaleX
        }}
      />
      <Hero/>
      <SkillsStaggered/>
      <div className="max-w-4xl">
        <Projectreveal1 projectName="Flash Card App" 
        description="A desktop web application for preparing your own flashcards and practicing with them. Frontend developed using react and backend with node js using MongoDB as database." 
        link="https://flash-cards-frontend.vercel.app/"/>
        <Projectreveal2 projectName="Quibble" 
        description="A discord bot developed using python and discord developer API , which could fetch weather data of any place using weather API services. Multiplayer games like tic-tac-toe and more features are also available." 
        link="https://discord.com/oauth2/authorize?client_id=1247624200655601686&permissions=843961281600&scope=bot"/>
        <Projectreveal1 projectName="ShadowLeet" 
        description=" A web extension developed using chrome developer API and CSS that enables a dark mode for leetcode contest page which had a basic color scheme along with being light mode."
        link="https://github.com/geekeeeee/ShadowLeet"/>
        <Projectreveal2 projectName="MovieBase App" 
        description="A project we developed as part of our DBMS course curriculum. Spearheaded the frontend part for this project. Learned Tailwind CSS from this project." 
        link="https://moviebase-70706.web.app/"/>
        <Projectreveal1 projectName="Turf Booking App" 
        description="Learned how to create backend with firebase (backend as a service) and solved a real-world problem." 
        link="https://fir-tut-f4eff.firebaseapp.com/"/>
      </div>

      <Footer/>
    </div>
    </>
  );
}

export default App;
